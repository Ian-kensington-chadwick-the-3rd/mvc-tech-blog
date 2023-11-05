const { Comments } = require('../models');

const CommentsData = [

    {
        description: 'blogpost description',
       
    }
]

const seedComments = () => Comments.bulkCreate(CommentsData);

module.exports = seedComments;