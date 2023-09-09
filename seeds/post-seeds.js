const { Post } = require('../models');

const postData = [
 {
    title: "Bootcamp",
    content: "You need to study 30 hours plus during bootcamp",
    user_id: 1
 },
 {
    title: "IT",
    content: "Front End is better than Back End",
    user_id: 2
 }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;