"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep1({ onNext, setVendorType }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    vendor_type: "Individual",
    service_category: "",
    years_experience: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setVendorType(formData.vendorType);
    onNext(formData); // تمرير البيانات إلى الخطوة التالية
  };

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
            value={formData.first_name}
            onChange={(e) => handleInputChange("first_name", e.target.value)}
          />
        </div>
        <div className={styles.halfInput}>
          <Input
            label="Last Name"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter last name"
            fullWidth
            value={formData.last_name}
            onChange={(e) => handleInputChange("last_name", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <RadioGroup
          orientation="vertical"
          label="Vendor Type"
          color="warning"
          value={formData.vendor_type}
          onValueChange={(value) => handleInputChange("vendor_type", value)}
          className={styles.radioGroup}
        >
          <Radio value="Individual">Individual</Radio>
          <Radio value="Business">Business</Radio>
        </RadioGroup>
      </div>

      <div className={styles.formGroup}>
        <Select
          label="Service Category"
          placeholder="Select category"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          value={formData.service_category}
          onChange={(e) => handleInputChange("service_category", e.target.value)}
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
          value={formData.years_experience}
          onChange={(e) => handleInputChange("years_experience", e.target.value)}
        >
          <SelectItem value="1-2">1-2 years</SelectItem>
          <SelectItem value="2-4">2-4 years</SelectItem>
          <SelectItem value="4-6">4-6 years</SelectItem>
        </Select>
      </div>

      <div className={styles.formGroup}>
        <Textarea
          label="Description"
          placeholder="Start from here"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          minRows={4}
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>

      <div className={styles.buttonGroup}>
        <Button bordered className={styles.skipButton} color="default">
          Skip
        </Button>
        <Button
          onClick={handleNext}
          color="primary"
          className={styles.nextButton}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
