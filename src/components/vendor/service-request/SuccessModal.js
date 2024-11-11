// SuccessModal.js
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import styles from "./SuccessModal.module.css";
import CheckIcon from "@/assets/icons/CheckIcon";

export default function SuccessModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" closeButton>
      <ModalContent>
        <ModalHeader style={{ justifyContent: "center", paddingTop: "2rem" }}>
          <div className={styles.iconContainer}>
            <CheckIcon className={styles.icon} />{" "}
            {/* Replace with your icon component */}
          </div>
        </ModalHeader>
        <ModalBody className={styles.modalContent}>
          <div className={styles.successMessage}>
            Proposal placed Successfully
          </div>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
