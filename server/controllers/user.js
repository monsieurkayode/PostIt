/**
 * Import Module dependencies
 */
import db from '../models/index';
/**
 * @param  {object} req
 * @param  {object} res
 * @description create a user with username, email and password.
 */
const User = db.User;

const createUser = {
  signup(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).json({
        error: 'Username, Email, and Password must not be empty'
      });
    }
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then((user) => {
        req.session.user = user;
        res.status(201).json(user);
      })
      .catch(error => res.status(400).json(error));
  },
  allUsers(req, res) {
    if (!req.session) {
      return res.status(400).json({
        error: 'User Not Authenticated'
      });
    }
    return User
      .findAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  },
};

export default createUser;
