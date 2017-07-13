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


module.exports = {
  signin(req, res) {
    if (!req.body.username) {
      return res.status(400).json({
        error: 'Username must not be empty'
      });
    }
    if (!req.body.password) {
      return res.status(400).json({
        error: 'Password must not be empty'
      });
    }
    return User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'Invalid Auth Details' });
        }
        const check = bcrypt.compareSync(req.body.password, user.password);
        if (check) {
          const token = jwt.sign({ user }, secret);
          res.status(200).json({
            success: true,
            message: 'Token generated successfully',
            Token: token,
          })
            .catch(error => res.status(404).send(error));
        }
      });
  }
};
