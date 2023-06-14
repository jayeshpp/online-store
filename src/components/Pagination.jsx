import { useState } from "react";
import styles from './Pagination.module.css'

const Pagination = ({
  totalRecords,
  perPage,
  activePage,
  handlePagination,
}) => {
  const [currentPage, setCurrentPage] = useState(parseInt(activePage) || 1);
  return (
    <div className={styles.pagination}>
      <button
        className="button button--prev"
        onClick={() => {
          setCurrentPage(p => p - 1);
          handlePagination(currentPage - 1);
        }}
        disabled={currentPage < 2}
        data-testid='pagination-prev'
      >
        Prev
      </button>
      <button
        className="button button--next"
        onClick={() => {
          setCurrentPage(p => p + 1);
          handlePagination(currentPage + 1);
        }}
        disabled={currentPage * perPage >= totalRecords}
        data-testid='pagination-next'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
