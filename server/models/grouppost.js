'use strict';
module.exports = (sequelize, DataTypes) => {
  const groupPost = sequelize.define('groupPosts', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memberId: {
      type: DataTypes,
      allowNull: false,
    },
  }, {
    classMethods: {
    },
  });
  return groupPost;
};