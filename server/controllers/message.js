/**
 * Import Module dependencies
 */
import db from '../models/index';

const Message = db.Message;
const GroupMember = db.GroupMember;

const createMessage = {
  create(req, res) {
    return Message
      .create({
        message: req.body.message,
        messageId: req.params.messageId,
        sender: req.params.sender,
      })
      .then(message => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  },

  findGroupMessages(req, res) {
    return Message
      .findById(req.params.messageId, {
        include: [{
          all: true
        }]
      })
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
