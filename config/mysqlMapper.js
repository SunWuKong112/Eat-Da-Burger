const connection = require("./connection.js");

const mysqlMapper = {
     selectAll: (table, cb)=>{
          queryString = ` SELECT * FROM ${table}`;
          connection.query(queryString, (err, result)=>{
               if (err) throw err;
          });
          cb(result);
     },
     insertOne: (table, colToInsert, whatToInsert, cb)=>{
          queryString = `INSERT INTO ${table} (${colToInsert}, ) VALUES ("${whatToInsert}")`;
          connection.query(queryString, (err, result)=>{
               if (err) throw err;
               cb(result);
          });
     },
     updateOne: (table, colToChange, newValue, where, isThis, cb)=>{
          queryString = `UPDATE ${table} SET ${colToChange} = ${newValue} WHERE ${where} = ${isThis}`;
          connection.query(queryString, (err, result)=>{
               if(err) throw err;
               cb(result);
          });
     }
}

module.exports = mysqlMapper;