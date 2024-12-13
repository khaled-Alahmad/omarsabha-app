"use client";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import StepContent from "./StepContent";
import styles from "@/assets/css/ServiceRequest.module.css";

export default function ServiceRequestForm({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    start_date: null,
    completion_date: null,
    title: "test",
    description: "",
    service_id: "",
    payment_type: "flat_rate",
    estimated_hours: "",
    price: "",
    mediaFiles: [],
    uploadProgress: 0,
  });

  const steps = ["Service Details", "Service Location", "Submission"];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="opaque"
      scrollBehavior="inside" // Fix scroll behavior to be "inside"
      size="3xl"
      closeButton // Enables the built-in close button
    >
      <ModalContent>
        <ModalHeader>
          <div className={styles.progressContainer}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.progressStep} ${index + 1 <= currentStep ? styles.active : ""
                  }`}
              >
                <div className={styles.stepCircle}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                </div>
                <span className={styles.stepLabel}>{step}</span>
                {index < steps.length - 1 && (
                  <div
                    className={`${styles.progressBar} ${index + 1 < currentStep ? styles.barActive : ""
                      }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </ModalHeader>

        <ModalBody>
          <StepContent
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        </ModalBody>

        <ModalFooter>
          {/* <Button color="danger" onPress={onClose}>
            Cancel
          </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
