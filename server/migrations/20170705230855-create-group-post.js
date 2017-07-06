'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('groupPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false
      },
      messageId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      postUsername: {
        type: Sequelize.STRING,
        allowNull: false
      },
      memberId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface) => queryInterface.dropTable('groupPosts'),
};