const {Pool } = require("pg");
const { config } = require("../config/config");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = "postgres://dwiszgiq:693fFfE3uk9ewU7k38IiBPNHv02LNnuG@castor.db.elephantsql.com/dwiszgiq";

const pool = new Pool({
    connectionString: URI
  });

module.exports = pool;


