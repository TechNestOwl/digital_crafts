'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Doctors', [{
      fullName: "Allan Wake",
      email: 'aWake@gmail.com',
      appointments: "0",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
