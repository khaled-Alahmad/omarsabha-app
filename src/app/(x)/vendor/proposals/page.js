import React from "react";
import styles from "./MyProposals.module.css";
import Filters from "./@Filtter/Fillter";
import ProposalsList from "./@ProposalsList/ProposalsList";
import { fetchData } from "@/context/apiHelper";
import Pagination from "./@Pagination/Pagination";

export default async function MyProposals({ searchParams }) {
  const filters = {
    search: searchParams.search || "",
    page: searchParams.page || 1, // Add page to filters
    limit: searchParams.limit || 10, // Default per_page value
  };

  // Fetch data from the API
  const data = await fetchData("vendors/proposals", filters);

  return (
    <div className={styles.container}>
      <div className={styles.proposalHeader}>
        <h2 className={styles.title}>My Proposals</h2>
        <Filters filters={filters} />
      </div>
      <ProposalsList proposals={data.data} />
      <Pagination meta={data.meta} />
    </div>
  );
}
