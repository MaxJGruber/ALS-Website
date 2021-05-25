import changeLanguage from "../redux/languageContent";
import { NavHashLink } from "react-router-hash-link";

export default function Products() {
  return (
    <div className="relative bg-logo-blue pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-logo-blue h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {changeLanguage().features.title}
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {changeLanguage().features.services.map(
            (service: Record<string, any>) => (
              <div
                key={service.title}
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
                      <NavHashLink
                        smooth
                        to={service.href}
                        className="hover:underline"
                      >
                        {service.title}
                      </NavHashLink>
                    </p>
                    <NavHashLink
                      smooth
                      to={service.href}
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {service.description}
                      </p>
                    </NavHashLink>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-3"></div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
