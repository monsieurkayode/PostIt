'use strict';
module.exports = (sequelize, DataTypes) => {
  const groupMember = sequelize.define('groupMembers', {
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
    },
  });
  return groupMember;
};