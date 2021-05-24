import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

export const navMain = {
  navLinks: {
    home: "Accueil",
    services: "Services",
    livingAndWorking: "Vivre & travailler en France",
    whyPay: "Pourquoi payer pour des conseils professionels?",
    blog: "Blog",
    fees: "Tarifs",
    contact: "Contactez-nous",
  },
  services: [
    {
      name: "Immobilier",
      description:
        "Do you dream about buying a property in France, whether it is a holiday home or a permanent move, but just don’t know where to start?",
      href: "#",
      icon: InboxIcon,
    },
    {
      name: "Gestion de propriété",
      description:
        "Many people rent out property, but not everyone is aware of the rules and regulations. We will advise you on how to register with the local town hall, how rental should be declared and what tax should be paid.",
      icon: AnnotationIcon,
    },
    {
      name: "Conseil financier",
      description:
        "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",
      href: "#",
      icon: ChatAlt2Icon,
    },
    {
      name: "Services de réinstallation",
      description:
        "Relocating to France means dealing with the legendary French Administration. Let us deal with that!",
      href: "#",
      icon: QuestionMarkCircleIcon,
    },
  ],
};
