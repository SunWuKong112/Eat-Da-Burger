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

router.post("/api/burger", (request, response)=>{
     var burger = request.body.burger;
     burgers.insertOne("burgers", "burger_name", burger, (result)=>{
          console.log(`${burger} grilled successfully.`)
          console.log(response);
          response.json({ id: result.insertId });
     });
});

router.put("/api/burger/:id", (request, response)=>{
     var burger = request.params.id;
     burgers.updateOne("burgers", "isDevoured", "TRUE", "id", burger, (result)=>{
        if(result.changedRows == 0) return response.status(404).end();
        response.status(200).end();  
     });
});

router.delete("/api/burger/:id", (request, response)=>{
     var burger = request.params.id;
     burgers.destroy("burgers", "id", burger, (result)=>{
          response.status(200).end();
     });
});

module.exports = router;