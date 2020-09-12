const express = require("express");
const routes = require("./controllers/burger_controllers.js");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 9001;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT);