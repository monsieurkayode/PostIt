const db = require('../models/index');
const isEmpty = require('../helpers/isEmpty');

const Group = db.Group;

const groupValidation = {
  basicValidation(req, res, next) {
    if (!req.body.groupName || isEmpty(req.body.groupName)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter a group name'
      });
    }
    Group.find({ where: { groupName: req.body.groupName } })
      .then((group) => {
        if (!group) next();
        else {
          return res.status(409).send({
            success: false,
            message: 'Group name already exists, try another'
          });
        }
      })
      .catch(error => res.status(404).send(error));
  },
  groupExists(req, res, next) {
    Group.find({ where: { id: req.params.groupId } })
      .then((group) => {
        if (!group) {
          return res.status(409).send({
            success: false,
            message: 'Group not found'
          });
        }
        next();
      })
      .catch(error => res.status(404).send(error));
  },
  isGroupAdmin(req, res, next) {
    Group.find({ where: { groupAdmin: req.decoded.user.id } })
      .then((groupadmin) => {
        if (!groupadmin) {
          return res.status(401).send({
            success: false,
            message: 'Authorization denied'
          });
        }
        next();
      })
      .catch(error => res.status(404).send(error));
  }
};

export default groupValidation;
