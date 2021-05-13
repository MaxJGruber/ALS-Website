const { language } = localStorage;
export default function languagePickerReducer(
  state = { language },
  action: Record<string, any>
) {
  // console.log(action);
  switch (action.type) {
    case "SET_LANGUAGE":
      localStorage.setItem("language", action.language);
      let x = { ...state, language: action.language };
      return x;
    default:
      localStorage.setItem("language", state.language);
      return state;
  }
}

