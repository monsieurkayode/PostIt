/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for groups
 * @return {object} group model
 */
const GroupModel = (sequelize, DataTypes) => {
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
          foreignKey: 'userName',
          onDelete: 'CASCADE'
        });
        Group.hasMany(models.UserGroup, {
          as: 'UserGroups',
          foreignKey: 'groupId',
        });
      },
    },
  });
  return Group;
};

export default GroupModel;
