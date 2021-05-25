import { useState, useEffect } from "react";
import changeLanguage from "../redux/languageContent";

export default function ServicesImgRight(props: { section: string }) {
  const [content, setContent] = useState<Record<string, any>>({});

  useEffect(() => {
    props.section === "real-estate"
      ? setContent(changeLanguage().services.realEstate)
      : setContent(changeLanguage().services.financialAdvice);
  }, [props]);

  return (
    <div id={props.section} className="py-16 bg-gray-50 overflow-hidden">
      {content.hasOwnProperty("title") && (
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {content.title}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What makes us different
            </p>
          </div>
          <div className="relative z-10 text-left text-base max-w-prose mx-auto lg:max-w-6xl lg:mx-0 ">
            {content.text.map((elem: string) => (
              <>
                <p className="text-lg text-gray-500"> {elem}</p>
                <br />
              </>
            ))}
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                <p className="text-lg">{content.listTitle}</p>
                <ul className="text-left">
                  {content.list.map((listElem: string) => (
                    <li>{listElem}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <img
                  src={content.image}
                  alt={content.imageDescription}
                  className="w-full"
                />
              </blockquote>
            </div>
          </div>
          <div className="prose prose-indigo text-center text-gray-500 mx-auto lg:max-w-none">
            <h3>We’re here to help</h3>
            <p>
              {content.text2.map((elem: string) => (
                <p>{elem}</p>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* // {props.section === "property-management" ? (
//   <>
//     <h3>{content.conciergeServicesTitle}</h3>
//     <ul>
//       {content.conciergeServicesList.map((elem: string) => (
//         <li>{elem}</li>
//       ))}
//     </ul>
//   </>
// ) : (
//   ""
// )} */
}
