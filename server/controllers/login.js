
const bcrypt = require('bcrypt');
// const db = require('../models').db;
const User = require('../models').PostIts;
// const group = require('../models').groups;
// const groupMember = require('../models').groupMembers;
// const groupPost = require('../models').groupPosts;


module.exports = {
  findUser(req, res) {
    return User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ message: 'User not found' });
        }
        bcrypt.compare(req.body.password, user.password, (error, response) => {
          if (response) {
            return res.status(200).json({ message: 'Welcome to PostIt', user });
          }
          return res.status(501)
            .json({ message: 'Invalid username or password' });
        });
      });
  },
};
