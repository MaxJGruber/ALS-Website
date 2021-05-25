import { NavLink } from "react-router-dom";
import changeLanguage from "../redux/languageContent";
import introPic from "../Assets/living-in-france.jpeg";

export const HeroSection = () => {
  return (
    <div className="relative">
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-purple-300"
      /> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-pale-cornflower-blue" /> */}
      <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute h-full inset-0">
            <img
              className="h-full w-full object-cover"
              src={introPic}
              alt="People working on laptops"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-100"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-indigo-300">
                {changeLanguage().heroSection.taglinePart1}
              </span>
              <span className="block text-blue-green">
                Aquitaine Lifestyle Solutions
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-50 sm:max-w-3xl">
              {changeLanguage().heroSection.hook1}
              <br />
              {changeLanguage().heroSection.hook2}
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              {/* <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"> */}
              <NavLink
                to="/services"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-purple-100 sm:px-8"
              >
                {changeLanguage().heroSection.button}
              </NavLink>
              {/* <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-african-violet-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Live demo
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
