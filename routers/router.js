const express = require("express");
const auth = require("./auth");
const router = express.Router();
auth.use(express.static(__dirname + "/public"))
router.use("/auth",auth)

router.route("/").get((req, res) => {
  res.sendFile("index.html");
});

module.exports = router;

