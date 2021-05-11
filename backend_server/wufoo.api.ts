import axios from "axios";

// const {
//   WUFOO_BASE_URL,
//   WUFOO_API_KEY,
//   WUFOO_FORM_ID,
//   WUFOO_PASSWORD,
// } = process.env;

const service = axios.create({
  baseURL: "https://maxmenace94.wufoo.com",
  auth: {
    username: "4C3A-FW55-B1RV-0ABV",
    password: "pa$$w0rd",
  },
});

export async function submitForm(
  dataForm: Record<string, any>
): Promise<Record<string, any>> {
  const url = `/api/v3/forms/z17zzudj10eomoo/entries.json`;
  const { data } = await service.request({
    method: "post",
    url,
    data: dataForm,
    headers: dataForm.getHeaders(),
  });
  console.log("DATA>>>>", data);
  return data;
}
