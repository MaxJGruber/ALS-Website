import { config as dotenvConfig } from "dotenv";
import * as express from "express";
import * as path from "path";
import * as nconf from "nconf";
nconf.env().argv();

dotenvConfig();
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Server running on port: ${port}.`);
console.log(`Go to: http://localhost:${port}`);
