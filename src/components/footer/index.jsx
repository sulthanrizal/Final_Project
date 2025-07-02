import "./index.scss";
import EllipseFooter from "../../assets/Ellipse-footer.png";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTelegram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-content">
        <div className="footer-sosmed">
          <div className="title">
            <img src={Logo} />
            <div className="title-text">
              <h3>EventMatch.id</h3>
              <p style={{ lineHeight: "1.2" }}>for all circles</p>
            </div>
          </div>
          <p className="text-sosmed">
            Platform yang Bantu Kamu Cari Agensi untuk Memenuhi Kebutuhan Acara
            kamu Jangan Ragu Lagi Untuk Memulai Merencanakan Acara Besar Atau
            Kecil
          </p>
          <div className="sosmed">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTiktok} className="icon" />
            <FontAwesomeIcon icon={faYoutube} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <FontAwesomeIcon icon={faTelegram} className="icon" />
          </div>
        </div>
        <div className="footer-nav">
          <a href="/home">Beranda</a>
          <a href="/search-agency">Cari Agency</a>
          <a>Kategory</a>
          <a>Daftarkan Agency</a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright @ 2025</p>
      </div>
      <img src={EllipseFooter} className="absolute" />
    </div>
  );
}
