export default function sendStatusReducer(
  state = { status: null },
  action: Record<string, any>
) {
  switch (action.type) {
    case "SET_STATUS":
      let x = { ...state, status: action.status };
      console.log("X", x);
      return x;
    default:
      return state;
  }
}
