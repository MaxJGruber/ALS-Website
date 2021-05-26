import {
  HomeIcon,
  KeyIcon,
  LibraryIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import photo1 from "../../../Assets/undraw_Navigation_re_wxx4.png";
import photo2 from "../../../Assets/undraw_Savings_re_eq4w.png";
import photo3 from "../../../Assets/undraw_build_your__home_csh6.png";
import photo4 from "../../../Assets/undraw_House_searching_re_stk8.png";

export const services = [
  {
    name: "Relocation Services",
    description:
      "Relocating to France means dealing with the legendary French Administration. Let us deal with that!",
    href: "/services#relocation",
    icon: KeyIcon,
    imageUrl: photo1,
  },
  {
    name: "Financial Advice",
    description:
      "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",
    href: "/services#financial-advice",
    icon: ScaleIcon,
    imageUrl: photo2,
  },
  {
    name: "Property Management",
    description:
      "Many people rent out property, but not everyone is aware of the rules and regulations. We will advise you on how to register with the local town hall, how rental should be declared and what tax should be paid.",
    href: "/services#property-management",
    icon: LibraryIcon,
    imageUrl: photo3,
  },
  {
    name: "Real Estate",
    description:
      "Do you dream about buying a property in France, whether it is a holiday home or a permanent move, but just don’t know where to start?",
    href: "/services#real-estate",
    icon: HomeIcon,
    imageUrl: photo4,
  },
];
