import { useEffect, useState } from "react";
import "./index.scss";
import { dataAgency } from "../../../../dummy/data-agency";
import ImgPeople from "../../../../assets/img-people.png";

export function CategorySection() {
  const amountCategory = 2;
  const [category, setCategory] = useState([]);
  const getCategory = category.slice(0, 9);
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < amountCategory; i++) {
      temp = [...temp, ...dataAgency.map((item) => item.nameCategory)];
    }
    setCategory(temp);
  }, []);

  return (
    <section className="section-category">
      <h1>Cari Sesuai Kategori Kamu</h1>
      <div className="container-card">
        {getCategory.map((item, index) => {
          return (
            <div key={index} className={`content-card${index + 1} card`}>
              <p>{item}</p>
            </div>
          );
        })}
        <div className="content-img">
          <img src={ImgPeople} />
        </div>
      </div>
    </section>
  );
}
