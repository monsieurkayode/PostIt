/**
 * Import Module dependencies
 */
import express from 'express';
import userController from '../controllers/user';
import loginController from '../controllers/login';
import groupController from '../controllers/group';
import messageController from '../controllers/message';
import userGroupController from '../controllers/usergroup';

const app = express.Router();
app.get('/api', (req, res) => res.status(200).send({
  message: 'Status connected ok',
}));

app.post('/api/user/signup', userController.signup);
app.post('/api/user/signin', loginController.signin);
app.get('/api/users', userController.allUsers);
app.get('/api/userGroups', userController.userGroups);
app.post('/api/group', groupController.create);
app.get('/api/groups', groupController.allGroups);
app.post('/api/group/:groupId/message', messageController.create);
app.get('/api/group/:groupId/message', messageController.findGroupMessages);
app.get('/api/group/messages', messageController.allMessages);
app.post('/api/group/:groupId/user', groupController.addUser);
app.get('/api/group/:groupId/user', groupController.findGroupMembers);
app.post('/api/group/:groupId/user', userGroupController.addGroupUser);

export default app;
