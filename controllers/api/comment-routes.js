const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to get all comments
router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to create a new comment
router.post("/", withAuth, async (req, res) => {
  if (req.session) {
    try {
      // Create a new comment in the database with the provided comment_text, post_id, and user_id
      const dbCommentData = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
});

module.exports = router;
