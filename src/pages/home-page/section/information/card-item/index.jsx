import { dataInformation } from "../../../../../dummy/data-information";
import "./index.scss";
export function CardItemInformation() {
  return (
    <div className="card-information">
      {dataInformation.map((item, index) => {
        let i = index + 1;
        return (
          <div className={`card card${i}`} key={index}>
            <h2>{i}</h2>
            <div className="teks">
              <h3>{item.name}</h3>
              <div className="underline" />
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
