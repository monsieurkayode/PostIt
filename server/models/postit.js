'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostIt = sequelize.define('PostIt', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        PostIt.hasMany(models.group, {
          foreignKey: 'user',
          as: 'groups',
        });
      },
    },
  });
  return PostIt;
};