"use client";
import React, { useState } from "react";
import styles from "./VendorCard.module.css";
import VendorModal from "./VendorModal";
import { Button } from "@nextui-org/react";

export default function VendorCard({ vendor }) {
  const [isVisible, setIsVisible] = useState(false);

  if (!vendor) {
    return <div>Vendor details not available.</div>;
  }

  const sampleVendor = {
    user: {
      first_name: "JJ Brother",
      last_name: "Elections",
      profile_photo: "https://via.placeholder.com/120",
    },
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly",
    hourlyRate: "$10 hourly",
    flatRate: "N/A",
    estimatedHours: "10",
    yearsInBusiness: "10-12 Years",
    startDate: "2024-10-14",
    completionDate: "2024-10-14",
  };

  const {
    user: { first_name, last_name, profile_photo },
    message,
    category = "Electrician",
    paymentType = "Hourly-rate",
    flatRate = "N/A",
    hourlyRate = "$10 hourly",
    estimatedHours = "10",
    yearsInBusiness = "10-12 Years",
    startDate = "2024-10-14",
    completionDate = "2024-10-14",
  } = vendor;

  return (
    <div className={styles.container}>
      {/* Vendor Header */}
      <div className={styles.header}>
        <img
          src={profile_photo}
          alt={`${first_name} ${last_name}`}
          className={styles.avatar}
        />
        <h2 className={styles.vendorName}>{`${first_name} ${last_name}`}</h2>
      </div>

      {/* Vendor Message */}
      <div className={styles.message}>
        <h3>Vendor Message.</h3>
        <p>{message}</p>
      </div>

      {/* Vendor Details */}
      <div className={styles.detailsGrid}>
        <div className="flex items-end">
          <strong>Category:</strong> {category}
        </div>
        <div className="flex items-end">
          <strong>Payment Type:</strong> {paymentType}
        </div>
        <div className="flex items-end">
          <strong>Flat Rate Amount:</strong> {flatRate}
        </div>
        <div className="flex items-end">
          <strong>Hourly Rate:</strong> {hourlyRate}
        </div>
        <div className="flex items-end">
          <strong>Estimated Hours:</strong> {estimatedHours}
        </div>
        <div className="flex items-end">
          <strong>Years in Business:</strong> {yearsInBusiness}
        </div>
        <div className="flex items-end">
          <strong>Start Date:</strong> {startDate}
        </div>
        <div className="flex items-end">
          <strong>Completion Date:</strong> {completionDate}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <Button
          onClick={() => {
            console.log("clicekd! ");
          }}
          className={styles.rejectButton}
          color="error"
        >
          Reject
        </Button>
        <Button
          onClick={() => {
            setIsVisible(true);
            console.log("clicekd! ");
          }}
          className={styles.hireButton}
          color="success"
        >
          Hire
        </Button>
      </div>
      <VendorModal
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        vendor={sampleVendor}
      />
    </div>
  );
}
