/**
 * Import Module dependencies
 */
import bcrypt from 'bcrypt';
import db from '../models/index';
// const group = require('../models').groups;
// const groupMember = require('../models').groupMembers;
// const groupPost = require('../models').groupPosts;

const User = db.User;
const Group = db.Group;
const UserGroup = db.UserGroup;
const Message = db.Message;
console.log(User, Group, UserGroup, Message);

module.exports = {
  signin(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({
        error: 'Username or Password must not be empty'
      });
    }
    return User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'Invalid Auth Details' });
        }
        const check = bcrypt.compareSync(req.body.password, user.password);
        if (check && req.session) {
          return res.status(202).json({ message: 'Welcome to PostIt', user });
        }
        return res.status(401)
          .json({ message: 'Invalid Auth Details' });
      });
  },
};
