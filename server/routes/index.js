/**
 * Import Module dependencies
 */
import express from 'express';
import userController from '../controllers/user';
import loginController from '../controllers/login';
import groupController from '../controllers/group';
import messageController from '../controllers/message';
import groupMemberController from '../controllers/groupMember';
import authentication from '../middlewares/authentication';
import userValidation from '../middlewares/userValidation';

const app = express.Router();
app.get('/api', (req, res, next) => {
  res.send({
    message: 'Status connected ok',
  });
  next();
});

app.post('/api/user/signup', userValidation.basicValidation, userValidation.emailValidation, userController.signup);
app.post('/api/user/signin', loginController.signin);
app.get('/api/users', authentication, userController.allUsers);
// app.get('/api/userGroups', userController.userGroups);
app.post('/api/group', authentication, groupController.create);
app.get('/api/groups', authentication, groupController.allGroups);
app.post('/api/group/:groupId/message', authentication, messageController.create);
app.get('/api/group/:groupId/messages', authentication, messageController.findGroupMessages);
app.get('/api/group/messages', authentication, messageController.allMessages);
app.put('/api/group/:groupId/user', groupController.addAdmin);
// app.get('/api/group/:groupId/user', groupController.findGroupMembers);
app.post('/api/group/:groupId/user', authentication, groupMemberController.addGroupMember);
app.get('/api/group/:groupId/members', authentication, groupMemberController.groupMembers);

export default app;
