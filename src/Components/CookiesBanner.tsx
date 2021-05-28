import { CheckIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import store from "../redux/store";
import changeLanguage from "../redux/languageContent";

const mapDispatchToProps = (dispatch: Function) => ({
  setCookiesAuth: (cookiesAuth: Record<string, any>) =>
    dispatch({ type: "SET_COOKIESAUTH", cookiesAuth }),
});

const mapStateToProps = (state: Record<string, any>) => {
  return { cookiesAuth: state.cookiesAuth, popupOpen: state.popupOpen };
};

function CookiesBanner(props: Record<string, any>) {
  const [open, setOpen] = useState(true);
  // eslint-disable-next-line
  const [content, setContent] = useState(null);

  useEffect(() => {
    store.subscribe(() => {
      store.getState();
      setContent(store.getState().language.language);
    });
  });

  useEffect(() => {
    if (Boolean(store.getState().cookiesAuth.cookiesAuth) === true) {
      setOpen(false);
    }
  }, [open]);

  const handleClick = (event: Record<string, any>) => {
    event.preventDefault();
    setOpen(false);
    props.setCookiesAuth(true);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-0 z-10 inset-x-0 bg-opacity-20 bg-gray-800">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-sm text-gray-50">
                <span className="md:hidden">
                  {changeLanguage().cookieBanner.alertShort}
                </span>
                <span className="hidden md:inline">
                  {changeLanguage().cookieBanner.alert}
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <NavLink
                    to="/legal"
                    className="text-white font-bold underline"
                  >
                    {changeLanguage().cookieBanner.linkText}
                    <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                onClick={handleClick}
                className="flex p-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesBanner);
