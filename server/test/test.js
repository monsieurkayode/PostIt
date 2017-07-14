import supertest from 'supertest';
import mocha from 'mocha';
import app from '../../app';
import models from '../models';
import { should, expect, assert } from 'chai';

const server = supertest.agent(app);

const jane = [{
  username: 'janeDoe',
  password: 'password',
  email: 'janeDoe@gmail.com'
}];

describe('User Registration', () => {
  it('allows a new user to register', () => {
    server
      .post('/api/user/signup')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(jane[0])
      .expect(201)
      .end((err, res) => {
        res.status.should.equal(201);
        res.body.success.should.equal(true);
        done();
      });
  });

describe('User Login', () => {
  it('allows a new user to register', () => {
    server
      .post('/api/user/signin')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(jane[0])
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.success.should.equal(true);
        done();
      });
  });

