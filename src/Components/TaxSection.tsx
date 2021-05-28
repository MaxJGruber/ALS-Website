import { useEffect, useState } from "react";
import changeLanguage from "../redux/languageContent";

export default function TaxSection(props: { tax: string }) {
  const [selectedTax, setSelectedTax] = useState<Record<string, any>>({});

  useEffect(() => {
    const content = changeLanguage().livingAndWorking.taxesAndSocialCharges;
    switch (props.tax) {
      case "personal tax":
        setSelectedTax(content.personalIncomeTax);
        break;
      case "local prop tax":
        setSelectedTax(content.localPropertyTax);
        break;
      case "residence tax":
        setSelectedTax(content.residenceTax);
        break;
      case "prop own tax":
        setSelectedTax(content.propertyOwnershipTax);
        break;
      case "prof social tax":
        setSelectedTax(content.professionalTaxAndSocialCharge);
        break;
      case "prof prop tax":
        setSelectedTax(content.professionalPropTax);
        break;
    }
  }, [props.tax]);

  return (
    <>
      {selectedTax.hasOwnProperty("name") && (
        <div className="mt-7 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-5 lg:max-w-none">
            <div>
              <p className=" text-xl leading-6 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                {selectedTax.name}
              </p>

              {selectedTax.text.map((elem: string, i: number) => (
                <p key={i} className="mt-6 text-lg font-medium text-gray-700">
                  {elem}
                </p>
              ))}
              {selectedTax.liableIf && (
                <>
                  <p className="mt-6 text-lg font-medium text-gray-700">
                    {selectedTax.liableIf}
                  </p>
                  <ul>
                    {selectedTax.cases &&
                      selectedTax.cases.map((elem: string, i: number) => (
                        <p
                          key={i}
                          className="mt-6 text-lg font-bold text-gray-700"
                        >
                          - {elem}
                        </p>
                      ))}
                  </ul>
                </>
              )}
              {selectedTax.text2 &&
                selectedTax.text2.map((elem: string, i: number) => (
                  <p key={i} className="mt-6 text-lg font-medium text-gray-700">
                    {elem}
                  </p>
                ))}
              {selectedTax.exampleText && (
                <>
                  <p className="mt-6 text-lg font-medium text-gray-700">
                    {selectedTax.exampleText}
                  </p>
                  <p className="mt-6 text-lg font-medium text-gray-700">
                    {selectedTax.example}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
