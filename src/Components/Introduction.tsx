// import gatePic from "../Assets/french-farm-house.jpeg";
// import housewallPic from "../Assets/buy-french-property.jpeg";
import { NavLink, Link } from "react-router-dom";
import changeLanguage from "../redux/languageContent";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import currentLocation from "../Assets/undraw_My_current_location_re_whmt.png";
import countrySide from "../Assets/undraw_Country_side_k696.png";

export const Introduction = () => {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-african-violet">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {changeLanguage().homePage.introduction.part1.title}
                </h2>
                <p className="prose mt-4 text-lg ">
                  {changeLanguage().homePage.introduction.part1.description1}
                </p>
                <p className="prose mt-4 text-lg ">
                  {changeLanguage().homePage.introduction.part1.description2}
                </p>
                <div className="mt-6">
                  <Link
                    to="/fees"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-200 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    {changeLanguage().homePage.introduction.part1.button}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-900">
                    {changeLanguage().homePage.introduction.part1.warningText}
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={countrySide}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-african-violet">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {changeLanguage().homePage.introduction.part2.title}
                </h2>
                <p className="mt-4 text-lg text-gray-900">
                  {changeLanguage().homePage.introduction.part2.description1}
                </p>
                <ul className="prose mt-4 text-lg text-gray-900">
                  {changeLanguage().homePage.introduction.part2.list.map(
                    (elem, i) => (
                      <li key={i}>{elem}</li>
                    )
                  )}
                </ul>
                <div className="mt-6">
                  <NavLink
                    to="/contact-us"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-200 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    {changeLanguage().homePage.introduction.part2.button}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={currentLocation}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
