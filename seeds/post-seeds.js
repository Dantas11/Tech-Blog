const { Post } = require("../models");

const postData = [
  {
    title: "React Framework",
    content:
      "React is a library. It lets you put components together, but it doesn't prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.",
    user_id: 1,
  },
  {
    title: "Sequelize",
    content:
      "Sequelize is an Object Relational Mapper for Node. js. Sequelize lets us connect to a database and perform operations without writing raw SQL queries. It abstracts SQL queries and makes it easier to interact with database models as objects.",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
