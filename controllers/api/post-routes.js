const router = require('express').Router();
const { Post, Comments } = require('../../models');

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

router.post('/comments', async (req,res) => {
   
        const commentsData = await Comments.create({
            description: req.body.description,
             post_id: req.body.post_id,
        })
       
        res.status(200).json(commentsData)
        
   
    });



module.exports = router