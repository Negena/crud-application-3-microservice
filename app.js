const dotenv          = require("dotenv");
dotenv.config({path:__dirname+'/config.env'});

const express         = require("express");
const bodyParser      = require("body-parser");
const ejs             = require('ejs');
const path            = require("path");

const router          = require("./mvc/controller/routes/router");
const db              = require("./mvc/model/db");
const app   = express();

db()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +"/public"));
app.set("views", path.join(__dirname + "/mvc/views/"));
app.set("view engine", "ejs");

app.use("/", router);


app.listen(3000, () => {
  console.log("works")
});
