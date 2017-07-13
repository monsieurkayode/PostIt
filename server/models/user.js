

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsToMany(models.Group, {
          as: 'Users',
          through: 'UserGroup',
          foreignKey: 'userId',
        });
        // User.hasMany(models.Message, {
        //   as: 'Messages',
        // });
      },
    },
  });
  return User;
};
