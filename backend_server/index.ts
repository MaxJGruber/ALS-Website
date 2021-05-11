import { config as dotenvConfig } from "dotenv";
import express, { Response, Request } from "express";

dotenvConfig();
const app = express();

app.get("/getting", async (req: Request, res: Response) => {
  res.send("Hello");
});

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Server running on port: ${port}.`);
console.log(`Go to: http://localhost:${port}`);
