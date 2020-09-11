const express = require("express");
const burger = require("../models/burgers.js");

const app = express.Router();

app.get("/", (request, response)=>{
     burgers.all("burgers", (result)=>{
          var hbsObj = 
          { burgers : result};
          response.render("index", hbsObj);
     });
});

app.post("/api/:burger", (request, response)=>{
     var burger = request.params.burger;
     burger.insertOne("burgers", "burger_name", burger, (result)=>{
          res.json({ id: result.insertId });
     });
});

app.put("/api/:burger", (request, response)=>{
     var burger = request.params.burger
     burger.updateOne("burgers", "isDevoured", "TRUE", "burger_name", burger, (result)=>{
        if(result.changedRos == 0) return res.status(404).end();
        res.status(200).end();  
     });
});

module.exports = app;