"use client";

import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import styles from "./ConfirmPaymentModal.module.css";

export default function ConfirmPaymentModal({
  visible,
  onClose,
  paymentDetails,
}) {
  if (!paymentDetails) return null;

  const { vendorName, serviceType, requestDate, status, totalAmount } =
    paymentDetails;

  return (
    <Modal
      isOpen={visible}
      onClose={onClose}
      closeButton
      backdrop="opaque"
      size="lg"
    >
      <ModalContent>
        <ModalHeader className={styles.header}>
          <h3 className={styles.title}>Confirm Payment</h3>
        </ModalHeader>
        <ModalBody>
          <div className={styles.details}>
            <p className="flex">
              <span className="flex-1">Vendor Name:</span>{" "}
              <span className="flex-1">{vendorName}</span>
            </p>
            <p className="flex">
              <span className="flex-1">Service Type:</span>{" "}
              <span className="flex-1">{serviceType}</span>
            </p>
            <p className="flex">
              <span className="flex-1">Request Date:</span>
              <span className="flex-1"> {requestDate}</span>
            </p>
            <p className="flex">
              <span className="flex-1">Status:</span>{" "}
              <span
                className={`flex-1 ${
                  status === "Completed" ? styles.completed : styles.pending
                }`}
              >
                {status}
              </span>
            </p>
          </div>
          <div className={styles.totalAmount}>
            <p>Total amount</p>
            <p className={styles.amount}>${totalAmount}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button auto color="success" className={styles.payButton}>
            Pay Now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
