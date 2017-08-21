import 'chai';
import 'mocha';
import supertest from 'supertest';
import app from '../../app';
import group from '../seeders/groupSeeder';
import users from '../seeders/userSeeder';
import groupMembers from '../seeders/groupMemberSeeder';


const server = supertest.agent(app),
  expect = require('chai').expect,
  validUsersLogin = users.validUsersLogin,
  createGroup = group.groups,
  editGroup = group.editGroup,
  newAdmin = group.newAdmin;

const userData = [];

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
        userData[0] = res.body.Token;
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
        userData[1] = res.body.Token;
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
      .send(validUsersLogin[2])
      .end((err, res) => {
        userData[2] = res.body.Token;
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
      .send(validUsersLogin[3])
      .end((err, res) => {
        userData[3] = res.body.Token;
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
      .send(validUsersLogin[4])
      .end((err, res) => {
        userData[4] = res.body.Token;
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
      .send(validUsersLogin[5])
      .end((err, res) => {
        userData[5] = res.body.Token;
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Token successfully generated');
        done();
      });
  });
});
describe('Group Creation', () => {
  it('allows a registered and logged in user create a group', (done) => {
    server
      .post('/api/group')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[0])
      .set('Content-Type', 'application/json')
      .type('form')
      .send(createGroup[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully created new group');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered and logged in user create a group', (done) => {
    server
      .post('/api/group')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .type('form')
      .send(createGroup[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully created new group');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered and logged in user create a group', (done) => {
    server
      .post('/api/group')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[2])
      .set('Content-Type', 'application/json')
      .type('form')
      .send(createGroup[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully created new group');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered and logged in user create a group', (done) => {
    server
      .post('/api/group')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[3])
      .set('Content-Type', 'application/json')
      .type('form')
      .send(createGroup[3])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully created new group');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered and logged in user create a group', (done) => {
    server
      .post('/api/group')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[4])
      .set('Content-Type', 'application/json')
      .type('form')
      .send(createGroup[4])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully created new group');
        if (err) return done(err);
        done();
      });
  });
  it('allows a registered and logged in user create a group', (done) => {
    server
      .post('/api/group')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[5])
      .set('Content-Type', 'application/json')
      .type('form')
      .send(createGroup[5])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully created new group');
        if (err) return done(err);
        done();
      });
  });
});

describe('View created Groups', () => {
  it('allows a registered and logged in user view created Groups', (done) => {
    server
      .get('/api/groups')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[0])
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        if (err) return done(err);
        done();
      });
  });
  it('does not allow unregistered or logged out user view created Groups', (done) => {
    server
      .get('/api/groups')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('No token provided');
        if (err) return done(err);
        done();
      });
  });
});

describe('Admin should be able to edit group', () => {
  it('allows a logged in admin to edit group information', (done) => {
    server
      .put('/api/group/1/update')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[0])
      .set('Content-Type', 'application/json')
      .send(editGroup[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Group details updated');
        if (err) return done(err);
        done();
      });
  });
});

describe('Admin should be able to delete group', () => {
  it('allows a logged in admin to delete group', (done) => {
    server
      .delete('/api/group/1/delete')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[0])
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Group successfully deleted');
        if (err) return done(err);
        done();
      });
  });
});


describe('Add Group Members', () => {
  it('allows a logged in group member add a registered user', (done) => {
    server
      .post('/api/group/2/user')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(groupMembers[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Succesfully added member');
        if (err) return done(err);
        done();
      });
  });
  it('allows a logged in group member add a registered user', (done) => {
    server
      .post('/api/group/2/user')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(groupMembers[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Succesfully added member');
        if (err) return done(err);
        done();
      });
  });
});

describe('Change group admin', () => {
  it('does not allow a logged admin to transfer group ownership to non members', (done) => {
    server
      .put('/api/group/2/admin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(newAdmin[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('User not a group member');
        if (err) return done(err);
        done();
      });
  });
  it('does not allow a logged admin to transfer ownership to invalid users', (done) => {
    server
      .put('/api/group/2/admin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(newAdmin[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('User not found');
        if (err) return done(err);
        done();
      });
  });
  it('group must exist', (done) => {
    server
      .put('/api/group/99/admin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(newAdmin[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Group not found');
        if (err) return done(err);
        done();
      });
  });
  it('allows a logged admin to transfer group ownership', (done) => {
    server
      .put('/api/group/2/admin')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(newAdmin[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Successfully updated admin');
        if (err) return done(err);
        done();
      });
  });
});

describe('Admin privileges', () => {
  it('does not allow ordinary member edit group', (done) => {
    server
      .put('/api/group/2/update')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .send(editGroup[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Administrative privileges, not authorized!');
        if (err) return done(err);
        done();
      });
  });
  it('does not allow ordinary member delete group', (done) => {
    server
      .delete('/api/group/2/delete')
      .set('Connection', 'keep alive')
      .set('Accept', 'application/json')
      .set('x-access-token', userData[1])
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
        expect(res.body.success).to.equal(false);
        expect(res.body.message).to.equal('Administrative privileges, not authorized!');
        if (err) return done(err);
        done();
      });
  });
});

