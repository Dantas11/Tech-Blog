const { User } = require("../models");

const userData = [
  {
    username: "Fernanda",
    password: "Fernanda12345",
  },
  {
    username: "Thiago",
    password: "Thiago12345"
  }
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;