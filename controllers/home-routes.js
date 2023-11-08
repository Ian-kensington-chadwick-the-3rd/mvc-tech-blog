const router = require('express').Router();
const { request } = require('express');
const { Post, User, Comments } = require('../models');
const { areAuth, withAuth } = require('../utils/auth');
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
        res.render('homepage', {
            postsData, 
            loggedIn: req.session.loggedIn,});

    } catch (err) {
        console.log(err);
        res.status.json(err);
    }
}); 

router.get('/dashboard', withAuth, async (req, res) => {
  try {
      const dbPostsData = await Post.findAll({
        where:{
          user_id: req.session.user_id
        }
      });
      // console.log("dbPostData: ", dbPostsData);
      const postsData = dbPostsData.map((post)=> post.dataValues);


      console.log("postData: ", postsData);
      res.render('dashboard', {
          
          postsData, 
          loggedIn: req.session.loggedIn,});

  } catch (err) {
      console.log(err);
      res.status.json(err);
  }
}); 

router.get('/comments/:id', async (req, res) => {
  // try {
      const dbCommentsData = await Comments.findAll({
        where: {
          post_id: req.params.id
        }
});
      console.log(dbCommentsData)
      const post_id = req.params.id
      // console.log("dbPostData: ", dbPostsData);
      const commentsData = dbCommentsData.map((post)=> {
          // console.log("inside map: with post: ", post);
          return post.get({ plain: true});
      });

      console.log("postData: ", commentsData);
      res.render('comments', {
          post_id,
          commentsData, 
          loggedIn: req.session.loggedIn,});

  // } catch (err) {
  //     console.log(err);
  //     res.status.json(err);
  // }
}); 


router.get('/login', areAuth, (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });




router

module.exports = router;  





  // router.get('/comments', withAuth, async (req, res) => {
  //   try {
  //       const dbCommentsData = await Comments.findAll({
  //         where:{
  //           post_id: req.session.post_id
  //         }
  //       });
  //        console.log("dbPostData: ", dbCommentsData);
  //       const commentsData = dbCommentsData.map((post)=> post.dataValues);
        
  
  //       console.log("postData: ", postsData);
  //       res.render('comments', {
  //           commentsData,
  //           loggedIn: req.session.loggedIn,});
  
  //   } catch (err) {
  //       console.log(err);
  //       res.status.json(err);
  //   }
  // }); 



// router.post('/posts', async (req,res) => {
  //   try {
  //      const PostData = await Post.create({
  //          title: req.body.title,
  //          description: req.body.description,
  //          user_id: req.session.user_id
  //      })
      
  //      res.status(200).json(PostData)
       
  //   } catch(err) {
  //  res.status(400).json(err)
  //   }
  //  });
