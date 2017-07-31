/**
 * @param  {object} sequelize
 * @param  {object} DataTypes
 * @description creating model for messages
 * @return {object} message model
 */
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Message.belongsTo(models.Group, {
          foreignKey: 'messageId',
          as: 'group',
          onDelete: 'CASCADE',
        });
        Message.belongsTo(models.User, {
          foreignKey: 'sender',
          as: 'author'
        });
      }
    },
  });
  return Message;
};

// export default MessageModel;
