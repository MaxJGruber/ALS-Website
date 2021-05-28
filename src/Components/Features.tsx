import changeLanguage from "../redux/languageContent";
import { NavHashLink } from "react-router-hash-link";
import Slide from "react-reveal/Slide";

interface serviceObject {
  name: string;
  description: string;
  href: string;
  icon: Record<string, any>;
  imageUrl: string;
}

export default function Features() {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <Slide bottom>
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {changeLanguage().homePage.features.title}
            </h2>
            <p className="mt-7 text-lg">
              At Aquitaine Lifestyle Solutions, we cover all the necessary
              duties to help you live hassle-free and joyously in France.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {changeLanguage().homePage.features.services.map(
              (service: serviceObject) => (
                <div
                  key={service.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={service.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <span className="text-xl font-semibold text-gray-900">
                          {service.name}
                        </span>
                      </p>
                      <NavHashLink
                        smooth
                        to={service.href}
                        className="block mt-2"
                      >
                        <p className="mt-3 text-base text-gray-500">
                          {service.description}
                        </p>
                      </NavHashLink>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Slide>
    </div>
  );
}
