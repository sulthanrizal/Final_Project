import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function CardItemAgency({ data }) {
  function IconStar({ amount }) {
    return (
      <>
        {[...Array(amount)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="icon-start" />
        ))}
      </>
    );
  }

  return (
    <>
      {data.map((item, index) => {
        const img = item.image;
        return (
          <div className="card-agency" key={index}>
            <div className="card-header">
              <img src={img} />
              <div className="group-header">
                <p>{item.nameCompany}</p>
                <div className="group-header-bottom">
                  <div style={{ color: "#ffc107" }}>
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>
                  <p className="riview">
                    {"("}
                    {item.amountRiview} Review {")"}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="group-address">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="icon-address"
                />
                <h1 className="address">{item.address}</h1>
              </div>
              <p className="text-category">{item.category}</p>
              <div className="descriptions">
                <p className="text-description">{item.description}</p>
              </div>
            </div>
            <div className="card-bottom">
              <p className="text-price">Mulai dari {item.price}</p>
              <Link className="text-profile" to={`/profile-agency/${index}`}>
                Lihat Profil
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
