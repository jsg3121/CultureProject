var express = require("express");
var path = require("path");
var router = express.Router();
var app = express();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
// -------------------- 디폴트

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = router;
