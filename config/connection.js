require("dotenv").config();
const mysql = require("mysql");

if(process.env.JAWSDB_URL)
{
     const connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
     const connection = mysql.createConnection({
          host: "localhost",
          port: 3306,
          user: "root",
          password: process.env.password,
          database: "burgers_db"
     });
}
   
connection.connect(function(err) {
     if (err) {
       return;
     }
});

module.exports = connection;