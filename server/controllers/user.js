/**
 * Import Module dependencies
 */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
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
        res.send({
          success: true,
          message: 'Success, Token succesfully generated',
          Token: token,
          user: account
        });
      })
      .catch(error => res.send(error));
  },
  allUsers(req, res) {
    return User
      .findAll({
        attributes: ['id', 'firstName', 'lastName', 'username', 'email'],
        include: [{
          model: Group,
          as: 'groups',
          attributes: ['id', 'groupName']
        }]
      })
      .then((users) => {
        res.send(users);
      })
      .catch(error => res.send(error));
  },
  deactivateAccount(req, res) {
    return User
      .destroy({ where: { id: req.decoded.userId } })
      .then((user) => {
        if (!user) {
          res.status(404).send({
            success: false,
            message: 'User not found'
          });
        } else {
          res.status(200).send({
            success: true,
            message: 'User account deactivated'
          });
        }
      })
      .catch(error => res.send(error));
  }
};

export default createUser;
