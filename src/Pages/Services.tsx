import { NavMain } from "../Components/NavMain";
import ServicesImgLeft from "../Components/ServicesImgLeft";
import ServicesImgRight from "../Components/ServicesImgRight";
import Footer from "../Components/Footer";

export const Services = () => {
  return (
    <div>
      <NavMain />
      <ServicesImgLeft section="relocation" />
      <ServicesImgRight section="financial-advice" />
      <ServicesImgLeft section="property-management" />
      <ServicesImgRight section="real-estate" />
      <Footer />
    </div>
  );
};
