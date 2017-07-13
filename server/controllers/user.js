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
const UserGroup = db.UserGroup;

const createUser = {
  signup(req, res) {
    if (!req.body.username) {
      return res.status(400).json({
        error: 'Username not be empty'
      });
    }
    if (!req.body.email) {
      return res.status(400).json({
        error: 'Email must not be empty'
      });
    }
    if (!req.body.password) {
      return res.status(400).json({
        error: 'Password must not be empty'
      });
    }
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then((user) => {
        const token = jwt.sign(
          { userId: user.id,
            userName: user.userName
          }, secret
        );
        res.status(201).json({
          success: true,
          message: 'Token generated successfully',
          Token: token,
          user
        });
      })
      .catch(error => res.status(400).json(error));
  },
  allUsers(req, res) {
    return User
      .findAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  },
  /**
   * @param  {object} req
   * @param  {object} res
   * @description fetch all the users from database
   * @return {array} all users in an array
   */
  userGroups(req, res) {
    const list = [];
    UserGroup
      .findAll({ where: { userId: req.params.userId } })
      .then((usergroup) => {
        usergroup.forEach((obj) => {
          list.push(obj.groupId);
        });
        Group
          .findAll({ where: { id: list } })
          .then(group => res.status(200).send(group))
          .catch(error => res.status(404).send(error));
      })
      .catch(error => res.status(404).send(error));
  }
};

export default createUser;
