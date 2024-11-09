"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Radio,
  Select,
  Textarea,
  RadioGroup,
  SelectItem,
} from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep1({ onNext }) {
  const [vendorType, setVendorType] = useState("Individual");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vendor Profile Setup</h2>

      <div className={styles.formGroup}>
        <div className={styles.halfInput}>
          <Input
            label="First Name"
            labelPlacement="outside"
            variant="bordered"
            placeholder="Enter first name"
            fullWidth
          />
        </div>
        <div className={styles.halfInput}>
          <Input
            label="Last Name"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter last name"
            fullWidth
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <RadioGroup
          orientation="vertical"
          label="Vendor Type"
          value={vendorType}
          onChange={setVendorType}
          className={`${styles.radioGroup} radioGroup`} /* Make sure this class name matches */
        >
          <Radio value="Individual">Individual</Radio>
          <Radio value="Business">Business</Radio>
        </RadioGroup>
      </div>

      {/* Additional fields */}
      <div className={styles.formGroup}>
        <Select
          label="Service Category"
          placeholder="Select category"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
        >
          <SelectItem value="electrician">Electrician</SelectItem>
          <SelectItem value="plumber">Plumber</SelectItem>
          <SelectItem value="cleaning">Cleaning Services</SelectItem>
        </Select>
      </div>

      <div className={styles.formGroup}>
        <Select
          label="Years in Business"
          placeholder="Select years"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
        >
          <SelectItem value="1-3">1-3 years</SelectItem>
          <SelectItem value="3-5">3-5 years</SelectItem>
          <SelectItem value="5-10">5-10 years</SelectItem>
        </Select>
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Contact details"
          placeholder="+92 333 *******"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
        />
      </div>

      <div className={styles.formGroup}>
        <Textarea
          label="Description"
          placeholder="Start from here"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          minRows={4}
        />
      </div>

      <div className={styles.buttonGroup}>
        <Button bordered className={styles.skipButton} color="default">
          Skip
        </Button>
        <Button onClick={onNext} color="primary" className={styles.nextButton}>
          Next
        </Button>
      </div>
    </div>
  );
}
