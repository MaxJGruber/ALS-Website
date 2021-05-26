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
    name: "Umzugsdienste",
    description:
      "Ein Umzug nach Frankreich bedeutet, sich mit der legendären französischen Regierung zu befassen. Lasst uns damit umgehen!",
    href: "/services#relocation",
    icon: KeyIcon,
    imageUrl: photo1,
  },
  {
    name: "Finanzieller Rat",
    description:
      "Wenn Sie in Frankreich umziehen oder investieren, müssen Sie die finanziellen und steuerlichen Auswirkungen verstehen.",
    href: "/services#financial-advice",
    icon: ScaleIcon,
    imageUrl: photo2,
  },
  {
    name: "Immobilienverwaltung",
    description:
      "Viele Leute vermieten Immobilien, aber nicht jeder kennt die Regeln und Vorschriften. Wir beraten Sie, wie Sie sich beim örtlichen Rathaus anmelden, wie die Miete deklariert und welche Steuern gezahlt werden sollen.",
    href: "/services#property-management",
    icon: LibraryIcon,
    imageUrl: photo3,
  },
  {
    name: "Immobilien",
    description:
      "Träumen Sie davon, eine Immobilie in Frankreich zu kaufen, sei es ein Ferienhaus oder ein dauerhafter Umzug, wissen aber nicht, wo Sie anfangen sollen?",
    href: "/services#real-estate",
    icon: HomeIcon,
    imageUrl: photo4,
  },
];
