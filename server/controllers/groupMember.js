/**
 * Import Module dependencies
 */
import db from '../models/index';

// Declare variable for Usergroup
const GroupMember = db.GroupMember;

const addToGroup = {
  addGroupUser(req, res) {
    return GroupMember
      .create({
        userId: req.body.userId,
        groupId: req.params.groupId,
      })
      .then(groupmember => res.status(201)
        .json({ message: `Succesfully added ${req.body.userId}`, groupmember }))
      .catch(error => res.status(400).json(error));
  },
};

export default addToGroup;
