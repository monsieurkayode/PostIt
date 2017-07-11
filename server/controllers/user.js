const bcrypt = require('bcrypt');
const User = require('../models').PostIts;


module.exports = {
  create(req, res) {
    bcrypt.hash(req.body.password, 3, (err, hash) => {
      if (!err) {
        return User
          .create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            phone: req.body.phone,
          })
          .then(postit => res.status(201).json(postit))
          .catch(error => res.status(400).json(error));
      }
    });
  },
  allUsers(req, res) {
    return User
      .all()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  },
};
