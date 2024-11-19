"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import styles from "./BidDetails.module.css"; // Import your CSS module for styling
import serviceImage from "@/assets/images/vendor/service-request.png";
import ProposeChangeModal from "@/components/vendor/service-request/ProposeChangeModal";
export default function BidDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Open modal clicked"); // Check if this prints in the console
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Light switch replacement</h2>

      <div className={styles.descriptionSection}>
        <h3>Description</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>

      <div className={styles.detailsSection}>
        <div>
          <span>Category:</span> Electrician
        </div>
        <div>
          <span>Payment Type:</span> Hourly-rate
        </div>
        <div>
          <span>Flat Rate Amount:</span> N/A
        </div>
        <div>
          <span>Hourly Rate:</span> $10 hourly
        </div>
        <div>
          <span>Estimated Hours:</span> 10
        </div>
        <div>
          <span>Start Date:</span> 2024-10-14
        </div>
        <div>
          <span>Completion Date:</span> 2024-10-14
        </div>
        <div>
          <span>Street Address:</span> Shahr-e-Quaid-e-Azam, Khoamer Khomer,
          Gilgit, Gilgit-Baltistan
        </div>
        <div>
          <span>Suite Number:</span> N/A
        </div>
        <div>
          <span>City:</span> Gilgit
        </div>
        <div>
          <span>State:</span> Pakistan
        </div>
        <div>
          <span>Postal Code:</span> 15300
        </div>
        <div>
          <span>Country:</span> Pakistan
        </div>
      </div>

      <div className={styles.imageGallery}>
        {[1, 2, 3].map((image, index) => (
          <img
            key={index}
            src={serviceImage.src}
            alt="Bid related"
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.buttonGroup}>
        <Button
          className={styles.proposeButton}
          color="default"
          onClick={openModal}
        >
          Propose Change
        </Button>
        <Button className={styles.bidButton} color="primary">
          Place Bid
        </Button>
      </div>
      <ProposeChangeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
