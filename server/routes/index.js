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

app.get('/api', (req, res) => {
  res.status(200).send({
    message: 'Status connected ok',
  });
});

app.post('/api/user/signup', userValidation.basicValidation, userValidation.validateUsername, userValidation.emailValidation, userController.signup);
app.post('/api/user/signin', loginController.signin);
app.get('/api/users', authentication, userValidation.validUser, userController.allUsers);
app.delete('/api/user', authentication, userValidation.validUser, userController.deactivateAccount);
app.put('/api/user', authentication, userValidation.validUser, userController.update);

app.post('/api/group', authentication, userValidation.validUser, groupValidation.basicValidation, groupValidation.validateName, groupController.create);
app.get('/api/groups', authentication, userValidation.validUser, groupController.allGroups);
app.put('/api/group/:groupId/user', authentication, userValidation.validUser, groupValidation.groupExists, groupValidation.isGroupAdmin, groupController.changeAdmin);
app.delete('/api/group/:groupId', authentication, userValidation.validUser, groupValidation.groupExists, groupValidation.isGroupAdmin, groupController.delete);
app.put('/api/group/:groupId', authentication, userValidation.validUser, groupValidation.groupExists, groupValidation.isGroupAdmin, groupController.update);


app.post('/api/group/:groupId/user', authentication, groupMemberValidation.basicValidation, userValidation.validUser, userValidation.userExists, groupValidation.groupExists, groupMemberValidation.isGroupMember, groupMemberController.addGroupMember);
app.get('/api/group/:groupId/members', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, groupMemberController.groupMembers);

app.post('/api/group/:groupId/message', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.create);
app.get('/api/group/:groupId/messages', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.findGroupMessages);
app.get('/api/group/:groupId/messages/user', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.findGroupMemberMessages);
app.delete('/api/group/:groupId/messages/user', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.delete);
app.put('/api/group/:groupId/messages/user', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.update);
app.get('/api/group/messages', authentication, userValidation.validUser, messageController.allMessages);

export default app;
