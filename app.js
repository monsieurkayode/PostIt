/**
 * Import Module dependencies
 */
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './server/routes/index';

const userRoute = router.user;
const groupRoute = router.group;
const messageRoute = router.message;
const groupMemberRoute = router.groupMember;


dotenv.load();
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');


app.use(userRoute);
app.use(groupRoute);
app.use(messageRoute);
app.use(groupMemberRoute);
app.use(express.static('template'));

app.get('/api', (req, res) => {
  res.status(200).send({
    message: 'Status connected ok',
  });
});

app.get('*', (req, res) => res.status(404).send({
  message: 'No page found',
}));

export default app;
