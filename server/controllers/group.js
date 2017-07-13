const Group = require('../models').Group;
const UserGroup = require('../models').UserGroup;

module.exports = {
  create(req, res) {
    return Group
      .create({
        groupName: req.body.groupName,
        description: req.body.description,
      })
      .then(group => res.status(201).json(group))
      .catch(error => res.status(400).json(error));
  },
  allGroups(req, res) {
    return Group
      .all()
      .then(group => res.status(200).json(group))
      .catch(error => res.status(400).json(error));
  },
  addUser(req, res) {
    return Group
      .findById(req.params.groupId)
      .then((group) => {
        group.addUser(req.body.userId)
          .then(() => {
            res.status(201).json({ message: 'Succesfully added user' });
          })
          .catch(error => res.status(400).json(error));
      });
  },
  removeUser(req, res) {
    return Group
      .findById(req.params.groupId)
      .then((group) => {
        group.removeUser(req.body.userId)
          .then(() => {
            res.status(200).json({ message: 'Succesfully removed user' });
          })
          .catch(error => res.status(400).json(error));
      });
  },
};
