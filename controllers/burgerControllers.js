//This is where the routes will be

//Require
const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/api/all");
});

router.get("/api/all", function(req, res) {
  burger.all(function(data) {
    res.render("index", { burger: data });
  });
});

router.post("/api/createburger", function(req, res) {
  console.log(req.body);
  burger.create(req.body.burgerName, function(data) {
    //res.redirect("/");
    console.log(data);
  });
});

router.put("/api/updateburger/:id", function(req, res) {
  burger.update("id=" + req.params.id, function(data) {
    res.redirect("/");
  });
});

module.exports = router;
