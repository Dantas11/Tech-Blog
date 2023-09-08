const { User } = require("../models");

const userData = [
  {
    username: "TestUser",
    password: "password123",
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;