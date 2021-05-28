import { NavLink } from "react-router-dom";
import changeLanguage from "../redux/languageContent";
// import introPic from "../Assets/living-in-france.jpeg";
// import relocation from "../Assets/undraw_Navigation_re_wxx4.png";
// import houseSearching from "../Assets/undraw_House_searching_re_stk8.png";
// import savings from "../Assets/undraw_Savings_re_eq4w.png";
// import propertyManagement from "../Assets/undraw_build_your__home_csh6.png";

export const HeroSection = () => {
  return (
    <div>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-8xl my-auto mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1617191880357-424a60868f70?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxXajFuc0FKUFlxY3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Keys on a wooden table"
              />
              <div className="absolute inset-0 bg-purple-500 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 xl:py-40 lg:px-8">
              <h1 className="text-center pb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  {changeLanguage().homePage.heroSection.taglinePart1}
                </span>
                <span className="block text-indigo-200">
                  {changeLanguage().homePage.heroSection.taglinePart2}
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-50 sm:max-w-3xl">
                {changeLanguage().homePage.heroSection.hook1}
                <br />
                <br />
                {changeLanguage().homePage.heroSection.hook2}
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <NavLink
                    to="/services"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-200 bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    {changeLanguage().homePage.heroSection.button}
                  </NavLink>
                  <NavLink
                    to="/why-pay-for-professional-advice"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-200 bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    {changeLanguage().homePage.heroSection.button2}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
