import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faCalendarAlt,
  faCheckToSlot,
  faCopy,
  faGlobe,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export function CardItemProfile() {
  return (
    <>
      <div className="agency-profile__info-grid">
        <div className="info-card" style={{ display: "flex" }}>
          <div style={{ marginRight: "68px" }}>
            <p className="info-card__title title">Didirikan</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                background: "#e6f7f7",
                padding: "5px 15px",
                borderRadius: "50px",
              }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
              <p className="info-card__value">2018</p>
            </div>
          </div>
          <div>
            <p className="info-card__title title">Karyawan</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                background: "#e6f7f7",
                padding: "5px 15px",
                borderRadius: "50px",
              }}
            >
              <FontAwesomeIcon icon={faUser} />
              <p className="info-card__value">200 Orang</p>
            </div>
          </div>
        </div>
        <div className="info-card">
          <p className="info-card__title">Izin Kelola Usaha</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <p className="info-card__value">
                <FontAwesomeIcon icon={faCheckToSlot} /> NPWP
              </p>
              <p className="info-card__value">
                {" "}
                <FontAwesomeIcon icon={faCheckToSlot} /> SIUP
              </p>
            </div>
            <p className="info-card__value">
              {" "}
              <FontAwesomeIcon icon={faCheckToSlot} /> Nomor Induk Berusaha
            </p>
          </div>
        </div>
        <div className="info-card info-card--cta">
          <div
            className="button-primary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faGlobe} fontSize={25} />
            <a href="#" className="button ">
              Kunjungi Website Kami
            </a>
          </div>
          <div className="button-secondary">
            <FontAwesomeIcon icon={faWhatsapp} fontSize={25} />
            <a href="#" className="button ">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="group1">
        <div
          className="group1-left"
          style={{ display: "flex", flexDirection: "column", gap: "17px" }}
        >
          <div className="agency-profile__services">
            <h3 className="services__title title">Layanan Kami</h3>
            <ul className="services__list">
              <li className="services__item">Wedding Organizer</li>
              <li className="services__item">Day Organizer</li>
              <li className="services__item">Dekorasi & Entertainment</li>
              <li className="services__item">Custom Paket Sesuai Kebutuhan</li>
              <li className="services__item">Prewedding Planning</li>
              <li className="services__item">Akad & Resepsi</li>
            </ul>
          </div>
          <div
            className="agency-profile__location"
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            <p className="location__label title" style={{ color: "#0a4952" }}>
              Lokasi
            </p>
            <p className="location__text">
              <FontAwesomeIcon icon={faLocationDot} /> Kami melayani area
              Jabodetabek, Bandung, Surabaya dan Sekitarnya
            </p>
          </div>
          <div
            className="agency-profile__social-media"
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            <p
              className="social-media__label title"
              style={{ color: "#0a4952" }}
            >
              Sosial Media:
            </p>
            <ul className="social-media__list">
              <li className="sosmed">
                <FontAwesomeIcon icon={faInstagram} />
                <a href="#">Instagram Bunga Mekar</a>
              </li>
              <li className="sosmed">
                <FontAwesomeIcon icon={faFacebook} />
                <a href="#">Facebook Bunga Mekar</a>
              </li>
              <li className="sosmed">
                <FontAwesomeIcon icon={faTiktok} />
                <a href="#">Tiktok Bunga Mekar</a>
              </li>
            </ul>
          </div>
          <div className="agency-profile__contact">
            <p className="contact-title title">Kontak Kami</p>
            <div className="contact-company">
              <div className="contact-group">
                <p className="contact-text">Email: bunga@gmail.com</p>
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{
                    paddingRight: "20px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div className="contact-group">
                <p className="contact-text">Telepon: +62-856-1234-1234</p>
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{
                    paddingRight: "20px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <button className="agency-profile__booking-button">
            Booking Agensi
          </button>
        </div>
        <div
          className="agency-profile__packages group1-right"
          style={{ display: "flex", flexDirection: "column", gap: "17px" }}
        >
          <div className="package-card">
            <h4 className="package-card__name title">Paket Reguler</h4>
            <div className="package-card-bottom">
              <p className="package-card__price">Mulai dari 20 Jt</p>
              <a className="package-card__link" href="#">
                Detail
              </a>
            </div>
          </div>
          <div className="package-card">
            <h4 className="package-card__name title">Paket Premium</h4>
            <div className="package-card-bottom">
              <p className="package-card__price">Mulai dari 35 Jt</p>

              <a className="package-card__link" href="#">
                Detail
              </a>
            </div>
          </div>
          <div className="package-card">
            <h4 className="package-card__name title">Paket Custom</h4>
            <div className="package-card-bottom">
              <p className="package-card__price">Harga dapat disesuaikan</p>

              <a className="package-card__link" href="#">
                Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
