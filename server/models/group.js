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
      unique: {
        args: true,
        msg: 'Group name already exists'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Group.belongsTo(models.User, {
          foreignKey: 'groupAdmin',
          as: 'admin',
          onDelete: 'SET NULL'
        });
        Group.hasMany(models.GroupMember, {
          foreignKey: 'groupId',
          as: 'groupMembers',
          onDelete: 'CASCADE'
        });
      },
    },
  });
  return Group;
};

// export default GroupModel;
