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
// const Group = db.Group;
// const GroupMember = db.GroupMember;

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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
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
        const myKey = { firstName: '', lastName: '', email: '' };
        const account = {};
        Object.keys(myKey).forEach((key) => {
          account[key] = user[key];
        });
        res.json({
          message: 'Success, Token succesfully generated',
          Token: token,
          account
        });
      })
      .catch(error => res.json(error.message));
  },
  allUsers(req, res) {
    return User
      .findAll()
      .then((users) => {
        const myKey = { firstName: '', lastName: '', email: '' };
        const allUsers = {};
        Object.keys(myKey).forEach((key) => {
          allUsers[key] = users[key];
        });
        res.send(allUsers);
      })
      .catch(error => res.send(error.message));
  },
  /**
   * @param  {object} req
   * @param  {object} res
   * @description fetch all the users from database
   * @return {array} all users in an array
   */
  // groupMembers(req, res) {
  //   const list = [];
  //   GroupMember
  //     .findAll({ where: { userId: req.params.userId } })
  //     .then((groupmembers) => {
  //       groupmembers.forEach((obj) => {
  //         list.push(obj.groupId);
  //       });
  //       Group
  //         .findAll({ where: { id: list } })
  //         .then(users => res.status(200).send(users))
  //         .catch(error => res.status(404).send(error.message));
  //     })
  //     .catch(error => res.status(404).send(error.message));
  // }
};

export default createUser;
