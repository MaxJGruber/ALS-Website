import { NavLink } from "react-router-dom";
import changeLanguage from "../redux/languageContent";
import introPic from "../Assets/living-in-france.jpeg";
import relocation from "../Assets/undraw_Navigation_re_wxx4.png";
import houseSearching from "../Assets/undraw_House_searching_re_stk8.png";
import savings from "../Assets/undraw_Savings_re_eq4w.png";
import propertyManagement from "../Assets/undraw_build_your__home_csh6.png";

export const HeroSection = () => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-17">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            {changeLanguage().heroSection.taglinePart1}
          </span>
          <br />
          <span className="block text-indigo-600 xl:inline">
            {changeLanguage().heroSection.taglinePart2}
          </span>
        </h1>
        <div>
          <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-0">
              <div className=" grid grid-cols-2 gap-0 md:grid-cols-6 lg:grid-cols-4">
                <div className="flex flex-col col-span-1 justify-center md:col-span-2 lg:col-span-1">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Relocation services
                  </p>
                  <img className="homepage-pic" src={relocation} alt="Tuple" />
                </div>
                <div className="flex-col col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Financial Advice
                  </p>
                  <img
                    className="homepage-pic"
                    src={savings}
                    alt="Transistor"
                  />
                </div>
                <div className="flex-col col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Property Management
                  </p>
                  <img
                    className="homepage-pic"
                    src={propertyManagement}
                    alt="Workcation"
                  />
                </div>
                <div className="flex-col col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Real Estate
                  </p>
                  <img
                    className="homepage-pic"
                    src={houseSearching}
                    alt="Workcation"
                  />
                </div>
              </div>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {changeLanguage().heroSection.hook1}
                <br />
                {changeLanguage().heroSection.hook2}
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
