import "./index.scss";
import Logo from "../../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import ConsultationForm from "./form";
export function FormConsultation() {
  return (
    <section className="section-form">
      <div className="sec-left">
        <div className="title">
          <div className="title-left">
            <img src={Logo} />
            <div className="title-teks">
              <h3>EventMatch.id</h3>
              <p>for all circles</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "36px" }} />
        </div>
        <div className="dec">
          <h2>Konsultasikan Kepada kami</h2>
          <p>
            Ada Hal yang Mungkin Kamu ingin Tau ? Atau Kamu Ingin Beri Masukkan
            untuk EventMatch.id Jangan Ragu Untuk Konsultasi Ke Kami.
          </p>
        </div>
        <div className="contact">
          <div className="contact-company" style={{ paddingLeft: "5px" }}>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <p>
              Jalan Kemang Timur No. 1 kelurahan Pejaten Barat, Kecamatan Pasar
              Minggu, kota Jakarta Selatan
            </p>
          </div>
          <div className="contact-company">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>eventmatch@gmail.com</p>
          </div>
          <div className="contact-company">
            <FontAwesomeIcon icon={faPhoneFlip} className="icon" />
            <p>+62 856-1238-7496</p>
          </div>
        </div>
      </div>
      <div className="sec-right">
        <ConsultationForm />
      </div>
    </section>
  );
}
