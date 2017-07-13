/**
 * Import Module dependencies
 */
import db from '../models/index';

const Group = db.Group;

const createGroup = {
  create(req, res) {
    return Group
      .create({
        groupName: req.body.groupName,
        description: req.body.description,
      })
      .then(group => res.status(201).json({ message: 'Created', group }))
      .then((usergroup) => {
        usergroup.addUser(req.param.userId);
      })
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
            res.status(201).json({
              message: `Succesfully added ${req.body.userId}`
            });
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
            res.status(200).json({ message: `Succesfully removed ${group.userId}` });
          })
          .catch(error => res.status(400).json(error));
      });
  },
  findGroupMembers(req, res) {
    return Group
      .findById(req.params.groupId)
      .then((group) => {
        group.getUser(req.body.userId)
          .then(() => {
            res.status(200).json({ message: `Success ${group.userId}` });
          })
          .catch(error => res.status(400).json(error));
      });
  },
};

export default createGroup;
