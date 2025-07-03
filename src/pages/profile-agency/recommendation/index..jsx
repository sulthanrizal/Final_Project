import { CardItemAgency } from "../../search-agency/card-agency/card-item";
import { dataAgency } from "../../../dummy/data-agency";
import "./index.scss";

const recommendedAgencies = dataAgency[0].agencies.slice(0, 3);

export function Recommendation() {
  return (
    <div className="recommendation-section">
      <h2 className="section-title">Rekomendasi Wedding Organizer Lainnya</h2>
      <div className="recommendation-grid">
        <CardItemAgency data={recommendedAgencies} />
      </div>
    </div>
  );
}
