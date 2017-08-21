/**
 * Import Module dependencies
 */
import express from 'express';
import groupMemberController from '../controllers/groupMember';
import authentication from '../middlewares/authentication';
import userValidation from '../middlewares/userValidation';
import groupValidation from '../middlewares/groupValidation';
import groupMemberValidation from '../middlewares/groupMemberValidation';

const router = express.Router();

router.post('/api/group/:groupId/user', authentication, groupMemberValidation.basicValidation, userValidation.validUser, userValidation.userExists, groupValidation.groupExists, groupMemberValidation.validGroupMember, groupMemberValidation.isGroupMember, groupMemberController.addGroupMember);
router.get('/api/group/:groupId/members', authentication, userValidation.validUser, groupValidation.groupExists, groupMemberValidation.validGroupMember, groupMemberController.groupMembers);

export default router;
