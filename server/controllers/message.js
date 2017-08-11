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
      .findAll({ where: { messageId: req.params.groupId },
        attributes: ['message'],
        order: [['id', 'ASC']],
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
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).json(error));
  },
  findGroupMemberMessages(req, res) {
    return Message
      .findAll({ where: { messageId: req.params.groupId, sender: req.decoded.user.id },
        attributes: ['message'],
        order: [['id', 'ASC']],
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
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
  },
  allMessages(req, res) {
    return Message
      .findAll({
        order: [['messageId', 'ASC']],
        attributes: ['id', 'sender', 'messageId', 'message']
      })
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Message
      .findAll({ where: { messageId: req.params.groupId, sender: req.decoded.user.id }, order: [['id', 'ASC']] })
      .then((messages) => {
        if (!messages.length) {
          return res.status(404).send({
            success: false,
            message: 'Message not found or already deleted'
          });
        }
        return messages[messages.length - 1]
          .destroy()
          .then(() => {
            res.status(200).send({
              success: true,
              message: 'Message successfully deleted'
            });
          });
      })
      .catch(error => res.send(error));
  },
  update(req, res) {
    return Message
      .findAll({
        where: { messageId: req.params.groupId, sender: req.decoded.user.id },
        order: [['id', 'ASC']]
      })
      .then((messages) => {
        if (!messages.length) {
          return res.status(404).send({
            success: false,
            message: 'Message not found or already deleted'
          });
        }
        return messages[messages.length - 1]
          .update(req.body.message)
          .then(() => {
            res.status(201).send({
              success: true,
              message: 'Message successfully edited'
            });
          });
      })
      .catch(error => res.send(error));
  }
};

export default createMessage;
