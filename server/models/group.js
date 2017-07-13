module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Group.belongsToMany(models.User, {
          through: 'UserGroup',
          foreignKey: 'groupId',
        });
        Group.hasMany(models.Message, {
          as: 'Messages',
          foreignKey: 'groupId',
        });
      },
    },
  });
  return Group;
};
