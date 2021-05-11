import axios from "axios";
import FormData from "form-data";
import { config as dotenvConfig } from "dotenv";
import * as nconf from "nconf";
dotenvConfig();
nconf.env();

const REACT_APP_WUFOO_BASE_URL = nconf.get("REACT_APP_WUFOO_BASE_URL");
const REACT_APP_WUFOO_API_KEY = nconf.get("REACT_APP_WUFOO_API_KEY");
const REACT_APP_WUFOO_FORM_ID = nconf.get("REACT_APP_WUFOO_FORM_ID");

const service = axios.create({
  baseURL: REACT_APP_WUFOO_BASE_URL,
  auth: {
    username: REACT_APP_WUFOO_API_KEY,
    password: "password",
  },
  headers: { "Content-Type": "multipart/form-data" },
});

export async function sendForm(
  dataForm: Record<string, any>
): Promise<Record<string, any> | undefined> {
  console.log("HELLO");
  try {
    const form_data = new FormData();
    console.log("HELLO2");
    for (var key in dataForm) {
      form_data.append(key, dataForm[key]);
    }
    const url = `/api/v3/forms/${REACT_APP_WUFOO_FORM_ID}/entries.json`;

    console.log("HELLO3", url);
    const { data } = await service.request({
      method: "post",
      url,
      data: form_data,
      headers: form_data.getHeaders(),
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// sendForm({ Field4: "maxjgruber@gmail.com" });
