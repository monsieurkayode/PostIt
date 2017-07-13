
const bcrypt = require('bcrypt');
const User = require('../models').User;
const session = require('express-session');
// const group = require('../models').groups;
// const groupMember = require('../models').groupMembers;
// const groupPost = require('../models').groupPosts;


module.exports = {
  signin(req, res) {
    return User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'Invalid Auth Details' });
        }
        bcrypt.compare(req.body.password, user.password, (error, response) => {
          if (response) {
            return res.status(202).json({ message: 'Welcome to PostIt', user });
          }
          return res.status(401)
            .json({ message: 'Invalid Auth Details' });
        });
      });
  },
};
