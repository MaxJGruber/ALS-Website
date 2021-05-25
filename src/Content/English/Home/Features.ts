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
  title: "A Full Range Of Services Under One Roof",
  services: [
    {
      title: "Real Estate",
      description:
        "Do you dream about buying a property in France, whether it is a holiday home or a permanent move, but just don’t know where to start?",
      href: "/services#real-estate",
      icon: GlobeAltIcon,
      imageUrl: photo1,
    },
    {
      title: "Property Management",
      description:
        "Many people rent out property, but not everyone is aware of the rules and regulations. We will advise you on how to register with the local town hall, how rental should be declared and what tax should be paid.",
      icon: ScaleIcon,
      href: "/services#property-management",
      imageUrl: photo2,
    },
    {
      title: "Financial Advice",
      description:
        "When moving or investing in France you will need to understand the implications from a financial and fiscal standpoint.",
      icon: LightningBoltIcon,
      href: "/services#financial-advice",
      imageUrl: photo3,
    },
    {
      title: "Relocation Services",
      description:
        "Relocating to France means dealing with the legendary French Administration. Let us deal with that!",
      href: "/services#relocation",
      icon: MailIcon,
      imageUrl: photo4,
    },
  ],
};
