import { services } from "./Home/Services";

export const footer = {
  title1: "Services",
  solutions: services,
  title2: "Support",
  support: [
    { name: "Tarifs", href: "/fees" },
    { name: "Contactez-nous", href: "/contact-us" },
    // { name: "Guides", href: "#" },
  ],
  title3: "L'entreprise",
  company: [
    { name: "Qui sommes nous?", href: "/team" },
    { name: "Blog", href: "/blog" },
    // { name: "Partners", href: "#" },
  ],
  title4: "Mentions Légales",
  legal: [
    { name: "Policy", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
  switch: "Choix de langue",
  button: "Confirmer",
  rights: "Tous droits résérvés.",
};
