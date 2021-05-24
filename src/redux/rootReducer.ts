import { combineReducers } from "redux";

import languagePickerReducer from "./languagePickerReducer";
import sendStatusReducer from "./sendStatusReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
  sendStatus: sendStatusReducer,
});

export default rootReducer;
