/**
 * Import Module dependencies
 */
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './server/routes';
import db from './server/models';
import users from './server/seeders/userSeeder';
import groups from './server/seeders/groupSeeder';
import groupMembers from './server/seeders/groupMemberSeeder';
import messages from './server/seeders/messageSeeder';
// import sequelize from './server/models';

// db.User.sync({
//   force: true
// }).then((User) => {
//   User
//     .bulkCreate(users.dbUsers);
// }).then(() => {
//   db.Group.sync({
//     force: true
//   }).then((Group) => {
//     Group
//       .bulkCreate(groups);
//   }).then(() => {
//     db.GroupMember.sync({
//       force: true
//     }).then((GroupMember) => {
//       GroupMember
//         .bulkCreate(groupMembers);
//     }).then(() => {
//       db.Message.sync({
//         force: true
//       }).then((Message) => {
//         Message
//           .bulkCreate(messages);
//       });
//     });
//   });
// });

dotenv.load();
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.disable('x-powered-by');


app.use(route);
app.use(express.static('template'));


app.get('*', (req, res) => res.status(200).send({
  message: 'No page found',
}));

module.exports = app;
