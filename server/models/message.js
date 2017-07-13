

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      // associate: (models) => {
      //   Message.belongsTo(models.Group);
      // }
    },
  });
  return Message;
};
