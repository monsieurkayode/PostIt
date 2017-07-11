module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('groups', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    groupAdmin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        group.belongsTo(models.PostIt, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
        // group.hasMany(models.groupMembers, {
        //   foreignKey: 'groupId',
        //   as: 'groupMembers',
        // });
      },
    },
  });
  return group;
};
