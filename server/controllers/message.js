/**
 * Import Module dependencies
 */
import db from '../models/index';

const Message = db.Message;
const Group = db.Group;
const User = db.User;

const createMessage = {
  create(req, res) {
    return Message
      .create({
        message: req.body.message,
        messageId: req.params.groupId,
        sender: req.decoded.user.id,
      })
      .then(message => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  },

  findGroupMessages(req, res) {
    return Message
      .find({ where: { messageId: req.params.groupId },
        attributes: ['message'],
        include: [
          {
            model: Group,
            as: 'group',
            attributes: ['id', 'groupName']
          },
          {
            model: User,
            as: 'author',
            attributes: ['id', 'username']
          }
        ]
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
