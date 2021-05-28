import { NavLink } from "react-router-dom";
import { useState } from "react";
import changeLanguage from "../redux/languageContent";
import store from "../redux/store";
import { connect } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import logo from "../Assets/ALS_logo.png";

interface iconProps {
  className: string;
  "aria-hidden": "true" | "false";
}

const footerNavigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/aquitainelifestylesolutions",
      icon: (props: iconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const mapDispatchToProps = (dispatch: Function) => ({
  setLanguage: (language: string) =>
    dispatch({ type: "SET_LANGUAGE", language }),
});
const mapStateToProps = (state: Record<string, any>) => {
  return { language: state.language };
};

function Footer(props: Record<string, any>) {
  const [selectedLan, setSelectedLan] = useState("en");

  const handleChange = (event: Record<string, any>) => {
    setSelectedLan(event.target.value);
  };
  const handleConfirm = (event: Record<string, any>) => {
    event.preventDefault();
    props.setLanguage(selectedLan);
  };

  function getdefaultValue(): string | undefined {
    console.log(store.getState().language.language);
    switch (store.getState().language.language) {
      case "en":
        return "en";
      case "fr":
        return "fr";
      case "de":
        return "de";
    }
  }

  return (
    <footer className="bg-gray-50" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-4 flex flex-col items-center justify-center xl:col-span-1">
            <img className="h-12" src={logo} alt="Company name" />
            <a
              href="tel:05 53 83 89 07"
              className="text-gray-500 hover:text-gray-900 text-base"
            >
              05 53 83 89 07
            </a>
            <a
              href="mailto:contact@aquitaine-lifestyle-solutions.com"
              className="text-gray-500 hover:text-gray-900 text-base"
            >
              contact@aquitaine-lifestyle-solutions.com
            </a>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              <a
                href="https://medium.com/aquitaine-lifestyle-solutions"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMedium}
                  className="text-2xl text-gray-400 hover:text-gray-500"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {changeLanguage().footer.title1}
                </h3>
                <ul className="mt-4 space-y-4">
                  {changeLanguage().footer.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {changeLanguage().footer.title2}
                </h3>
                <ul className="mt-4 space-y-4">
                  {changeLanguage().footer.support.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {changeLanguage().footer.title3}
                </h3>
                <ul className="mt-4 space-y-4">
                  {changeLanguage().footer.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {changeLanguage().footer.title4}
                </h3>
                <ul className="mt-4 space-y-4">
                  {changeLanguage().footer.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {changeLanguage().footer.switch}
            </h3>

            <form className="mt-4 sm:flex sm:max-w-md justify-center">
              <label htmlFor="language" className="sr-only">
                Language
              </label>
              <div className="relative">
                <select
                  id="language"
                  name="language"
                  className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={getdefaultValue()}
                  onChange={handleChange}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                  <ChevronDownIcon
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  onClick={handleConfirm}
                  className="w-full bg-african-violet border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-yellow-200 hover:bg-african-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  {changeLanguage().footer.button}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-center lg:mt-16">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2021 Aquitaine Lifestyle Solution.{" "}
            {changeLanguage().footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
