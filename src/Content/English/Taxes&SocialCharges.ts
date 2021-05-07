import { personalIncomeTax } from "./TaxTypes/PersonalIncomeTax";
import { localPropertyTax } from "./TaxTypes/LocalPropertyTax";
import { residenceTax } from "./TaxTypes/ResidenceTax";
import { propertyOwnershipTax } from "./TaxTypes/PropertyOwnershipTax";
import { professionalPropTax } from "./TaxTypes/ProfessionalPropTax";

export const taxesAndSocialChargesEN = {
  title: "French Taxes And Social Charges",
  introduction: [
    `This is one of the major points of confusion for people when they invest in property or move to France.`,
    `There are many types of taxes in France that have to be declared and paid and these are not to be confused with social charges which are separate.`,
    `The French system of taxation is known for its complexity, high marginal rates and high administrative costs however with good tax planning the French system offers a lot of opportunities to optimize your tax burden and in many cases, the French tax liability is even inferior to your actual tax liabilities.`,
    `There are so many different basis of assessment, and such a large number of taxes that it is no wonder people find it all confusing and then there exists so many exceptions to the general rules that you really need to know your way around the system to avoid making costly mistakes.`,
  ],
  warning: [
    `We strongly advise you to ask our professional advice on all matters concerning taxation`,
    `Please contact us for more information on the payment of these taxes and social charges as well as questions concerning wealth tax, inheritance tax, and capital gains tax.`,
  ],
  taxes: `Not all taxes are covered here but these are the most common.`,
  personalIncomeTax: personalIncomeTax,
  localPropertyTax: localPropertyTax,
  residenceTax: residenceTax,
  propertyOwnershipTax: propertyOwnershipTax,
  professionalPropTax: professionalPropTax,
};
