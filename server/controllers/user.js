const bcrypt = require('bcrypt');
const User = require('../models').User;


module.exports = {
  signup(req, res) {
    bcrypt.hash(req.body.password, 3, (err, hash) => {
      if (!err) {
        return User
          .create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
          })
          .then(user => res.status(201).json(user))
          .catch(error => res.status(400).json(error));
      }
    });
  },
  allUsers(req, res) {
    return User
      .findAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  },
};
