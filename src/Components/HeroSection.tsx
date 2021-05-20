import introPic from "../Assets/living-in-france.jpeg";

export const HeroSection = () => {
  return (
    <div className="relative">
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-purple-300"
      /> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-pale-cornflower-blue" />
      <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden"> */}
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={introPic}
              alt="People working on laptops"
            />
            {/* <div
                className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700"
                style={{ mixBlendMode: "multiply" }}
              /> */}
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-pastel-yellow">
                The key to your new life in France
              </span>
              <span className="block text-light-pastel-purple">
                Aquitaine Lifestyle Solutions
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-conditioner-yellow sm:max-w-3xl">
              Want To Relocate Or Invest In Property In South West France?
              <br />
              Have you already moved or invested and need advice and help?
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              {/* <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"> */}
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
              >
                Check out what we have to offer
              </a>
              {/* <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Live demo
                </a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      // </div>
    // </div>
  );
};
