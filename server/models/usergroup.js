/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for usergroups
 * @return {object} usergroup model
 */
const UserGroupModel = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    userId: {
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
  return UserGroup;
};

export default UserGroupModel;
