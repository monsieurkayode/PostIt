/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for usergroups
 * @return {object} usergroup model
 */
module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define('GroupMember', {
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
  return GroupMember;
};

// export default GroupMemberModel;
