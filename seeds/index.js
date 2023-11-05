const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedPost = require('./PostData');
const seedComments = require('./CommentsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComments();

  process.exit(0);
};

seedAll();
