const PostIt = require('../models').PostIt;


module.exports = {
  create(req, res) {
    return PostIt
      .create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
      .then(postit => res.status(201).json(postit))
      .catch(error => res.status(400).json(error));
  },
};