const db = require('../models/index');
const isAlphabet = require('../helpers/isAlphabet');
const isAlphaNumeric = require('../helpers/isAlphaNumeric');
const isEmail = require('../helpers/isEmail');
const isEmpty = require('../helpers/isEmpty');
// const isNumber = require('../helpers/isNumber');
// const isSymbol = require('../helpers/isSymbol');

const User = db.User;

// const empty = /[ ]/gi;
// const alpha = /^[A-Za-z]*$/gi;
// const digit = /^[0-9]*$/gi;
// const alNum = /^[A-Za-z0-9]*$/gi;

const userValidation = {
  basicValidation(req, res, next) {
    if (!req.body.firstName || !isAlphabet(req.body.firstName)) {
      return res.status(400).send({
        success: false,
        message: 'First name must contain alphabets only'
      });
    }
    if (!req.body.lastName || !isAlphabet(req.body.lastName)) {
      return res.status(400).send({
        success: false,
        message: 'Last name must contain alphabets only'
      });
    }
    if (!req.body.username || !isAlphaNumeric(req.body.username)) {
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
    if (!req.body.password || isEmpty(req.body.password)) {
      return res.status(400).send({
        success: false,
        message: 'Password cannot contain empty spaces'
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
