import { combineReducers } from "redux";

import languagePickerReducer from "./languagePickerReducer";
import languageContentReducer from "./languageContentReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
  content: languageContentReducer,
});

export default rootReducer;
