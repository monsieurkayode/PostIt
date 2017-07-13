/**
 * Import Module dependencies
 */
import db from '../models/index';

// Declare a variable for group table in database
const Group = db.Group;

// Functions below here for group model
const createGroup = {
  create(req, res) {
    return Group
      .create({
        groupName: req.body.groupName,
        description: req.body.description,
      })
      .then(group => res.status(200).send(group))
      .catch(error => res.status(400).json(error));
  },

  // Function to return all groups in database
  allGroups(req, res) {
    return Group
      .all()
      .then(group => res.status(200).json(group))
      .catch(error => res.status(400).json(error));
  },

  // Function to add a registered user to group
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

  // Function to remove user from group
  removeUser(req, res) {
    return Group
      .findById(req.params.groupId)
      .then((group) => {
        group.removeUser(req.body.userId)
          .then(() => {
            res.status(200)
              .json({ message: `Succesfully removed ${group.userId}` });
          })
          .catch(error => res.status(400).json(error));
      });
  },

  // Function to find memebrs of a group
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
