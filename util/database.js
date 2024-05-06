const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mysql123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
