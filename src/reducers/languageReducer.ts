export default function languageReducer(
  state = { language: "EN" },
  action: Record<string, any>
) {
  console.log(action);
  switch (action.type) {
    case "SET_LANGUAGE":
      let x = { ...state, language: action.language };
      return x;
    default:
      return state;
  }
}
