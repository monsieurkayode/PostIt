/**
 * Import Module dependencies
 */
import express from 'express';
import groupController from '../controllers/group';
import authentication from '../middlewares/authentication';
import userValidation from '../middlewares/userValidation';
import groupValidation from '../middlewares/groupValidation';

const router = express.Router();

router.post('/api/group', authentication, userValidation.validUser, groupValidation.basicValidation, groupValidation.validateName, groupController.create);
router.get('/api/groups', authentication, userValidation.validUser, groupController.allGroups);
router.put('/api/group/:groupId/admin', authentication, userValidation.validUser, groupValidation.groupExists, groupValidation.isGroupAdmin, groupController.changeAdmin);
router.delete('/api/group/:groupId/delete', authentication, userValidation.validUser, groupValidation.groupExists, groupValidation.isGroupAdmin, groupController.delete);
router.put('/api/group/:groupId/update', authentication, userValidation.validUser, groupValidation.groupExists, groupValidation.isGroupAdmin, groupController.update);

export default router;
