const db = require('../models/index');
const isNumber = require('../helpers/isNumber');

const GroupMember = db.GroupMember;

const groupMemberValidation = {
  basicValidation(req, res, next) {
    if (!req.body.memberId || !isNumber(req.body.memberId)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter valid user id'
      });
    }
    GroupMember.find({ where: { memberId: req.body.memberId } })
      .then((member) => {
        if (!member) next();
        else {
          return res.status(409).send({
            success: false,
            message: 'User already added to group'
          });
        }
      })
      .catch(error => res.status(404).send(error));
  },
  isGroupMember(req, res, next) {
    GroupMember
      .findOne({ where: { memberId: req.decoded.user.id } })
      .then((member) => {
        if (member) next();
        else {
          return res.status(409).send({
            success: false,
            message: 'Access denied, this group is private'
          });
        }
      });
  }
};

export default groupMemberValidation;
