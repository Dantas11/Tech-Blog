const { Comment } = require("../models");

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Working with React is so fun!",
  },
  {
    user_id: 1,
    post_id: 2,
    comment_text: "I loved learning about Sequelize!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
