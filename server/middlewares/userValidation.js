import db from '../models/index';
import isAlphabet from '../helpers/isAlphabet';
import isAlphaNumeric from '../helpers/isAlphaNumeric';
import isEmail from '../helpers/isEmail';
import cleanString from '../helpers/cleanString';

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
        message: 'Please enter a password'
      });
    }
    if (req.body.password.length < 6) {
      return res.status(400).send({
        success: false,
        message: 'Password should be at least six characters long'
      });
    }
    next();
  },
  validateUsername(req, res, next) {
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
          res.status(409).send({
            success: false,
            message: 'Email already exists'
          });
        }
      })
      .catch(error => res.status(400).send(error));
  },
  userExists(req, res, next) {
    User
      .findById(req.body.memberId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'User not found'
          });
        }
        next();
      });
  },
  validUser(req, res, next) {
    User
      .findById(req.decoded.user.id)
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            success: false,
            message: 'Access denied, you need to register'
          });
        }
        next();
      });
  }
};

export default userValidation;
