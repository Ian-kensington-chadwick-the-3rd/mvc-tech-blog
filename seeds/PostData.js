const { Post } = require('../models');

const PostData = [
    {
        title: 'title',
        description: 'description',
        date: '12/12/23',
        
    }
]


const seedPost = () => Post.bulkCreate(PostData);

module.exports = seedPost;