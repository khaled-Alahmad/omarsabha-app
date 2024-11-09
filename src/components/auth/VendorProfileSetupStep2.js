"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep2({ onBack }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vendor Profile Setup</h2>

      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>Upload Company Logo</p>
        <div className={styles.uploadBox}>
          <p>Click to upload Profile Picture</p>
        </div>
      </div>

      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>
          Upload media files (about our service)
        </p>
        <div className={styles.uploadBox}>
          <p>Click to upload media files</p>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <Button
          bordered
          className={styles.skipButton}
          color="default"
          onClick={onBack}
        >
          Skip
        </Button>
        <Button color="primary" className={styles.saveButton}>
          Save
        </Button>
      </div>
    </div>
  );
}
