import "./index.scss";
import SectionHero from "./section/hero";
import Partnership from "./section/partnership";
export default function HomePage() {
  return (
    <div className="container-home">
      <SectionHero />
      <Partnership />
    </div>
  );
}
