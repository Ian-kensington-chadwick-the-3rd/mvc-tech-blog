const router = require('express').Router();
const { Post, User, Comments } = require('../models');

// router.get('/', async (req, res) => {
//     try {
        
//         res.render('post');
//         console.log()
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

 

  router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll();
        // console.log("dbPostData: ", dbPostsData);
        const postsData = dbPostsData.map((post)=> {
            // console.log("inside map: with post: ", post);
            return post.get({ plain: true});
        });

        console.log("postData: ", postsData);
        res.render('homepage', {postsData});

    } catch (err) {
        console.log(err);
        res.status.json(err);
    }
}); 

module.exports = router;