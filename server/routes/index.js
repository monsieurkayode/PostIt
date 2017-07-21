/**
 * Import Module dependencies
 */
import express from 'express';
import userController from '../controllers/user';
import loginController from '../controllers/login';
// import groupController from '../controllers/group';
// import messageController from '../controllers/message';
// import groupMemberController from '../controllers/groupMember';

const app = express.Router();
app.get('/api', (req, res, next) => {
  res.send({
    message: 'Status connected ok',
  });
  next();
});

app.post('/api/user/signup', userController.signup);
app.post('/api/user/signin', loginController.signin);
app.get('/api/users', userController.allUsers);
// app.get('/api/userGroups', userController.userGroups);
// app.post('/api/group', groupController.create);
// app.get('/api/groups', groupController.allGroups);
// app.post('/api/group/:groupId/message', messageController.create);
// app.get('/api/group/:groupId/message', messageController.findGroupMessages);
// app.get('/api/group/messages', messageController.allMessages);
// app.post('/api/group/:groupId/user', groupController.addUser);
// app.get('/api/group/:groupId/user', groupController.findGroupMembers);
// app.post('/api/group/:groupId/user', groupMemberController.addGroupUser);

export default app;
