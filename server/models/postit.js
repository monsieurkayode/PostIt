

module.exports = (sequelize, DataTypes) => {
  const PostIt = sequelize.define('PostIts', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        PostIt.hasMany(models.group, {
          foreignKey: 'userId',
          as: 'groups',
        });
      },
    },
  });
  return PostIt;
};
