/**
 * Import Module dependencies
 */
import db from '../models/index';

// Declare variable for Usergroup
const GroupMember = db.GroupMember;

const addToGroup = {
  addGroupMember(req, res) {
    return GroupMember
      .create({
        memberId: req.params.memberId,
        groupId: req.params.groupId,
      })
      .then((groupmember) => res.status(201)
        .send({ message: 'Succesfully added member' }))
      .catch(error => res.status(400).json(error));
  },
};

export default addToGroup;
