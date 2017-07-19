/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for groups
 * @return {object} group model
 */
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Group.belongsTo(models.User, {
          // foreignKey: 'userId',
          foreignKey: 'groupAdmin',
          // as: 'groupAdmin'
        });
        Group.hasMany(models.GroupMember, {
          foreignKey: 'groupId',
          as: 'groupMembers'
          // constraints: false
        });
      },
    },
  });
  return Group;
};

// export default GroupModel;
