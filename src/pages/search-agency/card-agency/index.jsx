import { useState } from "react";
import { CardItemAgency } from "./card-item";
import "./index.scss";
export function CardAgency({ data }) {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleToggleDisplay = () => {
    setShowPagination(!showPagination);
    if (showPagination) {
      setCurrentPage(1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="container-card">
        <CardItemAgency
          data={showPagination ? currentItems : data.slice(0, 3)}
        />
      </div>
      <div className="bottom-card">
        {showPagination && totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
        <div className="button-all">
          {data.length > 3 && (
            <button className="show-more-button" onClick={handleToggleDisplay}>
              {showPagination ? "Sembunyikan" : "Lihat Lebih Banyak"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
