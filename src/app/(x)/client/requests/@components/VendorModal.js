"use client";
import React, { useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import styles from "./VendorModal.module.css";
import HireConfirmModal from "./HireConfirmModal";

export default function VendorModal({ visible, onClose, vendor }) {
  const [isVisible, setIsVisible] = useState(false);

  if (!vendor) return null;

  const {
    user: { first_name, last_name, profile_photo },
    message,
    paymentType = "Hourly",
    hourlyRate = "$10 hourly",
    flatRate = "N/A",
    estimatedHours = "10",
    yearsInBusiness = "10-12 Years",
    startDate = "2024-10-14",
    completionDate = "2024-10-14",
  } = vendor;

  return (
    <Modal
      isOpen={visible}
      onClose={onClose}
      closeButton
      backdrop="opaque"
      size="4xl"
    >
      <ModalContent>
        <ModalHeader className={styles.header}>
          <img
            src={profile_photo}
            alt={`${first_name} ${last_name}`}
            className={styles.avatar}
          />
          <div>
            <h3 id="vendor-modal-title" className={styles.vendorName}>
              {`${first_name} ${last_name}`}
            </h3>
            <p className={styles.subInfo}>
              Years in Business: {yearsInBusiness}
            </p>
          </div>
        </ModalHeader>
        <ModalBody>
          {/* Vendor Message */}
          <div className={styles.message}>
            <h5>Vendor Message</h5>
            <p>{message}</p>
          </div>

          {/* Vendor Details */}
          <div className={styles.detailsGrid}>
            <div>
              <strong>Payment Type:</strong> {paymentType}
            </div>
            <div>
              <strong>Hourly Rate:</strong> {hourlyRate}
            </div>
            <div>
              <strong>Flat Rate Amount:</strong> {flatRate}
            </div>
            <div>
              <strong>Estimated Hours:</strong> {estimatedHours}
            </div>
            <div>
              <strong>Start Date:</strong> {startDate}
            </div>
            <div>
              <strong>Completion Date:</strong> {completionDate}
            </div>
          </div>
        </ModalBody>
        <ModalFooter className={styles.footer}>
          <Button
            className={styles.rejectButton}
            color="error"
            onClick={onClose}
          >
            Reject
          </Button>
          <Button
            onClick={() => {
              setIsVisible(true);
              //   console.log("clicekd! ");
            }}
            className={styles.hireButton}
            color="success"
          >
            Hire
          </Button>
        </ModalFooter>
        <HireConfirmModal
          isOpen={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </ModalContent>
    </Modal>
  );
}
