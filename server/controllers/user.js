/**
 * Import Module dependencies
 */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../models/index';

/**
 * @param  {object} req
 * @param  {object} res
 * @description create a user with username, email and password.
 */
dotenv.load();
const secret = process.env.secretKey;
const User = db.User;
const Group = db.Group;

const createUser = {
  signup(req, res) {
    return User
      .create(req.body, { fields: Object.keys(req.body) })
      .then((user) => {
        const token = jwt.sign(
          { userId: user.id,
            username: user.username
          }, secret
        );
        const myKey = { firstName: '', lastName: '', username: '', email: '' };
        const account = {};
        Object.keys(myKey).forEach((key) => {
          account[key] = user[key];
        });
        res.status(201).send({
          success: true,
          message: 'Token successfully generated',
          Token: token,
          user: account,

        });
      })
      .catch(error => res.send(error));
  },
  allUsers(req, res) {
    return User
      .findAll({
        attributes: ['id', 'firstName', 'lastName', 'username', 'email'],
        order: [['firstName']],
        include: [{
          model: Group,
          as: 'groups',
          attributes: ['id', 'groupName'],
        }]
      })
      .then((users) => {
        res.status(200).send(users);
      })
      .catch(error => res.status(400).send(error));
  },
  deactivateAccount(req, res) {
    return User
      .findById(req.decoded.user.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'User not found'
          });
        }
        return user
          .destroy()
          .then(() => {
            res.status(200).send({
              success: true,
              message: 'User account successfully deactivated'
            });
          });
      })
      .catch(error => res.status(404).send(error));
  },
  update(req, res) {
    return User
      .findById(req.decoded.user.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'User not found'
          });
        } else if (!req.body.password || !bcrypt.compareSync(req.body.password, user.password)) {
          return res.status(401).send({
            success: false,
            message: 'Invalid password'
          });
        }
        return user
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => {
            res.status(201).send({
              success: true,
              message: 'User profile updated'
            });
          });
      })
      .catch(error => res.send(error));
  },
};

export default createUser;
