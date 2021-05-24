import { combineReducers } from "redux";

import languagePickerReducer from "./languagePickerReducer";
import languageContentReducer from "./languageContentReducer";
import sendStatusReducer from "./sendStatusReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
  content: languageContentReducer,
  sendStatus: sendStatusReducer,
});

export default rootReducer;
