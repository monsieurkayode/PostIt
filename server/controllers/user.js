const PostIt = require('../models').PostIt;


module.exports = {
  create(req, res) {
    return PostIt
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
      })
      .then(postit => res.status(201).json(postit))
      .catch(error => res.status(400).json(error));
  },
};