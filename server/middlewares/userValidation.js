const db = require('../models/index');
const isAlphabet = require('../helpers/isAlphabet');
const isAlphaNumeric = require('../helpers/isAlphaNumeric');
const isEmail = require('../helpers/isEmail');
const cleanString = require('../helpers/cleanString');

const User = db.User;


const userValidation = {
  basicValidation(req, res, next) {
    req.body.firstName = cleanString(req.body.firstName);
    req.body.lastName = cleanString(req.body.lastName);
    req.body.username = cleanString(req.body.username);
    req.body.password = cleanString(req.body.password);
    req.body.email = cleanString(req.body.email);
    if (!req.body.firstName) {
      return res.status(400).send({
        success: false,
        message: 'Please enter your first name'
      });
    }
    if (!isAlphabet(req.body.firstName)) {
      return res.status(400).send({
        success: false,
        message: 'First name must contain alphabets only'
      });
    }
    if (!req.body.lastName) {
      return res.status(400).send({
        success: false,
        message: 'Please enter your last name'
      });
    }
    if (!isAlphabet(req.body.lastName)) {
      return res.status(400).send({
        success: false,
        message: 'Last name must contain alphabets only'
      });
    }
    if (!req.body.username) {
      return res.status(400).send({
        success: false,
        message: 'Please enter a username'
      });
    }
    if (!isAlphaNumeric(req.body.username)) {
      return res.status(400).send({
        success: false,
        message: 'Username must contain alphabets and numbers only'
      });
    }
    if (req.body.username.length < 3) {
      return res.status(400).send({
        success: false,
        message: 'Username should be at least three characters'
      });
    }
    if (!req.body.email || !isEmail(req.body.email)) {
      return res.status(400).send({
        success: false,
        message: 'Invalid Email, please enter a valid email'
      });
    }
    if (!req.body.password) {
      return res.status(400).send({
        success: false,
        message: 'Plese enter a password'
      });
    }
    if (req.body.password.length < 6) {
      return res.status(400).send({
        success: false,
        message: 'Password should be at least six characters long'
      });
    }
    User.findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) next();
        else {
          return res.status(409).send({
            success: false,
            message: 'Username already exists'
          });
        }
      })
      .catch(error => res.status(404).send(error));
  },
  emailValidation(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) next();
        else {
          return res.status(409).send({
            success: false,
            message: 'Email already exists'
          });
        }
      })
      .catch(error => res.status(404).send(error));
  }
};

export default userValidation;
