"use client";
import React, { useState } from "react";
import styles from "../MyProposals.module.css";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import { Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";

export default function ProposalsList({ proposals }) {
  //   console.log("proposals:", proposals);
  if (proposals.length === 0) {
    // Show "data not found" message if data is empty
    return <p className={styles.noDataMessage}>Data not found!</p>;
  }

  return (
    <>
      {proposals.map((proposal, index) => (
        <Link key={index} href={`/vendor/proposals/${proposal.id}`} passHref>
          <div className={styles.proposalCard}>
            <div className={styles.proposalHeader}>
              <h3>{proposal.message}</h3>
              <span className={styles.status}>
                Status: <span> {proposal.service_request.status} </span>
              </span>
            </div>
            <p className={styles.date}>
              Created On:{" "}
              {new Date(proposal.created_at).toLocaleDateString("en-CA")}
            </p>
            <p className={styles.desc}>
              {proposal.service_request.description}
            </p>
            <p className={styles.itemsProposal}>
              <span>
                <strong>Payment Type:</strong>
                {proposal.service_request.payment_type}{" "}
              </span>
              <span>
                {" "}
                <strong>Flat Rate Amount:</strong> {proposal.flatRateAmount}{" "}
              </span>
              <span>
                {" "}
                <strong>Hourly Rate:</strong> {proposal.hourlyRate}{" "}
              </span>
              <span>
                {" "}
                <strong>Estimated Hours:</strong> {proposal.estimatedHours}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}
