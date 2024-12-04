import React from "react";
import styles from "./ServiceDetails.module.css";
import { fetchData } from "@/context/apiHelper";
import ProposalsAccordion from "../@components/ProposalsAccordion";

export default async function ServiceDetails({ params }) {
  const { id } = params;

  // Fetch the service request with proposals
  const response = await fetchData(`clients/service-requests/${id}`);

  if (!response || !response.success || !response.data) {
    return <div>No service details found.</div>;
  }

  const { proposals } = response.data;

  return (
    <div className={styles.container}>
      {/* <h1>Service Details</h1> */}
      <ProposalsAccordion proposals={proposals} />
    </div>
  );
}
