import 'chai';
import 'mocha';
import should from 'should';
import assert from 'assert';
import supertest from 'supertest';
import app from '../../app';
import clearDb from '../helpers/clearDb';
import users from '../seeders/userSeeder';

const testValidUsers = users.testValidUsers;
const validUsersLogin = users.validUsersLogin;
//const invalidUsers = users.invalidUsers;

const server = supertest.agent(app);
const expect = require('chai').expect;

clearDb();

describe('Test Server Connection', () => {
  it('should respond with Status connected ok', (done) => {
    server
      .get('/api')
      .set('Connection', 'keep alive')
      .end((err, res) => {
        expect(res.body.message).to.equal('Status connected ok');
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Response Object', () => {
  it('should respond with a json object', (done) => {
    server
      .get('/api')
      .set('Connection', 'keep alive')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('User Registration', () => {
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[3])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[4])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
  it('allows a new user to register', (done) => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(testValidUsers[5])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
});

describe('User Login', () => {
  it('allows a registered user to signin', (done) => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
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
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[1])
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
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[2])
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
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[3])
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
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[4])
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
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validUsersLogin[5])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
});
