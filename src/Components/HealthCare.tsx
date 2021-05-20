import changeLanguage from "../Redux/languageContent";

export default function HealthCare() {
  console.log(changeLanguage());
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              {changeLanguage().healthCare.title}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose text-left  prose-indigo prose-lg text-gray-500 lg:max-w-none">
                {changeLanguage().healthCare.intro.map((elem: string) => (
                  <p>{elem}</p>
                ))}
                <p>
                  <strong>
                    {changeLanguage().healthCare.introConclusionStart}
                  </strong>
                  &nbsp;
                  {changeLanguage().healthCare.introConclusionEnd}
                </p>
                <p>{changeLanguage().healthCare.dualSystemTitle}</p>
                <ul>
                  {changeLanguage().healthCare.dualSystems.map(
                    (elem: string) => (
                      <li>{elem}</li>
                    )
                  )}
                </ul>
                <p>{changeLanguage().healthCare.warnings}</p>
                <p>{changeLanguage().healthCare.PUMALaw}</p>
                <ul>
                  {changeLanguage().healthCare.conditions.map(
                    (elem: string) => (
                      <li>{elem}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-6 text-left prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <p>{changeLanguage().healthCare.differentDoorsTitle}</p>
                <ul>
                  <li>
                    <strong>{changeLanguage().healthCare.door1Intro}</strong>
                    &nbsp;
                    {changeLanguage().healthCare.door1Suite}
                  </li>
                  <li>
                    <strong>{changeLanguage().healthCare.door2Intro}</strong>
                    &nbsp;
                    {changeLanguage().healthCare.door2Suite}
                    <br />
                    {changeLanguage().healthCare.door2NB.map((elem: string) => (
                      <>
                        <br />
                        <i>{elem}</i>
                        <br />
                      </>
                    ))}
                  </li>
                  <li>
                    <strong>{changeLanguage().healthCare.door3Intro}</strong>
                    &nbsp;
                    {changeLanguage().healthCare.door3Suite}
                  </li>
                  <li>
                    <strong>{changeLanguage().healthCare.door4Intro}</strong>
                    &nbsp;
                    {changeLanguage().healthCare.door4Suite}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <p className=" text-xl text-center leading-6 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                F.A.Q.
              </p>
              <div className="prose text-left  prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <p>
                  {changeLanguage().healthCare.faq.map(
                    (elem: { question: string; answer: string[] }) => (
                      <>
                        <p className="font-bold">{elem.question}</p>
                        {elem.answer.map((elem: string) => (
                          <p>{elem}</p>
                        ))}
                      </>
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
