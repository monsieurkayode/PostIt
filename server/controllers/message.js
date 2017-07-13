/**
 * Import Module dependencies
 */
import db from '../models/index';

const Message = db.Message;

const createMessage = {
  create(req, res) {
    return Message
      .create({
        message: req.body.message,
        groupId: req.params.groupId,
        username: req.body.username,
      })
      .then(message => res.status(201).json(message))
      .catch(error => res.status(400).json(error));
  },

  findGroupMessages(req, res) {
    return Message
      .findAll({ where: { groupId: req.params.groupId } })
      .then(message => res.status(200).json(message))
      .catch(error => res.status(400).json(error));
  },
  allMessages(req, res) {
    return Message
      .findAll()
      .then(message => res.status(200).json(message))
      .catch(error => res.status(400).json(error));
  },
};

export default createMessage;
