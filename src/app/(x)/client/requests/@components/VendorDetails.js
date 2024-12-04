"use client";
import React, { useState } from "react";
import styles from "./VendorDetails.module.css";
import { Button } from "@nextui-org/react";
import VendorModal from "./VendorModal";

export default function VendorDetails({ vendor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!vendor) {
    return <div>Vendor details not available.</div>;
  }

  const {
    name,
    message,
    category,
    paymentType,
    flatRate,
    hourlyRate,
    estimatedHours,
    yearsInBusiness,
    startDate,
    completionDate,
  } = vendor;

  const sampleVendor = {
    user: {
      first_name: "JJ Brother",
      last_name: "Elections",
      profile_photo: "https://via.placeholder.com/80",
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

  return (
    <div className={styles.container}>
      {/* Vendor Header */}
      <div className={styles.header}>
        <img src={vendor.image} alt={name} className={styles.avatar} />
        <h2 className={styles.vendorName}>{name}</h2>
      </div>

      {/* Vendor Message */}
      <div className={styles.message}>
        <h3>Vendor Message</h3>
        <p>{message}</p>
      </div>

      {/* Vendor Details */}
      <div className={styles.detailsGrid}>
        <div>
          <strong>Category:</strong> {category}
        </div>
        <div>
          <strong>Payment Type:</strong> {paymentType}
        </div>
        <div>
          <strong>Flat Rate Amount:</strong> {flatRate || "N/A"}
        </div>
        <div>
          <strong>Hourly Rate:</strong> {hourlyRate}
        </div>
        <div>
          <strong>Estimated Hours:</strong> {estimatedHours}
        </div>
        <div>
          <strong>Years in Business:</strong> {yearsInBusiness}
        </div>
        <div>
          <strong>Start Date:</strong> {startDate}
        </div>
        <div>
          <strong>Completion Date:</strong> {completionDate}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <Button className={styles.rejectButton} color="error">
          Reject
        </Button>
        <Button
          onClick={openModal}
          className={styles.hireButton}
          color="success"
        >
          Hire
        </Button>
        <button
          onClick={() => {
            console.log("Default button clicked!");
          }}
        >
          Hiress
        </button>
      </div>
      <VendorModal
        visible={isModalOpen}
        onClose={closeModal}
        vendor={sampleVendor}
      />
    </div>
  );
}
