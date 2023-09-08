const { Comment } = require('../models');

const commentData = [
  {
    blog_id: 1,
    comment_description: "Test Comment",
    user_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;