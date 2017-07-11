module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      groupAdmin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      groupId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'PostIts',
          key: 'id',
          as: 'userId'
        },
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
  down: queryInterface => queryInterface.dropTable('groups'),
};
