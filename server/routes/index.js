const userController = require('../controllers').user;
const loginController = require('../controllers').login;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Create Account',
  }));

  // app.post('/api/user/signin', loginController.findUser);
  app.post('/api/user/signup', userController.create);
  app.get('/api/users', userController.allUsers);
  app.post('/api/user/signin', loginController.findUser);
};
