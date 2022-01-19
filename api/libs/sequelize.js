const{ Sequelize } = require("sequelize");

const { config } = require("../config/config");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = "postgres://dwiszgiq:693fFfE3uk9ewU7k38IiBPNHv02LNnuG@castor.db.elephantsql.com/dwiszgiq";

const sequelize = new Sequelize(URI, {
  dialect : "postgres",
  logging : true,
});

module.exports = sequelize;
