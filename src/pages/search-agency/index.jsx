import "./index.scss";
import Background from "../../assets/bg-search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import { dataAgency } from "../../dummy/data-agency";
import { CardAgency } from "./card-agency";

export default function SearchAgency() {
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [activeLocationFilter, setActiveLocationFilter] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  const [activePriceFilter, setActivePriceFilter] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");

  const allAgencies = useMemo(
    () => dataAgency.flatMap((item) => item.agencies),
    []
  );

  const uniqueLocations = useMemo(
    () => [...new Set(allAgencies.map((agency) => agency.address))].sort(),
    [allAgencies]
  );
  const uniqueCategories = useMemo(
    () => [...new Set(allAgencies.map((agency) => agency.category))].sort(),
    [allAgencies]
  );
  const uniquePrices = useMemo(
    () => [...new Set(allAgencies.map((agency) => agency.price))].sort(),
    [allAgencies]
  );

  const filteredAgencies = useMemo(() => {
    return allAgencies.filter((agency) => {
      const matchesLocation = activeLocationFilter
        ? agency.address === activeLocationFilter
        : true;
      const matchesCategory = activeCategoryFilter
        ? agency.category === activeCategoryFilter
        : true;
      const matchesPrice = activePriceFilter
        ? agency.price === activePriceFilter
        : true;
      const matchesSearchTerm = activeSearchTerm
        ? agency.nameCompany
            .toLowerCase()
            .includes(activeSearchTerm.toLowerCase())
        : true;

      return (
        matchesLocation && matchesCategory && matchesPrice && matchesSearchTerm
      );
    });
  }, [
    allAgencies,
    activeLocationFilter,
    activeCategoryFilter,
    activePriceFilter,
    activeSearchTerm,
  ]);

  const handleApplyFilters = () => {
    setActiveLocationFilter(locationFilter);
    setActiveCategoryFilter(categoryFilter);
    setActivePriceFilter(priceFilter);
    setActiveSearchTerm(searchTerm);
  };

  const handleReset = () => {
    setLocationFilter("");
    setCategoryFilter("");
    setPriceFilter("");
    setSearchTerm("");
    setActiveLocationFilter("");
    setActiveCategoryFilter("");
    setActivePriceFilter("");
    setActiveSearchTerm("");
  };

  return (
    <div className="container-search">
      <div className="wrapper-search">
        <img src={Background} className="img-search" />
        <div className="col-search">
          <div className="search">
            <h1>Mulai Pencarian Agensi Untuk Kebutuhan Acara mu</h1>
            <div className="col-input">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              <div className="group-input">
                <input
                  placeholder="Cari Agency  yang Kamu Ketahui"
                  className="input-field"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="button-search" onClick={handleApplyFilters}>
                  Cari
                </button>
              </div>
            </div>
            <h2>Atau Dengan Filter</h2>
            <div className="filter-container">
              <div className="filter-group">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <h5
                    style={{
                      color: "#1E7B89",
                      fontSize: "20px",
                    }}
                  >
                    Lokasi
                  </h5>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    style={{ width: "300px" }}
                  >
                    <option value=""></option>
                    {uniqueLocations.map((location) => (
                      <option
                        key={location}
                        value={location}
                        style={{ color: "black" }}
                      >
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <h5
                    style={{
                      color: "#1E7B89",
                      fontSize: "20px",
                    }}
                  >
                    Category
                  </h5>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    style={{ width: "300px" }}
                  >
                    <option value=""></option>
                    {uniqueCategories.map((category) => (
                      <option
                        key={category}
                        value={category}
                        style={{ color: "black" }}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <h5
                    style={{
                      color: "#1E7B89",
                      fontSize: "20px",
                    }}
                  >
                    Budget
                  </h5>
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    style={{ width: "300px" }}
                  >
                    <option value=""></option>
                    {uniquePrices.map((price) => (
                      <option
                        key={price}
                        value={price}
                        style={{ color: "black" }}
                      >
                        {price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="filter-actions">
                <button className="button reset" onClick={handleReset}>
                  Reset
                </button>
                <button className="button filter" onClick={handleApplyFilters}>
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-mid">
        Rekomendasi Event Organizer Unggulan dengan Rating Tertinggi
      </h1>
      <CardAgency data={filteredAgencies} />
    </div>
  );
}
