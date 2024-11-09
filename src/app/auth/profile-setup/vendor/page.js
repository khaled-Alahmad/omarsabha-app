"use client";
import React, { useState } from "react";

import styles from "@/app/auth/profile-setup/vendor/VendorProfileSetup.module.css";
import VendorProfileSetupStep1 from "@/components/auth/VendorProfileSetupStep1";
import VendorProfileSetupStep2 from "@/components/auth/VendorProfileSetupStep2";

export default function VendorProfileSetup() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep(2);
  const goToPreviousStep = () => setCurrentStep(1);

  return (
    <div className={styles.setupContainer}>
      {/* Progress Indicator */}
      <div className={styles.progressBar}>
        <div
          className={`${styles.step} ${currentStep === 1 ? styles.active : ""}`}
        >
          <span className={styles.stepNumber}>1</span>
          <p className={styles.stepLabel}>Basic Details</p>
        </div>
        <div
          className={`${styles.step} ${currentStep === 2 ? styles.active : ""}`}
        >
          <span className={styles.stepNumber}>2</span>
          <p className={styles.stepLabel}>File Upload</p>
        </div>
      </div>

      {/* Render the current step */}
      {currentStep === 1 ? (
        <VendorProfileSetupStep1 onNext={goToNextStep} />
      ) : (
        <VendorProfileSetupStep2 onBack={goToPreviousStep} />
      )}
    </div>
  );
}
