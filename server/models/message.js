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
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
    },
  });
  return Message;
};

// export default MessageModel;
