import isEmpty from '../helpers/isEmpty';

const messageValidation = {
  basicValidation(req, res, next) {
    if (!req.body.message || isEmpty(req.body.message)) {
      return res.status(406).send({
        success: false,
        message: 'Please enter your message'
      })
        .catch(error => res.status(400).send(error));
    }
    next();
  },
};

export default messageValidation;
