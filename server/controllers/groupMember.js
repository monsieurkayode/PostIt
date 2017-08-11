/**
 * Import Module dependencies
 */
import db from '../models/index';

// Declare variable for Usergroup
const GroupMember = db.GroupMember;
const Group = db.Group;
const User = db.User;

const addToGroup = {
  addGroupMember(req, res) {
    return GroupMember
      .create({
        memberId: req.body.memberId || req.decoded.user.id,
        groupId: req.params.groupId,
      })
      .then(() => res.status(201)
        .send({
          success: true,
          message: 'Succesfully added member'
        }))
      .catch(error => res.status(400).json(error));
  },
  groupMembers(req, res) {
    return GroupMember
      .findAll({ where: { groupId: req.params.groupId },
        order: [['memberId']],
        attributes: ['memberId'],
        include: [
          { model: User, as: 'admin', attributes: ['username'] },
          { model: Group, as: 'group', attributes: ['groupName'] }] })
      .then(groupmembers => res.status(200).send(groupmembers))
      .catch(error => res.status(404).send(error));
  }
};

export default addToGroup;
