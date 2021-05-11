import { ServerIcon } from "@heroicons/react/outline";
import axios from "axios";
// import FormData from "form-data";
import { config as dotenvConfig } from "dotenv";
import nconf from "nconf";
dotenvConfig();
nconf.env();

const REACT_APP_WUFOO_BASE_URL = nconf.get("REACT_APP_WUFOO_BASE_URL");
const REACT_APP_WUFOO_API_KEY = nconf.get("REACT_APP_WUFOO_API_KEY");
const REACT_APP_WUFOO_FORM_ID = nconf.get("REACT_APP_WUFOO_FORM_ID");
console.log(REACT_APP_WUFOO_BASE_URL);
console.log(REACT_APP_WUFOO_API_KEY);
console.log(REACT_APP_WUFOO_FORM_ID);

const service = axios.create({
  baseURL: "http://localhost:5000",
  auth: {
    username: REACT_APP_WUFOO_API_KEY,
    password: "password",
  },
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "*",
  },
});

export async function sendForm(
  dataForm: Record<string, any>
): Promise<Record<string, any> | undefined> {
  console.log(dataForm);
  try {
    const url = "/api/form/send-form";
    // const url = `${REACT_APP_WUFOO_BASE_URL}/api/v3/forms/${REACT_APP_WUFOO_FORM_ID}/entries.json`;
    // const { data } = await service.request({
    //   method: "post",
    //   url,
    //   data: dataForm,
    // });
    const { data } = await service.post(url, dataForm);
    console.log("DATA>>>>", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

sendForm({ Field4: "maxjgruber@gmail.com" });
