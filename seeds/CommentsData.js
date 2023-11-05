const { Comments } = require('../models');

const CommentsData = [

    {
        description: 'blogpost description',
        post_id: 1,
        user_id: 1,
    }
]

const seedComments = () => Comments.bulkCreate(CommentsData);

module.exports = seedComments;