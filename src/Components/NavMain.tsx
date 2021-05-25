import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import changeLanguage from "../redux/languageContent";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../Assets/ALS_logo.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const callsToAction = [
  { name: "Watch Demo", href: "#" },
  { name: "View All Products", href: "#" },
  { name: "Contact Sales", href: "#" },
];
export const NavMain = () => {
  return (
    <header>
      <Popover className="relative">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center max-w-9xl mx-auto px-0 py-6 sm:px-6 md:justify-start md:space-x-10 ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <img className="h-8 w-auto sm:h-12" src={logo} alt="ALS logo" />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <NavLink
                  to="/"
                  className="text-base font-medium text-gray-900 hover:text-pastel-yellow"
                >
                  {changeLanguage().navMain.navLinks.home}
                </NavLink>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-900 ",
                          "group rounded-md inline-flex items-center text-base font-medium hover:text-pastel-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>
                          {changeLanguage().navMain.navLinks.services}
                        </span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-900",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {changeLanguage().navMain.services.map(
                                (item: Record<string, any>) => (
                                  <NavHashLink
                                    key={item.name}
                                    smooth
                                    to={item.href}
                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p> */}
                                    </div>
                                  </NavHashLink>
                                )
                              )}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <NavLink
                  to="/living-working-in-france"
                  className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                >
                  {changeLanguage().navMain.navLinks.livingAndWorking}
                </NavLink>
                <NavLink
                  to="/why-pay-for-professional-advice"
                  className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                >
                  {changeLanguage().navMain.navLinks.whyPay}
                </NavLink>
                <NavLink
                  to="/blog"
                  className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                >
                  {changeLanguage().navMain.navLinks.blog}
                </NavLink>
                <NavLink
                  to="/fees"
                  className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                >
                  {changeLanguage().navMain.navLinks.fees}
                </NavLink>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <span className="inline-flex rounded-md shadow">
                  <NavLink
                    to="/contact-us"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                  >
                    {changeLanguage().navMain.navLinks.contact}
                  </NavLink>
                </span>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src={logo} alt="ALS Logo" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        {changeLanguage().navMain.services.map((item) => (
                          <NavHashLink
                            key={item.name}
                            smooth
                            to={item.href}
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                              <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">
                              {item.name}
                            </div>
                          </NavHashLink>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <NavLink
                        to="/living-working-in-france"
                        className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                      >
                        {changeLanguage().navMain.navLinks.livingAndWorking}
                      </NavLink>
                      <NavLink
                        to="/why-pay-for-professional-advice"
                        className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                      >
                        {changeLanguage().navMain.navLinks.whyPay}
                      </NavLink>
                      <NavLink
                        to="/blog"
                        className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                      >
                        {changeLanguage().navMain.navLinks.blog}
                      </NavLink>
                      <NavLink
                        to="/fees"
                        className="text-base font-medium text-gray-900  hover:text-pastel-yellow"
                      >
                        {changeLanguage().navMain.navLinks.fees}
                      </NavLink>
                    </div>
                    <div className="mt-6">
                      <NavLink
                        to="/contact-us"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      >
                        {changeLanguage().navMain.navLinks.contact}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
};
