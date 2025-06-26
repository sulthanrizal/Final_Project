import "./index.scss";
import BackgroundInformation from "../../../../assets/bg-information.png";
import { CardItemInformation } from "./card-item";
export function InformationSection() {
  return (
    <section className="information-section">
      <img src={BackgroundInformation} />
      <div className="content">
        <h1>Mencari Agensi dengan Tepat</h1>
        <CardItemInformation />
      </div>
    </section>
  );
}
