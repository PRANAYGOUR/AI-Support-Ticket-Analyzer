const mysql = require("mysql2");

//we used create pool instead of createConnection because it allows us to manage multiple 
// connections to the database efficiently and reuse them when needed, 
// which is especially useful in a web application where multiple requests 
// can be made simultaneously.
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
//this exports the connetion and allows to use anywhere in the project and we can use it to '
// query the database
module.exports = connection.promise();
//we used .promise() It enables Promise-based queries, allowing us to use async/await instead of callbacks.