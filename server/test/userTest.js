import 'chai';
import 'mocha';
// import should from 'should';
// import assert from 'assert';
import supertest from 'supertest';
import app from '../../app';
import dbSync from '../helpers/clearDb';
import users from '../seeders/userSeeder';
import silentMorgan from '../helpers/silentMorgan';

const testValidUsers = users.testValidUsers,
  validUsersLogin = users.validUsersLogin,
  invalidUsers = users.invalidUsers,
  emptyFirstName = users.emptyFirstName,
  emptyLastName = users.emptyLastName,
  emptyUsername = users.emptyUsername,
  emptyPassword = users.emptyPassword,
  emptyEmail = users.emptyEmail,
  incorrectPassword = users.incorrectPassword,
  nullForm = users.nullForm;

const clearDb = dbSync.clearDb,
  disableLogger = silentMorgan.disableLogger,
  server = supertest.agent(app),
  expect = require('chai').expect;

disableLogger();
clearDb();

describe('Test Server Connection', () => {
  it('should respond with Status connected ok', (done) => {
    server
      .get('/api')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect('Content-Type', /json/);
        expect(res.body.message).to.equal('Status connected ok');
        expect(res.statusCode).to.equal(200);
        if (err) return done(err);
        done();
      });
  });
});

describe('Response Object', () => {
  it('should respond with a json object', (done) => {
    server
      .get('/api')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect('Content-Type', /json/);
        expect(res.statusCode).to.equal(200);
        if (err) return done(err);
        done();
      });
  });
});

describe('User Registration', () => {
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Account successfully created');
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Account successfully created');
        if (err) return done(err);
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Account successfully created');
        if (err) return done(err);
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[3])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Account successfully created');
        if (err) return done(err);
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[4])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Account successfully created');
        if (err) return done(err);
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[5])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Account successfully created');
        if (err) return done(err);
        done();
      });
  });
});

describe('User Login', () => {
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[3])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[4])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[5])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        if (err) return done(err);
        done();
      });
  });
});

describe('Disallow empty signup form fields', () => {
  it('Check for empty first name', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(emptyFirstName[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Please enter your first name');
        if (err) return done(err);
        done();
      });
  });
  it('Check for empty last name', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(emptyLastName[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Please enter your last name');
        if (err) return done(err);
        done();
      });
  });
  it('Check for empty username', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(emptyUsername[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Please enter a username');
        if (err) return done(err);
        done();
      });
  });
  it('Check for empty password', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(emptyPassword[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Please enter a password');
        if (err) return done(err);
        done();
      });
  });
  it('Check for empty email', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(emptyEmail[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal(
          'Invalid Email, please enter a valid email'
        );
        if (err) return done(err);
        done();
      });
  });
});

describe('Disallow login for unregistered user', () => {
  it('should return Invalid Authentication details', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidUsers[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal(
          'Invalid Authentication Details'
        );
        if (err) return done(err);
        done();
      });
  });
  it('should return Invalid Authentication details', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidUsers[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal(
          'Invalid Authentication Details'
        );
        if (err) return done(err);
        done();
      });
  });
});

describe('Registered User Authentication', () => {
  it('should return Invalid Authentication details', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(incorrectPassword[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal(
          'Invalid Authentication Details'
        );
        if (err) return done(err);
        done();
      });
  });
  it('should return error', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(nullForm[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        if (err) return done(err);
        done();
      });
  });
});
