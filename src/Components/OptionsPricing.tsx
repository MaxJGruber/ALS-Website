import { PlusCircleIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import pickingOptionsPic from "../Assets/undraw_prioritise_tgdh.png";

const features = [
  "Sworn translations of official documents ( birth certificates, wedding certificates etc.)",
  "Setting up of contracts with utility providers (water, electricity, gas, telephone, internet)",
  "Creation of a gite or bed & breakfast activity",
  "Creation of a micro-entreprise",
  "Advice and assistance  to set up a bank account",
  "Administrative assistance to obtain visas ou cartes de séjour (permits)",
  "For British nationals : the document « France Individual »",
  "Pension advice",
  "Advice and assistance for the creation of a company ( SCI, SARL, SAS )",
];

export default function OptionsPricing() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Anything else you need?
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Add-on options
            </p>
            <img src={pickingOptionsPic} alt="Man picking options" />
            {/* <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
              elementum blandit et.
            </p> */}
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                    <PlusCircleIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">
                      {feature}
                    </span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <PlusCircleIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">
                      {feature}
                    </span>
                  </li>
                )
              )}
            </ul>
            <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              {features.slice(5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li
                    key={feature}
                    className="py-4 flex md:border-t-0 md:py-0 md:pb-4"
                  >
                    <PlusCircleIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">
                      {feature}
                    </span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <PlusCircleIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">
                      {feature}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="py-12 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-gray-900">Any questions? </span>
              <span className="text-indigo-600">Found your joy?</span>
            </h1>
            {/* <p className="mt-5 text-xl text-gray-500">
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p> */}
          </div>
          <NavLink
            to="/contact-us"
            className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            Contact Us Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}
