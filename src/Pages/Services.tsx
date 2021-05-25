import { NavMain } from "../Components/NavMain";
import ServicesImgLeft from "../Components/ServicesImgLeft";
import ServicesImgRight from "../Components/ServicesImgRight";
import Footer from "../Components/Footer";

export const Services = () => {
  return (
    <div>
      <NavMain />
      <ServicesImgRight section="real-estate" />
      <ServicesImgLeft section="property-management" />
      <ServicesImgRight section="financial-advice" />
      <ServicesImgLeft section="relocation" />
      <Footer />
    </div>
  );
};
