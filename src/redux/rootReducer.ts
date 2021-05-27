import { combineReducers } from "redux";

import languagePickerReducer from "./languagePickerReducer";
import sendStatusReducer from "./sendStatusReducer";
import cookiesAuthReducer from "./cookiesAuthReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
  sendStatus: sendStatusReducer,
  cookiesAuth: cookiesAuthReducer,
});

export default rootReducer;
