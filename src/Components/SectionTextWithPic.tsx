import changeLanguage from "../redux/languageContent";
import { useState, useEffect } from "react";
import propertyManagementPic from "../Assets/property-management-services.jpeg";
import relocationServices from "../Assets/ALS1.jpeg";

export default function SectionTextWithPic(props: { section: string }) {
  const [content, setContent] = useState<Record<string, any>>({});

  useEffect(() => {
    props.section === "relocation"
      ? setContent(changeLanguage().services.relocationServices)
      : setContent(changeLanguage().services.propertyManagement);
  }, [props]);

  return (
    <div className="relative bg-white">
      {content.hasOwnProperty("title") && (
        <>
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={
                  props.section === "relocation"
                    ? relocationServices
                    : propertyManagementPic
                }
                alt=""
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                  {content.title}
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Let's get you settled
                </h3>
                <div className="mt-6 prose prose-indigo text-gray-500 space-y-6">
                  {content.text.map((elem: string, i: number) => (
                    <p key={i} className="text-lg">
                      {elem}
                    </p>
                  ))}
                  <p className="text-base leading-7">{content.listTitle}</p>
                  <ul className="text-left">
                    {content.list.map((elem: string, i: number) => (
                      <li key={i} className="text-lg">
                        {elem}
                      </li>
                    ))}
                  </ul>
                  {props.section === "property-management" ? (
                    <>
                      <p className="text-base leading-7">
                        {content.conciergeServicesTitle}
                      </p>
                      <ul>
                        {content.conciergeServicesList.map(
                          (elem: string, i: number) => (
                            <li key={i} className="text-left text-lg">
                              {elem}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3>We’re here to help</h3>
                      {content.text2.map((elem: string, i: number) => (
                        <p key={i} className="text-lg">
                          {elem}
                        </p>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
