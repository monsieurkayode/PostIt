/**
 * Import Module dependencies
 */
import express from 'express';
import userController from '../controllers/user';
import loginController from '../controllers/login';
import authentication from '../middlewares/authentication';
import userValidation from '../middlewares/userValidation';

const router = express.Router();

router.post('/api/user/signup', userValidation.basicValidation, userValidation.validateUsername, userValidation.emailValidation, userController.signup);
router.post('/api/user/signin', loginController.signin);
router.get('/api/users', authentication, userValidation.validUser, userController.allUsers);
router.delete('/api/user', authentication, userValidation.validUser, userController.deactivateAccount);
router.put('/api/user', authentication, userValidation.validUser, userController.update);
router.put('/api/user/resetpassword', authentication, userValidation.validUser, userController.resetPassword);

export default router;
