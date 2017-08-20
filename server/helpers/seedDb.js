import db from '../../server/models';
import users from '../../server/seeders/userSeeder';
import groups from '../../server/seeders/groupSeeder';
import groupMembers from '../../server/seeders/groupMemberSeeder';
import messages from '../../server/seeders/messageSeeder';

db.User.sync({
  force: true
}).then((User) => {
  User
    .bulkCreate(users.dbUsers);
}).then(() => {
  db.Group.sync({
    force: true
  }).then((Group) => {
    Group
      .bulkCreate(groups);
  }).then(() => {
    db.GroupMember.sync({
      force: true
    }).then((GroupMember) => {
      GroupMember
        .bulkCreate(groupMembers);
    }).then(() => {
      db.Message.sync({
        force: true
      }).then((Message) => {
        Message
          .bulkCreate(messages);
      });
    });
  });
});

