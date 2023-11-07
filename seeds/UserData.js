const { User } = require('../models');



const userData = [

    {
        username: 'ian',
        email: 'turtle',
        password: 'password1',
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;