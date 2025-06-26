import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryAgency } from "../../../../../dummy/data-agency";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./amount.scss";

export function AmountPartnership() {
  const visibleCategories = categoryAgency.slice(0, 3);
  const hiddenCategories = categoryAgency.slice(4);
  const otherAgenciesCount = hiddenCategories.reduce(
    (total, category) => total + category.agencies.length,
    0
  );

  const displayCategories = [
    ...visibleCategories,
    {
      nameCategory: "Lainnya",
      agencies: new Array(otherAgenciesCount).fill({ name: "Agensi Lain" }),
    },
  ];

  return (
    <div className="amount-category">
      {displayCategories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="category-name">
            <div className="category-info">
              <p>{category.agencies.length}</p>
              <div className="icon">
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: "40px", fontWeight: "500" }}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: "40px", fontWeight: "500" }}
                />
              </div>
            </div>
            <div className="underline" />
          </div>
          <span>{category.nameCategory}</span>
        </div>
      ))}
    </div>
  );
}
