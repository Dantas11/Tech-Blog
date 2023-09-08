const { Post } = require('../models');

const postData = [
    {
        subject: "Test subject 1",
        article: "You need to study 30 hours plus during bootcamp",
        user_id: 1
    },
    {
        subject: "Test subject 2",
        article: "Front End is better than Back End",
        user_id: 2
    }
  ];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;