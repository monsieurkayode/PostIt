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
const exp = /[ ]/gi;


const login = {
  signin(req, res) {
    if (!req.body.username || req.body.username.match(exp)) {
      return res.send({
        success: false,
        message: 'Username must not be empty'
      });
    }
    if (!req.body.password || req.body.password.match(exp)) {
      return res.send({
        success: false,
        message: 'Password must not be empty'
      });
    }
    return User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) {
          return res.send({
            success: false,
            message: 'Invalid Authentication Details'
          });
        }
        const check = bcrypt.compareSync(req.body.password, user.password);
        if (check) {
          const token = jwt.sign({ user }, secret);
          res.send({
            success: true,
            message: 'Success, Token successfully generated',
            Token: token,
          });
        } else if (user && !check) {
          res.send({
            success: false,
            message: 'Invalid Authentication Details'
          });
        }
      })
      .catch(error => res.status(404).send(error));
  }
};

export default login;
