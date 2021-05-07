"use strict";
exports.__esModule = true;
// import { config as dotenvConfig } from "dotenv";
var express = require("express");
var path = require("path");
// dotenvConfig();
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
