import { config as dotenvConfig } from "dotenv";
import express, { Response, Request } from "express";
import { submitForm } from "./wufoo.api";
import FormData from "form-data";

dotenvConfig();
const app = express();

app.use(express.json());

app.get("/getting", async (req: Request, res: Response) => {
  res.send("Hello");
});

app.post("/submit-form", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const formData = new FormData();
    for (var key in req.body) {
      formData.append(key, req.body[key]);
    }
    await submitForm(formData);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

const port = process.env.BACKEND_PORT || 4000;
app.listen(port);
console.log(`Server running on port: ${port}.`);
console.log(`Go to: http://localhost:${port}`);
