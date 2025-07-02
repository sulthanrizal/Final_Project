import "./index.scss";
import { useParams } from "react-router-dom";
import { dataAgency } from "../../dummy/data-agency";
import Group8 from "../../assets/Group8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CardProfile } from "./card-profile";

export function ProfileAgency() {
  const { id } = useParams();
  const allAgencies = dataAgency.flatMap((group) => group.agencies);
  const agency = allAgencies.find((_, i) => i === Number(id));

  const reason = [
    "✅ Konsultasi Konsep Gratis – mulai dari tema tradisional, rustic, hingga modern minimalis",
    "✅ Tim Profesional & Ramah – lebih dari 5 tahun pengalaman mengurus ratusan pernikahan",
    "✅ Dekorasi Elegan & Personal – dibuat khusus sesuai keinginan Anda",
    "✅ Vendor Berkualitas – katering, MUA, fotografer, dan MC berstandar terbaik",
    "✅ Harga Fleksibel – bisa disesuaikan dengan budget tanpa mengurangi kesan mewah",
  ];

  if (!agency) {
    return <div className="profile-container">Agency tidak ditemukan.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={Group8} className="img-top" />
        <h1>Profile Agensi</h1>
      </div>
      <div className="profile-content">
        <div className="profile-card">
          <div className="card-header">
            <div className="header-content">
              <img
                src={agency.image}
                alt={agency.nameCompany}
                className="profile-img"
              />
              <div className="profile-group1">
                <h1 className="profile-name">{agency.nameCompany}</h1>
                <div className="profile-rating">
                  {[...Array(agency.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="icon-star"
                    />
                  ))}
                  <span className="review-count">
                    ({agency.amountRiview} Review)
                  </span>
                </div>
              </div>
            </div>
            <div className="underline" />
          </div>
          <p className="profile-description">{agency.description}</p>
          <div className="profile__why-us">
            <h2 className="why-us__title">Kenapa Memilih Kami?</h2>
            <div className="why-us__list">
              {reason.map((rea, i) => {
                return (
                  <p className="why-us_item" key={i}>
                    {rea}
                  </p>
                );
              })}
            </div>
          </div>
          <CardProfile />
        </div>
      </div>
    </div>
  );
}
