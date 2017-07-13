const Message = require('../models').Message;

module.exports = {
  create(req, res) {
    return Message
      .create({
        message: req.body.message,
        groupId: req.params.groupId,
        author: req.body.author,
      })
      .then(message => res.status(201).json(message))
      .catch(error => res.status(400).json(error));
  },

  findMessages(req, res) {
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
