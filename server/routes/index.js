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
import groupValidation from '../middlewares/groupValidation';
import groupMemberValidation from '../middlewares/groupMemberValidation';

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
app.delete('/api/user', authentication, userController.deactivateAccount);
app.post('/api/group', authentication, groupValidation.basicValidation, groupController.create);
app.get('/api/groups', authentication, groupController.allGroups);
app.post('/api/group/:groupId/message', authentication, groupValidation.groupExists, groupMemberValidation.isGroupMember, messageController.create);
app.get('/api/group/:groupId/messages', authentication, groupValidation.groupExists, groupMemberValidation.isGroupMember, messageController.findGroupMessages);
app.get('/api/group/messages', authentication, messageController.allMessages);
app.put('/api/group/:groupId/user', authentication, groupValidation.isGroupAdmin, groupController.changeAdmin);
// app.get('/api/group/:groupId/user', groupController.findGroupMembers);
app.post('/api/group/:groupId/user', authentication, groupValidation.groupExists, groupMemberValidation.isGroupMember, groupMemberValidation.basicValidation, groupMemberController.addGroupMember);
app.get('/api/group/:groupId/members', authentication, groupValidation.groupExists, groupMemberValidation.isGroupMember, groupMemberController.groupMembers);

export default app;
