import db from '../models/index';
import isEmpty from '../helpers/isEmpty';

const Group = db.Group;

const groupValidation = {
  basicValidation(req, res, next) {
    if (!req.body.groupName || isEmpty(req.body.groupName)) {
      return res.status(406).send({
        success: false,
        message: 'Please enter a group name'
      });
    }
    next();
  },
  validateName(req, res, next) {
    Group.find({ where: { groupName: req.body.groupName } })
      .then((group) => {
        if (!group) {
          next();
        } else {
          return res.status(409).send({
            success: false,
            message: 'Group name already exists, try another'
          });
        }
      })
      .catch(error => res.status(400).send(error));
  },
  groupExists(req, res, next) {
    Group.find({ where: { id: req.params.groupId } })
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            success: false,
            message: 'Group not found'
          });
        }
        next();
      })
      .catch(error => res.status(400).send(error));
  },
  isGroupAdmin(req, res, next) {
    Group.findOne({ where:
      { groupAdmin: req.decoded.user.id, id: req.params.groupId }
    })
      .then((groupadmin) => {
        if (!groupadmin) {
          return res.status(403).send({
            success: false,
            message: 'Administrative privileges, not authorized!'
          });
        }
        next();
      })
      .catch(error => res.status(400).send(error));
  }
};

export default groupValidation;
