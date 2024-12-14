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

export default function VendorModal({ visible, onClose, vendor, onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);

  if (!vendor) return null;

  const {
    vendor: {

      user: { first_name, last_name, profile_photo },
    },
    // message,
    payment_type,
    price,
    estimated_hours,
    years_experience,
    created_at,
    updated_at,
  } = vendor;
  const message = vendor.message;
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
            src={profile_photo ||
              "https://placehold.co/600x400"


            }
            alt={`${first_name} ${last_name}`}
            className={styles.avatar}
          />
          <div>
            <h3 id="vendor-modal-title" className={styles.vendorName}>
              {`${first_name} ${last_name}`}
            </h3>
            <p className={styles.subInfo}>
              Years in Business: {years_experience}
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
              <strong>Payment Type:</strong> {payment_type}
            </div>
            {payment_type == "flat_rate" ? <> <div>
              <strong>Hourly Rate:</strong> N/A
            </div>
              <div>
                <strong>Flat Rate Amount:</strong> {price}
              </div>
              <div>
                <strong>Estimated Hours:</strong>N/A
              </div> </> : <> <div>
                <strong>Hourly Rate:</strong> {price}
              </div>
              <div>
                <strong>Flat Rate Amount:</strong> N/A
              </div>
              <div>
                <strong>Estimated Hours:</strong> {estimated_hours}
              </div></>}

            <div>
              <strong>Start Date:</strong>   {new Date(created_at).toLocaleDateString(
                "en-CA"
              )}
            </div>
            <div>
              <strong>Completion Date:</strong> {new Date(updated_at).toLocaleDateString(
                "en-CA"
              )}
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
          onSubmit={onSubmit}

          isOpen={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </ModalContent>
    </Modal>
  );
}
