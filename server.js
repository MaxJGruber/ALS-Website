"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var express = require("express");
var path = require("path");
var nconf = require("nconf");
nconf.env().argv();
dotenv_1.config();
var app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
var port = process.env.PORT || 4000;
app.listen(port);
console.log("Server running on port: " + port + ".");
console.log("Go to: http://localhost:" + port);
