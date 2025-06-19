import Ellipse from "../../../../assets/ellipse5.png";
import "./index.scss";

function Partnership() {
  return (
    <section className="section-partnership">
      <div className="title-partnership">
        <img src={Ellipse} className="ellipse5" />
        <h2>Jangkauan tak terbatas Pilihan tak tertandingi</h2>
      </div>
      <div className="body-partnership">
        <p>
          Temukan lebih dari 1.150 Agensi Event Organizer yang siap membantu
          Anda di setiap sudut Indonesia.
        </p>
        <div className="amount-category"></div>
      </div>
    </section>
  );
}
export default Partnership;
