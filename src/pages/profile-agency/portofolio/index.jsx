import "./index.scss";
import Portofolio from "../../../assets/portofolio.png";

export function PortfolioProfile() {
  return (
    <div className="container-portofolio">
      <div className="portofolio-title">
        <h1 className="title-text">Portofolio dari Agensi</h1>
        <div className="underline-title"></div>
      </div>
      <div className="portofolio-content">
        <img src={Portofolio} />
        <img src={Portofolio} />
        <img src={Portofolio} />
      </div>
    </div>
  );
}
