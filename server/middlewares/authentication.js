/**
 * Import Module dependencies
 */
import express from 'express';
import session from 'express-session';

const app = express.Router();

app.use(session({
  secret: 'zxerth5603/@',
  resave: false,
  saveUninitialized: false,
}));

const authentication = ((req, res, next) => {
  const err = req.session.error;
  const msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  if (err) res.status(401).send('Access Denied');
  if (msg) res.status(200).send('Authentication Success');
  next();
});

export default authentication;
