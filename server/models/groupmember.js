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
      unique: {
        args: true,
        msg: 'User already a group member'
      },
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        GroupMember.belongsTo(models.Group, {
          foreignKey: 'groupId',
          as: 'group',
          onDelete: 'CASCADE',
        });
        GroupMember.belongsTo(models.User, {
          foreignKey: 'memberId',
          as: 'admin',
          onDelete: 'CASCADE',
        });
      }
    },
  });
  return GroupMember;
};

// export default GroupMemberModel;
