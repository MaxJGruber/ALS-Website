import { CheckIcon, XIcon } from "@heroicons/react/solid";

const plans = [
  {
    title: "Starter",
    featured: false,
    description: "All your essential business finances, taken care of.",
    price: 1195,
    pricePounds: 1029,
    mainFeatures: [
      { id: 1, value: "Integration into the French health system" },
      {
        id: 2,
        value: "Rough estimate of future tax burdens and inheritance tax",
      },
      { id: 3, value: "Help with your first French income tax declaration" },
    ],
  },
  {
    title: "Standard Plus",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: 1695,
    pricePounds: 1459,
    mainFeatures: [
      { id: 1, value: "Integration into the French health system" },
      {
        id: 2,
        value: "Advances estimate of future tax burdens and inheritance tax",
      },
      { id: 3, value: "Financial study " },
      { id: 4, value: "Setting up of contracts with utility providers" },
      { id: 5, value: "General administrative help - 10 Hours" },
      {
        id: 6,
        value:
          "Creation of a gite or bed & breakfast activity or self-employed status",
      },
    ],
  },
  {
    title: "Premium",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    price: 2495,
    pricePounds: 2148,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
    ],
  },
];
const features = [
  {
    title: "Integration into the French health system",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Rough estimate of future tax burdens and inheritance tax",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Help with your first French income tax declaration",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title:
      "Help and information about taxe d’habitation and taxe foncière (local resident tax and property tax)",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Registration of your car in France",
    tiers: [
      { title: "starter", value: "1 car" },
      { title: "popular", featured: true, value: "1 car" },
      { title: "intermediate", value: "1 car" },
    ],
  },
  {
    title: "Exchange of a foreign driver’s license",
    tiers: [
      { title: "starter", value: "2 licenses" },
      { title: "popular", featured: true, value: "2 licenses" },
      { title: "intermediate", value: "2 licenses" },
    ],
  },
  {
    title:
      "Information & quotes for general insurances ( house, car, top up health insurance)",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "General administrative help (e-mails, letters, appointments etc)",
    tiers: [
      { title: "starter", value: "2 hours" },
      { title: "popular", featured: true, value: "5 hours" },
      { title: "intermediate", value: "10 hours" },
    ],
  },
  {
    title:
      "Creation of a gite or bed & breakfast activity or self-employed status  (micro-entrepreneur)",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title:
      "Financial study – Global financial study with a targeted focus on management and transfer of assets, your tax situation and your financial and property investments.",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: false },
      { title: "intermediate", value: true },
    ],
  },
];
const perks = [
  {
    title: "24/7 customer support",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Instant notifications",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Budgeting tools",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Digital receipts",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Pots to separate money",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Free bank transfers",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
  {
    title: "Business debit card",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  return (
    <div className="">
      <main>
        {/* Pricing section */}
        <div>
          <div className="relative">
            {/* Overlapping background */}
            <div
              aria-hidden="true"
              className="hidden absolute w-full h-6 bottom-0 lg:block"
            />

            <div className="relative max-w-2xl mx-auto pt-10 px-4 text-center sm:pt-15 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl mb-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                <span className="block lg:inline">Simple pricing,</span>
                <span className="block lg:inline">&nbsp;simple life.</span>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                We offer packages and à la carte services. Our services are
                tailor-made to our customers’ needs.
              </p>
              <p className="mt-4 text-xl text-gray-500">
                As each case is different a detailed quote will be given once we
                have had the opportunity to understand how we can help you,
                however please find below an example of some of our packages.
              </p>
              <p className="mt-4 text-xl text-gray-500">
                Payments can be made in 1 or 3 installments or by monthly direct
                debit.
              </p>
            </div>
            {/* Cards */}
            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg rounded-bl-lg  rounded-br-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured
                        ? "bg-white ring-2 ring-indigo-700 shadow-md"
                        : "bg-indigo-700 lg:bg-transparent",
                      "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
                    )}
                  >
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? "text-indigo-600" : "text-white",
                          "text-sm font-semibold uppercase tracking-wide"
                        )}
                      >
                        {plan.title}
                      </h3>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex items-center">
                          <p
                            className={classNames(
                              plan.featured ? "text-indigo-600" : "text-white",
                              "text-4xl font-extrabold tracking-tight"
                            )}
                          >
                            {plan.price}€
                          </p>
                          <div className="ml-4">
                            <p
                              className={classNames(
                                plan.featured ? "text-gray-700" : "text-white",
                                "text-sm"
                              )}
                            >
                              EUR / per year
                            </p>
                            <p
                              className={classNames(
                                plan.featured
                                  ? "text-gray-500"
                                  : "text-indigo-200",
                                "text-sm"
                              )}
                            >
                              In GBP: ~ £{plan.pricePounds}
                            </p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className={classNames(
                            plan.featured
                              ? "bg-indigo-600 text-white hover:bg-indigo-700"
                              : "bg-white text-indigo-600 hover:bg-indigo-50",
                            "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                          )}
                        >
                          Buy {plan.title}
                        </a>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      className={classNames(
                        plan.featured
                          ? "border-gray-200 divide-gray-200"
                          : "border-indigo-500 divide-indigo-500 divide-opacity-75",
                        "mt-7 border-t divide-y lg:border-t-0"
                      )}
                    >
                      {plan.mainFeatures.map((mainFeature) => (
                        <li
                          key={mainFeature.id}
                          className="py-3 flex items-center"
                        >
                          <CheckIcon
                            className={classNames(
                              plan.featured
                                ? "text-indigo-500"
                                : "text-indigo-200",
                              "w-5 h-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              plan.featured ? "text-gray-600" : "text-white",
                              "ml-4 text-sm font-medium"
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature comparison */}
          <section
            aria-labelledby="mobileComparisonHeading"
            className="lg:hidden"
          >
            <h2 id="mobileComparisonHeading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
              {plans.map((plan) => (
                <div key={plan.title} className="border-t border-gray-200">
                  <div
                    className={classNames(
                      plan.featured
                        ? "border-indigo-600"
                        : "border-transparent",
                      "-mt-px pt-6 border-t-2 sm:w-1/2"
                    )}
                  >
                    <h3
                      className={classNames(
                        plan.featured ? "text-indigo-600" : "text-gray-900",
                        "text-sm font-bold"
                      )}
                    >
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {plan.description}
                    </p>
                  </div>
                  <h4 className="mt-10 text-sm font-bold text-gray-900">
                    Catered for business
                  </h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured ? "shadow-md" : "shadow",
                          "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured
                          ? "ring-2 ring-indigo-600 shadow-md"
                          : "ring-1 ring-black ring-opacity-5 shadow",
                        "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {features.map((feature) => (
                          <div
                            key={feature.title}
                            className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="pr-4 text-sm font-medium text-gray-600">
                              {feature.title}
                            </dt>
                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                              {typeof feature.tiers[0].value === "string" ? (
                                <span
                                  className={classNames(
                                    feature.tiers[1].featured
                                      ? "text-indigo-600"
                                      : "text-gray-900",
                                    "text-sm font-medium"
                                  )}
                                >
                                  {feature.tiers[2].value}
                                </span>
                              ) : (
                                <>
                                  {feature.tiers[1].value === true ? (
                                    <CheckIcon
                                      className="mx-auto h-5 w-5 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <XIcon
                                      className="mx-auto h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {feature.tiers[2].value === true
                                      ? "Yes"
                                      : "No"}
                                  </span>
                                </>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured
                            ? "ring-2 ring-indigo-600"
                            : "ring-1 ring-black ring-opacity-5",
                          "absolute right-0 w-1/2 h-full rounded-lg"
                        )}
                      />
                    </div>
                  </div>

                  <h4 className="mt-10 text-sm font-bold text-gray-900">
                    Other perks
                  </h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured ? "shadow-md" : "shadow",
                          "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured
                          ? "ring-2 ring-indigo-600 shadow-md"
                          : "ring-1 ring-black ring-opacity-5 shadow",
                        "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {perks.map((perk) => (
                          <div
                            key={perk.title}
                            className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                              {perk.title}
                            </dt>
                            <dd className="text-center sm:px-4">
                              {perk.tiers[0].value === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-indigo-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {perk.tiers[0].value === true ? "Yes" : "No"}
                              </span>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured
                            ? "ring-2 ring-indigo-600"
                            : "ring-1 ring-black ring-opacity-5",
                          "absolute right-0 w-1/2 h-full rounded-lg"
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="comparisonHeading"
            className="hidden lg:block"
          >
            <h2 id="comparisonHeading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-24 max-w-7xl mx-auto px-8">
              <div className="w-full border-t border-gray-200 flex items-stretch">
                <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                  <h3 className="mt-auto text-sm font-bold text-gray-900">
                    Catered for business
                  </h3>
                </div>
                {plans.map((plan, i) => (
                  <div
                    key={plan.title}
                    aria-hidden="true"
                    className={classNames(
                      i === plans.length - 1 ? "" : "pr-4",
                      "-mt-px pl-4 w-1/4"
                    )}
                  >
                    <div
                      className={classNames(
                        plan.featured
                          ? "border-indigo-600"
                          : "border-transparent",
                        "py-6 border-t-2"
                      )}
                    >
                      <p
                        className={classNames(
                          plan.featured ? "text-indigo-600" : "text-gray-900",
                          "text-sm font-bold"
                        )}
                      >
                        {plan.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                {/* Fake card backgrounds */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">
                    Business feature comparison
                  </caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {features.map((feature, featureIndex) => (
                      <tr key={feature.title}>
                        <th
                          scope="row"
                          className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                        >
                          {feature.title}
                        </th>
                        {feature.tiers.map(
                          (tier: Record<string, any>, i: number) => (
                            <td
                              key={tier.title}
                              className={classNames(
                                i === feature.tiers.length - 1
                                  ? "pl-4"
                                  : "px-4",
                                "relative w-1/4 py-0 text-center"
                              )}
                            >
                              <span className="relative w-full h-full py-3">
                                {typeof tier.value === "string" ? (
                                  <span
                                    className={classNames(
                                      tier.featured
                                        ? "text-indigo-600"
                                        : "text-gray-900",
                                      "text-sm font-medium"
                                    )}
                                  >
                                    {tier.value}
                                  </span>
                                ) : (
                                  <>
                                    {tier.value === true ? (
                                      <CheckIcon
                                        className="mx-auto h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <XIcon
                                        className="mx-auto h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    <span className="sr-only">
                                      {tier.value === true ? "Yes" : "No"}
                                    </span>
                                  </>
                                )}
                              </span>
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>

              <h3 className="mt-10 text-sm font-bold text-gray-900">
                Other perks
              </h3>

              <div className="mt-6 relative">
                {/* Fake card backgrounds */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Perk comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Perk</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {perks.map((perk) => (
                      <tr key={perk.title}>
                        <th
                          scope="row"
                          className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                        >
                          {perk.title}
                        </th>
                        {perk.tiers.map((tier, i) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              i === perk.tiers.length - 1 ? "pl-4" : "px-4",
                              "relative w-1/4 py-0 text-center"
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {tier.value === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-indigo-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {tier.value === true ? "Yes" : "No"}
                              </span>
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
