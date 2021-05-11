import config from "./config-store";
import express, { Response, Request } from "express";
import { submitForm } from "./wufoo.api";
import FormData from "form-data";
import cors from "cors";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors({
  origin: `http://localhost:${config.PORT}`,
  credentials: true,
}));

app.post("/submit-form", async (req: Request, res: Response) => {
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

app.listen(config.BACKEND_PORT);
console.log(`Server running on: http://localhost:${config.BACKEND_PORT}`);
