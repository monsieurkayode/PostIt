const UserGroup = require('../models').UserGroup;

module.exports = {
  removeUser(req, res) {
    return UserGroup
      .create({
        userId: req.body.userId,
        groupId: req.params.groupId,
      })
      .then(usergroup => res.status(201).json(usergroup))
      .catch(error => res.status(400).json(error));
  },
};
