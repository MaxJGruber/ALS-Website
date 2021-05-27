import { services } from "./Services";
import {
  UserGroupIcon,
  OfficeBuildingIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

export const navMain = {
  navLinks: {
    home: "Accueil",
    services: "Services",
    livingAndWorking: "Vivre & travailler en France",
    aboutUs: "Qui sommes-nous?",
    blog: "Blog",
    fees: "Tarifs",
    contact: "Contactez-nous",
  },
  services,
  aboutUsSubNav: [
    {
      name: "Why pay for professional advice?",
      description:
        "Relocating to France means dealing with the legendary French Administration. Let us deal with that!",
      href: "/why-pay-for-professional-advice",
      icon: QuestionMarkCircleIcon,
    },
    {
      name: "The Company",
      description:
        "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",
      href: "/about-us#company",
      icon: OfficeBuildingIcon,
    },
    {
      name: "The Team",
      description:
        "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",
      href: "/about-us#team",
      icon: UserGroupIcon,
    },
  ],
};
