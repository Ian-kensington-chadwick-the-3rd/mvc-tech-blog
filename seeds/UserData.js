const { User } = require('../models');



const userData = [

    {
        username: 'turtle',
        password: 'password1',
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;