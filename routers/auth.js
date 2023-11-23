const express = require("express");
const auth = express.Router();

auth.use(express.static(__dirname + "/public"))
auth.route("/").get((req, res) => {
  res.render("auth/index");
});

module.exports = auth;


