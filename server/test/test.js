import { should, expect, assert } from 'chai';
import supertest from 'supertest';
import 'mocha';
import app from '../../app';
import models from '../models';


const server = supertest.agent(app);

const jane = {
  username: 'janeDoe',
  password: 'password',
  email: 'janeDoe@gmail.com'
};

before((done) => {
  models.sequelize.sync({ force: true }).then(() => {
    done(null);
  }).catch((errors) => {
    done(errors);
  });
});

describe('User Registration', () => {
  it('allows a new user to register', () => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(jane)
      .expect(201)
      .end((err, res) => {
        res.status.should.equal(201);
        res.body.success.should.equal(true);
      });
  });
});

describe('User Login', () => {
  it('allows a new user to register', () => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(jane)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.success.should.equal(true);
      });
  });
});
