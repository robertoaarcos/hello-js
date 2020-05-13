var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hola mundo Node.js 2020\n");
});

app.listen(80, function () {
  console.log("Demo application listening on port 8080");
});

module.exports = app;
