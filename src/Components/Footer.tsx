import { NavLink } from "react-router-dom";
import store from "../redux/store";
import { connect } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../Assets/ALS_logo.png";
interface iconProps {
  className: string;
  "aria-hidden": "true" | "false";
}

const footerNavigation = {
  solutions: [
    { name: "Real Estate", href: "#" },
    { name: "Property Management", href: "#" },
    { name: "Financial Advice", href: "#" },
    { name: "Relocation Services", href: "#" },
  ],
  support: [
    { name: "Fees", href: "/fees" },
    { name: "Contact us", href: "/contact-us" },
    // { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About us", href: "/team" },
    { name: "Blog", href: "/blog" },
    // { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Policy", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
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

    {
      name: "Twitter",
      href: "#",
      icon: (props: iconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
  const handleChange = (event: Record<string, any>) => {
    props.setLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
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
            <p className="text-gray-500 text-base">05 53 83 89 07</p>
            <p className="text-gray-500 text-base">
              contact@aquitaine-lifestyle-solutions.com
            </p>
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
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.solutions.map((item) => (
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
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
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
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
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
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
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
              Switch language
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
                  className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-center lg:mt-16">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2021 Aquitaine Lifestyle Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
