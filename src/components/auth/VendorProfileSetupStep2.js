"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Select,
  Radio,
  RadioGroup,
  Textarea,
} from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep2({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    businessInsurance: "yes",
    hasCrew: false,
    crewMembers: [],
  });

  const [crewMember, setCrewMember] = useState({ name: "", title: "" });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddCrewMember = () => {
    setFormData((prevData) => ({
      ...prevData,
      crewMembers: [...prevData.crewMembers, crewMember],
    }));
    setCrewMember({ name: "", title: "" });
  };

  const handleNext = () => {
    onNext(formData); // تمرير البيانات إلى الخطوة التالية
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vendor Profile Setup</h2>

      <div className={styles.formGroup}>
        <Input
          label="Company Name"
          placeholder="Company Name"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Contact Name"
          placeholder="Contact Name"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          value={formData.contactName}
          onChange={(e) => handleInputChange("contactName", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Company Phone Number"
          placeholder="+92 333 *******"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Street Address"
          labelPlacement="outside"
          placeholder="Street Address"
          variant="bordered"
          fullWidth
          value={formData.streetAddress}
          onChange={(e) => handleInputChange("streetAddress", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <div className={styles.halfInput}>
          <Input
            label="City"
            placeholder="City name"
            labelPlacement="outside"
            variant="bordered"
            fullWidth
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </div>
        <div className={styles.halfInput}>
          <Input
            label="State"
            placeholder="State name"
            labelPlacement="outside"
            variant="bordered"
            fullWidth
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.halfInput}>
          <Input
            label="Country"
            placeholder="Country"
            labelPlacement="outside"
            variant="bordered"
            fullWidth
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />
        </div>
        <div className={styles.halfInput}>
          <Input
            label="Postal Code"
            placeholder="Postal Code"
            labelPlacement="outside"
            variant="bordered"
            fullWidth
            value={formData.postalCode}
            onChange={(e) => handleInputChange("postalCode", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <p className={styles.label}>Business Insurance?</p>
        <RadioGroup
          orientation="vertical"
          color="warning"
          value={formData.businessInsurance}
          onValueChange={(value) =>
            handleInputChange("businessInsurance", value)
          }
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
      </div>

      <div className={styles.formGroup}>
        <Checkbox
          color="primary"
          isSelected={formData.hasCrew}
          onChange={() => handleInputChange("hasCrew", !formData.hasCrew)}
        >
          Has Crew?
        </Checkbox>
      </div>

      {formData.hasCrew && (
        <>
          <div className={styles.formGroup}>
            <Input
              label="Crew Member Name"
              placeholder="Crew Member Name"
              variant="bordered"
              fullWidth
              value={crewMember.name}
              onChange={(e) =>
                setCrewMember({ ...crewMember, name: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <Input
              label="Crew Member Title"
              placeholder="Crew Member Title"
              variant="bordered"
              fullWidth
              value={crewMember.title}
              onChange={(e) =>
                setCrewMember({ ...crewMember, title: e.target.value })
              }
            />
          </div>
          <Button
            color="warning"
            className={styles.addButton}
            onClick={handleAddCrewMember}
          >
            + Add Crew Member
          </Button>
        </>
      )}

      <div className={styles.buttonGroup}>
        <Button
          bordered
          className={styles.skipButton}
          color="default"
          onClick={onBack}
        >
          Back
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
