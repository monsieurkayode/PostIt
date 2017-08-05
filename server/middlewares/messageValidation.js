const isEmpty = require('../helpers/isEmpty');

const messageValidation = {
  basicValidation(req, res, next) {
    if (!req.body.message || isEmpty(req.body.message)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter your message'
      })
        .catch(error => res.status(404).send(error));
    }
    next();
  },
};

export default messageValidation;
