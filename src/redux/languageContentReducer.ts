import content from "../content/index";

export default function languageContentReducer(
  state = { content: content.en },
  action: Record<string, any>
) {
  switch (action.type) {
    case "SET_CONTENT":
      let x = { ...state, content: action.content };
      return x;
    default:
      return state;
  }
}
