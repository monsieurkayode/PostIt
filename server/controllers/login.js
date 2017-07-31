/**
 * Import Module dependencies
 */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import db from '../models/index';

dotenv.load();
const User = db.User;
const secret = process.env.secretKey;


const login = {
  signin(req, res) {
    if (!req.body.username) {
      return res.send({
        error: 'Username must not be empty'
      });
    }
    if (!req.body.password) {
      return res.send({
        error: 'Password must not be empty'
      });
    }
    return User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) {
          return res.send({ message: 'Invalid Authentication Details' });
        }
        const check = bcrypt.compareSync(req.body.password, user.password);
        if (check) {
          const token = jwt.sign({ user }, secret);
          res.send({
            message: 'Success, Token successfully generated',
            Token: token
          });
        }
      })
      .catch(error => res.status(404).send(error));
  }
};

export default login;
