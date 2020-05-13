var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World\n");
});

app.listen(80, function () {
  console.log("Demo application listening on port 8080");
});

module.exports = app;
