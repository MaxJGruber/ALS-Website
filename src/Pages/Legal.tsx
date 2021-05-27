import { NavMain } from "../Components/NavMain";
import Footer from "../Components/Footer";
import changeLanguage from "../redux/languageContent";
import { NavLink } from "react-router-dom";

import { PhoneIcon, SupportIcon } from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Privacy & Cookie Policy",
    href: "https://tools.google.com/dlpage/gaoptout",
    description: changeLanguage().cookiePolicy.text,
    icon: PhoneIcon,
  },
  {
    name: "Terms & Conditions",
    href: "#",
    description: [
      `These terms and conditions, as may be amended from time to time, apply to all our services directly or indirectly (through distributors) made available online, through any mobile device, by email or by telephone.`,
      `By accessing, browsing and using our (mobile) website or any of our applications through whatever platform and/or by signing a contract, you acknowledge and agree to have read, understood and agreed to the terms and conditions set out in the links below.`,
    ],
    icon: SupportIcon,
  },
];

export const Legal = () => {
  return (
    <div>
      <NavMain />

      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Legal
            </h1>
            <p className="mt-6 max-w-6xl text-xl text-gray-300">
              First things first – your privacy is important to us. That might
              be the kind of thing all these notices say, but we mean it. You
              place your trust in us by using our services and we value that
              trust. We act in our customers’ best interest and we are
              transparent about the processing of your personal data.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5  bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>

                  {link.description.map((elem: string, i) => (
                    <p className="mt-4 text-base text-gray-500">{elem}</p>
                  ))}
                  {/* {link.name === "Terms & Conditions" && (
                    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
                      <a
                        href="../../public/Terms&Conditions/GTC_en_v19.3.pdf"
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Button text
                      </a>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Button text
                      </button>
                    </div>
                  )} */}
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={link.href}
                    className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                  >
                    Click here to Analytics opt-out
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
