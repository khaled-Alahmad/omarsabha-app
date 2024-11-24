import React from "react";
import styles from "../MyProposals.module.css";
import Link from "next/link";

export default function JobList({ data }) {
  if (data.length === 0) {
    // Show "data not found" message if data is empty
    return <p className={styles.noDataMessage}>Data not found!</p>;
  }

  return (
    <>
      {data.map((proposal, index) => (
        <Link key={index} href={`/vendor/jobs/${proposal.id}`} passHref>
          <div className={styles.proposalCard}>
            <div className={styles.proposalHeader}>
              <h3>{proposal.title}</h3>
              <span className={styles.status}>
                Status: <span> {proposal.status} </span>
              </span>
            </div>
            <p className={styles.date}>
              Created On:{" "}
              {new Date(proposal.created_at).toLocaleDateString("en-CA")}
            </p>
            <p className={styles.desc}>{proposal.description}</p>
            <p className={styles.itemsProposal}>
              <span>
                <strong>Payment Type:</strong> {proposal.payment_type}
              </span>
              <span>
                {" "}
                <strong>Flat Rate Amount:</strong> {proposal.price}
                {" $"}
              </span>
              <span>
                {" "}
                <strong>Hourly Rate:</strong> {proposal.price}
                {" $"}
              </span>
              <span>
                {" "}
                <strong>Estimated Hours:</strong> {proposal.price}
                {" $"}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}
