const express = require("express");
const burgers = require("../models/burgers.js");

const router = express.Router();

router.get("/", (request, response)=>{
     burgers.all("burgers", (result)=>{
          var hbsObj = {
               burgers : result
          };
          console.log(hbsObj);
          response.render("index", hbsObj);
     });
});

router.post("/api/:burger", (request, response)=>{
     var burger = request.params.burger;
     burgers.insertOne("burgers", "burger_name", burger, (result)=>{
          response.json({ id: result.insertId });
     });
});

router.put("/api/burger/:id", (request, response)=>{
     var burger = request.params.id;
     burgers.updateOne("burgers", "isDevoured", "TRUE", "id", burger, (result)=>{
        if(result.changedRos == 0) return response.status(404).end();
        response.status(200).end();  
     });
});

module.exports = router;