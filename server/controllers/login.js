const PostIt = require('../models').postit;

module.exports = {
  findUser(req, res) {
    return PostIt
      .findOne({ where: {username: req.body.username }})
      .then((user) => {
        if (!user) {
          return res.status(401).json({success:false, message: "Authentication failed, invalid username or password"});
        } else if(password != req.body.password) {
          return res.status(401).json({success:false, message: "Authentication failed, invalid username or password"});
        }
      })
      .catch(error => res.status(400).send(error));
  },
};