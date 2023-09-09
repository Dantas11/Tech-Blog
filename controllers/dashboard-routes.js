// const router = require('express').Router();
// const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // Route to get all posts for the logged-in user
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const dbPostData = await Post.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             attributes: ['id', 'title', 'content', 'created_at'],
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username'],
//                     },
//                 },
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });

//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('dashboard', { posts, loggedIn: true });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Route to get a single post for editing
// router.get('/edit/:id', withAuth, async (req, res) => {
//     try {
//         const dbPostData = await Post.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             attributes: ['id', 'title', 'content', 'created_at'],
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username'],
//                     },
//                 },
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });

//         if (!dbPostData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }

//         const post = dbPostData.get({ plain: true });
//         res.render('edit-post', { post, loggedIn: true });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Route to render the 'add-post' template for creating a new post
// router.get('/new', (req, res) => {
//     res.render('add-post', { loggedIn: true });
// });

// module.exports = router;





const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    Post,
    User,
    Comment
} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({
                plain: true
            }));
            res.render('dashboard', {
                posts,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }

            const post = dbPostData.get({
                plain: true
            });

            res.render('edit-post', {
                post,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/new', (req, res) => {
    res.render('add-post', {
        loggedIn: true
    })
})

module.exports = router;