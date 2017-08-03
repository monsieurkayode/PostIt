/**
 * Import Module dependencies
 */
import db from '../models/index';

// Declare a variable for group table in database
const Group = db.Group;
const User = db.User;
const GroupMember = db.GroupMember;

// Functions below here for group model
const createGroup = {
  create(req, res) {
    return Group
      .create({
        groupName: req.body.groupName,
        description: req.body.description,
        groupAdmin: req.decoded.user.id,
      })
      .then((group) => {
        const groupId = group.id;
        User.findById(req.decoded.user.id)
          .then(() => {
            const memberId = req.decoded.user.id;
            return GroupMember.create({ memberId, groupId })
              .catch(error => res.status(400).send(error));
          });
        res.status(200).send({
          success: true,
          message: 'Succesfully created group'
        });
      })
      .catch(error => res.status(400).json(error));
  },

  // Function to return all groups in database
  allGroups(req, res) {
    return Group
      .all({
        attributes: ['id', 'groupName', 'description', 'createdAt'],
        include: [
          {
            model: User,
            as: 'admin',
            attributes: ['id', 'username']
          },
          {
            model: GroupMember,
            as: 'groupMembers',
            attributes: ['memberId']
          }]
      })
      .then(group => res.status(200).json(group))
      .catch(error => res.status(400).json(error));
  },

  // Function to add a registered user to group
  addAdmin(req, res) {
    return Group
      .findById(req.params.groupId)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            success: false,
            message: 'Group not found'
          });
        }
        User.findById(req.body.groupAdmin)
          .then((user) => {
            if (!user) {
              return res.status(404).send({
                success: false,
                message: 'User not found'
              });
            }
            GroupMember.findById(req.body.groupAdmin)
              .then((member) => {
                if (!member) {
                  return res.status(404).send({
                    success: false,
                    message: 'User not a group member'
                  });
                }
              });
            return group
              .setAdmin(req.body.groupAdmin)
              // .update(req.body, { fields: Object.keys(req.body) })
              .then(() => {
                res.status(201).json({
                  success: true,
                  message: 'Succesfully updated admin'
                });
              })
              .catch(error => res.status(400).json(error));
          });
      });
  },

  // Function to remove user from group
  // removeUser(req, res) {
  //   return Group
  //     .findById(req.params.groupId)
  //     .then((group) => {
  //       group.removeUser(req.body.userId)
  //         .then(() => {
  //           res.status(200)
  //             .json({ message: `Succesfully removed ${group.userId}` });
  //         })
  //         .catch(error => res.status(400).json(error));
  //     });
  // },

  // Function to find memebrs of a group
  // findGroupMembers(req, res) {
  //   return Group
  //     .findById(req.params.groupId)
  //     .then((group) => {
  //       group.getUser(req.body.userId)
  //         .then(() => {
  //           res.status(200).json(group);
  //         })
  //         .catch(error => res.status(400).json(error));
  //     });
  // },
};

export default createGroup;
