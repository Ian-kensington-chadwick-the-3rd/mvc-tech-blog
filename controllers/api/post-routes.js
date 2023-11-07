const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req,res) => {
//  try {
    const PostData = await Post.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id
    })
   
    res.status(200).json(PostData)
    
//  } catch(err) {
// res.status(400).json(err)
//  }
});

module.exports = router