const { Comment } = require('../models');

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Great this is awesome!"
  },
  {
    user_id: 1,
    post_id: 2,
    comment_text: "Wow fantastic!"    
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;