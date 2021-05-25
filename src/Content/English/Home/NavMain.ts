import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

export const navMain = {
  navLinks: {
    home: "Home",
    services: "Services",
    livingAndWorking: "Living & Working in France",
    whyPay: "Why pay for professional advice?",
    blog: "Blog",
    fees: "Fees",
    contact: "Contact Us",
  },
  services: [
    {
      name: "Real Estate",
      description:
        "Do you dream about buying a property in France, whether it is a holiday home or a permanent move, but just don’t know where to start?",
      href: "/services#real-estate",
      icon: InboxIcon,
    },
    {
      name: "Property Management",
      description:
        "Many people rent out property, but not everyone is aware of the rules and regulations. We will advise you on how to register with the local town hall, how rental should be declared and what tax should be paid.",
      href: "/services#property-management",
      icon: AnnotationIcon,
    },
    {
      name: "Financial Advice",
      description:
        "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",
      href: "/services#financial-advice",
      icon: ChatAlt2Icon,
    },
    {
      name: "Relocation Services",
      description:
        "Relocating to France means dealing with the legendary French Administration. Let us deal with that!",
      href: "/services#relocation",
      icon: QuestionMarkCircleIcon,
    },
  ],
};
