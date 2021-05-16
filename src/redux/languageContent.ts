import content from "../Content/index";
import store from "./store";

function changeLanguage() {
  const language: "en" | "fr" | "de" = store.getState().language.language;
  return content[language];
}

export default changeLanguage;
