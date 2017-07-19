/**
 * Import Module dependencies
 */
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './server/routes';
//import sequelize from './server/models';

// sequelize.sync({
//   force: true
// });

dotenv.load();
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.disable('x-powered-by');


app.use(route);
app.use(express.static('template'));


app.get('*', (req, res) => res.status(200).send({
  message: 'No page found',
}));

module.exports = app;
