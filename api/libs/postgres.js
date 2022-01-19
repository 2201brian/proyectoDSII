const {Client} = require("pg");

async function getConnection(){
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "dwiszgiq",
    password: "693fFfE3uk9ewU7k38IiBPNHv02LNnuG",
    database: "dwiszgiq"
  });
  await client.connect();
  return client;
}
module.exports = getConnection;


