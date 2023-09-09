// const router = require('express').Router();
// const { User, Post, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// // Route to get all posts
// router.get('/', async (req, res) => {
//     try {
//         const dbPostData = await Post.findAll({
//             attributes: ['id', 'content', 'title', 'created_at'],
//             order: [['created_at', 'DESC']],
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username'],
//                     },
//                 },
//             ],
//         });
//         res.json(dbPostData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Route to get a single post by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const dbPostData = await Post.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             attributes: ['id', 'content', 'title', 'created_at'],
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username'],
//                     },
//                 },
//             ],
//         });

//         if (!dbPostData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }

//         res.json(dbPostData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Route to create a new post
// router.post('/', withAuth, async (req, res) => {
//     try {
//         console.log('creating');
//         const dbPostData = await Post.create({
//             title: req.body.title,
//             content: req.body.post_content,
//             user_id: req.session.user_id,
//         });
//         res.json(dbPostData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Route to update a post by ID
// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const dbPostData = await Post.update(
//             {
//                 title: req.body.title,
//                 content: req.body.post_content,
//             },
//             {
//                 where: {
//                     id: req.params.id,
//                 },
//             }
//         );

//         if (!dbPostData[0]) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }

//         res.json(dbPostData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Route to delete a post by ID
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const dbPostData = await Post.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (!dbPostData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }

//         res.json(dbPostData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// module.exports = router;




const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');
const withAuth = require('../../utils/auth');


// Get all posts
router.get("/", (req, res) => {
    Post.findAll({
            attributes: ["id", "content", "title", "created_at"],
            order: [
                ["created_at", "DESC"]
            ],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single post
router.get("/:id", (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "content", "title", "created_at"],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a post
router.post("/", withAuth, (req, res) => {
    console.log("creating");
    Post.create({
            title: req.body.title,
            content: req.body.post_content,
            user_id: req.session.user_id
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a post
router.put("/:id", withAuth, (req, res) => {
    Post.update({
            title: req.body.title,
            content: req.body.post_content,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Delete a post
router.delete("/:id", withAuth, (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;