let cookiesAuth: boolean | string | void | null;

function hascookiesAuthSessionStorage(
  cookiesAuthState: string | boolean | undefined
) {
  if (cookiesAuthState === undefined) {
    try {
      if (sessionStorage.getItem("cookiesAuth")) {
        cookiesAuth = sessionStorage.getItem("cookiesAuth");
        return cookiesAuth;
      } else {
        return cookiesAuth;
      }
    } catch (error) {
      cookiesAuth = false;
      return cookiesAuth;
    }
  } else {
    try {
      sessionStorage.setItem("cookiesAuth", String(cookiesAuthState));
      return cookiesAuthState;
    } catch (error) {
      cookiesAuth = cookiesAuthState;
      return cookiesAuth;
    }
  }
}

export default function cookiesAuthReducer(
  state = { cookiesAuth: hascookiesAuthSessionStorage(undefined) },
  action: Record<string, any>
) {
  switch (action.type) {
    case "SET_COOKIESAUTH":
      hascookiesAuthSessionStorage(action.cookiesAuth);
      let newState = { ...state, cookiesAuth: action.cookiesAuth };
      return newState;
    default:
      return state;
  }
}
