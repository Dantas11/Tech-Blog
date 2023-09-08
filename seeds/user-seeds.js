const { User } = require("../models");

const userData = [
  {
    username: "Fernanda",
    password: "Fernanda123",
  },
  {
    username: "Thiago",
    password: "Thiago123"
  }
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;