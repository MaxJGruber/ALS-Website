import photo1 from "../../../Assets/real-estate.jpeg";
import photo2 from "../../../Assets/ALS2.jpeg";
import photo3 from "../../../Assets/ALS1.jpeg";
import photo4 from "../../../Assets/property-management-services.jpeg";

import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export const features = {
  title: "Une gamme complète de services sous un même toit",
  services: [
    {
      title: "Immobilier",
      description:
        "Vous rêvez d'acheter une propriété en France, que ce soit une maison de vacances ou un déménagement permanent, mais vous ne savez pas par où commencer?",
      icon: GlobeAltIcon,
      imageUrl: photo1,
    },
    {
      title: "Gestion de propriété",
      description:
        "Beaucoup de gens louent une propriété, mais tout le monde n'est pas au courant des règles et règlements. Nous vous conseillerons sur la manière de vous inscrire auprès de la mairie, sur la manière de déclarer la location et sur la taxe à payer.",
      icon: ScaleIcon,
      imageUrl: photo2,
    },
    {
      title: "Conseil financier",
      description:
        "Lors d'un déménagement ou d'un investissement en France, vous devrez en comprendre les implications d'un point de vue financier et fiscal.",
      icon: LightningBoltIcon,
      imageUrl: photo3,

    },
    {
      title: "Services de réinstallation",
      description:
        "S'installer en France, c'est faire affaire avec la fameuse administration française. Laissez-nous faire avec cela!",
      icon: MailIcon,
      imageUrl: photo4,
    },
  ],
};
