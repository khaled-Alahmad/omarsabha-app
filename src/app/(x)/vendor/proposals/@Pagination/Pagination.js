"use client";
import React, { useState } from "react";
import styles from "../MyProposals.module.css";

export default function Pagination({ meta }) {
  const [perPage, setPerPage] = useState(meta.per_page);

  const handlePageChange = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    params.set("limit", perPage); // Ensure per_page is preserved
    window.location.href = `?${params.toString()}`;
  };

  const handlePerPageChange = (e) => {
    const newPerPage = e.target.value;
    setPerPage(newPerPage);
    const params = new URLSearchParams(window.location.search);
    params.set("page", 1); // Reset to the first page
    params.set("limit", newPerPage);
    window.location.href = `?${params.toString()}`;
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        {Array.from({ length: meta.last_page }, (_, i) => (
          <button
            key={i + 1}
            className={`${styles.paginationButton} ${
              meta.current_page === i + 1 ? styles.active : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className={styles.perPageSelector}>
        <label htmlFor="perPage">Results per page:</label>
        <select
          id="perPage"
          value={perPage}
          onChange={handlePerPageChange}
          className={styles.perPageDropdown}
        >
          <option value="2">2</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}
