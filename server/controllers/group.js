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
        const memberId = req.decoded.user.id;
        GroupMember.create({ memberId, groupId })
          .then(() => {
            res.status(201).send({
              success: true,
              message: 'Successfully created new group'
            });
          });
      })
      .catch(error => res.status(400).json(error));
  },

  // Function to return all groups in database
  allGroups(req, res) {
    return Group
      .all({
        order: [['groupName']],
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
      .then(group => res.status(200).send(group))
      .catch(error => res.status(400).send(error));
  },

  // Function to transfer ownership of group
  changeAdmin(req, res) {
    return Group
      .findById(req.params.groupId)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            success: false,
            message: 'Group not found'
          });
        }
        User.findById(req.body.newAdmin)
          .then((user) => {
            if (!user) {
              return res.status(404).send({
                success: false,
                message: 'User not found'
              });
            }
            GroupMember.findOne({ where:
              { memberId: req.body.newAdmin, groupId: req.params.groupId }
            })
              .then((member) => {
                if (!member) {
                  return res.status(404).send({
                    success: false,
                    message: 'User not a group member'
                  });
                }
                return group
                  .setAdmin(req.body.newAdmin)
                  .then(() => {
                    res.status(201).send({
                      success: true,
                      message: 'Successfully updated admin'
                    });
                  });
              })
              .catch(error => res.status(400).json(error));
          });
      });
  },
  delete(req, res) {
    return Group
      .findOne({ where:
        { groupAdmin: req.decoded.user.id, id: req.params.groupId }
      })
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            success: false,
            message: 'Group not found'
          });
        }
        return group
          .destroy()
          .then(() => {
            res.status(200).send({
              success: true,
              message: 'Group successfully deleted'
            });
          });
      })
      .catch(error => res.send(error));
  },
  update(req, res) {
    return Group
      .findOne({ where:
        { id: req.params.groupId, groupAdmin: req.decoded.user.id }
      })
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            success: false,
            message: 'Group not found'
          });
        }
        return group
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => {
            res.status(201).send({
              success: true,
              message: 'Group details updated'
            });
          });
      })
      .catch(error => res.status(400).send(error));
  },
};

export default createGroup;
