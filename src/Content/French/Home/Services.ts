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
    name: "Services de réinstallation",
    description:
      "S'installer en France, c'est faire affaire avec la fameuse administration française. Laissez-nous faire avec cela!",
    href: "/services#relocation",
    icon: KeyIcon,
    imageUrl: photo1,
  },
  {
    name: "Conseil financier",
    description:
      "Lors d'un déménagement ou d'un investissement en France, vous devrez en comprendre les implications d'un point de vue financier et fiscal.",
    href: "/services#financial-advice",
    icon: ScaleIcon,
    imageUrl: photo2,
  },
  {
    name: "Gestion de propriété",
    description:
      "Beaucoup de gens louent une propriété, mais tout le monde n'est pas au courant des règles et règlements. Nous vous conseillerons sur la manière de vous inscrire auprès de la mairie, sur la manière de déclarer la location et sur la taxe à payer.",
    href: "/services#property-management",
    icon: LibraryIcon,
    imageUrl: photo3,
  },
  {
    name: "Immobilier",
    description:
      "Vous rêvez d'acheter une propriété en France, que ce soit une maison de vacances ou un déménagement permanent, mais vous ne savez pas par où commencer?",
    href: "/services#real-estate",
    icon: HomeIcon,
    imageUrl: photo4,
  },
];
