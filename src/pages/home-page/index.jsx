import "./index.scss";
import { CategorySection } from "./section/category";
import { HeroSection } from "./section/hero";
import { PartnershipSection } from "./section/partnership";
import { ProfileSection } from "./section/profile";
export default function HomePage() {
  return (
    <div className="container-home">
      <HeroSection />
      <PartnershipSection />
      <ProfileSection />
      <CategorySection />
    </div>
  );
}
