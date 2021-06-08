"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 8069;
app.get("/", function (req, res) {
  res.send('hello world');
});
app.listen(port, function () {
  console.log("Server running in port " + port);
});