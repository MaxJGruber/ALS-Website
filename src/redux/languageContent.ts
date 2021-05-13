import content from "../content/index";
import store from "../redux/store";

function changeLanguage() {
  const language: "en" | "fr" | "de" = store.getState().language.language;
  return content[language];
}

export default changeLanguage;
