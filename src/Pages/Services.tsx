import { NavMain } from "../Components/NavMain";
import SectionTextWithPic from "../Components/SectionTextWithPic";
import ServicesImgRight from "../Components/ServicesImgRight";
import Footer from "../Components/Footer";

export const Services = () => {
  return (
    <div>
      <NavMain />
      <SectionTextWithPic section="relocation" />
      <ServicesImgRight section="financial-advice" />
      <SectionTextWithPic section="property-management" />
      <ServicesImgRight section="real-estate" />
      <Footer />
    </div>
  );
};
