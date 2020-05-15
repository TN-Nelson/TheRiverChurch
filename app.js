//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("home"); 
});
app.get("/new", function (req, res) {
  res.render("new");
});
app.get("/current", function (req, res) {
  
  res.render("current");
});
app.get("/give", function (req, res) {
  res.render("give");
});
app.get("/serve", function (req, res) {
  res.render("serve");
});
app.get("/community", function (req, res) {
  res.render("community");
});













app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});