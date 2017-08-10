import db from '../models/index';
import isNumber from '../helpers/isNumber';

const GroupMember = db.GroupMember;

const groupMemberValidation = {
  basicValidation(req, res, next) {
    if (req.body.memberId && !isNumber(req.body.memberId)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter valid user id'
      });
    }
    next();
  },
  isGroupMember(req, res, next) {
    GroupMember
      .findOne({ where: { memberId: req.body.id, groupId: req.params.groupId } })
      .then((member) => {
        if (!member) {
          next();
        } else {
          return res.status(409).send({
            success: false,
            message: 'User already a group member'
          });
        }
      });
  },
  validGroupMember(req, res, next) {
    GroupMember
      .findOne({ where: { memberId: req.decoded.user.id, groupId: req.params.groupId } })
      .then((member) => {
        if (member) {
          next();
        } else {
          return res.status(401).send({
            success: false,
            message: 'Access denied, you are not a group member'
          });
        }
      });
  },
};

export default groupMemberValidation;
