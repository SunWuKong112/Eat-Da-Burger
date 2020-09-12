const mysqlMapper = require("../config/mysqlMapper.js");

const burgers ={
     all: (table, cb)=>{
          mysqlMapper.selectAll(table, (res)=>{
               cb(res);
          });
     },
     insertOne: (table, colToInsert, whatToInsert, cb)=>{
          mysqlMapper.insertOne(table, colToInsert, whatToInsert, (result)=>{
               cb(result);
          });
     },
     updateOne: (table, colToChange, newValue, where, isThis, cb)=>{
          mysqlMapper.updateOne(table, colToChange, newValue, where, isThis, (result)=>{
               cb(result);
          });
     }
}

module.exports = burgers;