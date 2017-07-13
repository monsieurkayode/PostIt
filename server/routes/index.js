const session = require('express-session');
const userController = require('../controllers').user;
const loginController = require('../controllers').login;
const groupController = require('../controllers').group;
const messageController = require('../controllers').message;
//const userGroupController = require('../controllers').usergroup;

const secret = 'zxerth5603/@';
const resave = false;
const saveUninitialized = true;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Create Account',
  }));

  app.post('/api/user/signup', userController.signup);
  app.post('/api/user/signin', loginController.signin);

  app.use(session({ secret, resave, saveUninitialized }));

  
  app.get('/api/users', userController.allUsers);
  
  app.post('/api/group', groupController.create);
  app.get('/api/groups', groupController.allGroups);
  app.post('/api/group/:groupId/message', messageController.create);
  app.get('/api/group/:groupId/message', messageController.findMessages);
  app.get('/api/group/messages', messageController.allMessages);
  app.post('/api/group/:groupId/user', groupController.addUser);
  app.get('/api/group/:groupId/user', groupController.addUser);


  // app.use('/api/group/*', () => {
  //   if 
  // })
};
