/**
 * Import Module dependencies
 */
import express from 'express';
import messageController from '../controllers/message';
import authentication from '../middlewares/authentication';
import userValidation from '../middlewares/userValidation';
import groupValidation from '../middlewares/groupValidation';
import groupMemberValidation from '../middlewares/groupMemberValidation';

const router = express.Router();

router.post('/api/group/:groupId/message', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.create);
router.get('/api/group/:groupId/messages', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.findGroupMessages);
router.get('/api/group/:groupId/messages/user', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.findGroupMemberMessages);
router.delete('/api/group/:groupId/messages/user', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.delete);
router.put('/api/group/:groupId/messages/user', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, messageController.update);
router.get('/api/group/messages', authentication, userValidation.validUser, messageController.allMessages);

export default router;
