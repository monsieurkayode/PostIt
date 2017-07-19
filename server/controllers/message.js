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
        sender: req.body.sender,
      })
      .then(message => res.status(201).json(message))
      .catch(error => res.status(400).json(error));
  },

  findGroupMessages(req, res) {
    return Message
      .findAll({ where: { groupId: req.params.groupId } })
      .then(messages => res.status(200).json(messages))
      .catch(error => res.status(400).json(error));
  },
  allMessages(req, res) {
    return Message
      .findAll()
      .then(messages => res.status(200).json(messages))
      .catch(error => res.status(400).json(error));
  },
};

export default createMessage;
