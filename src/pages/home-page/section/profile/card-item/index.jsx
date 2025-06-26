import { dataProfile } from "../../../../../dummy/data-profile";
import "./index.scss";

export function CardItemProfile() {
  return (
    <div className="card-profile">
      {dataProfile.map((item, index) => {
        return (
          <div className="card-item" key={index}>
            <div className="icon">{item.icon}</div>
            <span>{item.name}</span>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
