import "./index.scss";
import { CategorySection } from "./section/category";
import { FormConsultation } from "./section/form-consulatation";
import { HeroSection } from "./section/hero";
import { InformationSection } from "./section/information";
import { PartnershipSection } from "./section/partnership";
import { ProfileSection } from "./section/profile";
export default function HomePage() {
  return (
    <div className="container-home">
      <HeroSection />
      <PartnershipSection />
      <ProfileSection />
      <CategorySection />
      <InformationSection />
      <FormConsultation />
    </div>
  );
}
