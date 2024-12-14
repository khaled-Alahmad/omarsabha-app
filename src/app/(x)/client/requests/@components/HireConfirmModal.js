// SuccessModal.js
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import styles from "./HireConfirmModal.module.css";
import InfoIcons from "@/assets/icons/InfoIcons";

export default function HireConfirmModal({ isOpen, onClose, onSubmit }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" closeButton>
      <ModalContent>
        <ModalHeader style={{ justifyContent: "center", paddingTop: "2rem" }}>
          <div className={styles.iconContainer}>
            <InfoIcons className={styles.icon} />
            {/* Replace with your icon component */}
          </div>
        </ModalHeader>
        <ModalBody className={styles.modalContent}>
          <div className={styles.successMessage}>
            Are you sure you want to Hire this Vendor?{" "}
          </div>
          {/* <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </p> */}
        </ModalBody>
        <ModalFooter className={styles.footer}>
          <Button
            className={styles.rejectButton}
            color="error"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button className={styles.hireButton} color="success" onClick={onSubmit}>
            Confirm Hire
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
