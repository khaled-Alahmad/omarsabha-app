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
    company_name: "",
    contact_name: "",
    phone: "",
    street_address: "",
    city: "",
    state: "",
    country: "",
    exstra_address:"",
    zip_code: "",
    business_insurance: "yes",
    has_crew: false,
    crew_members: [{ name: "", title: "" }],
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
      crew_members: [...prevData.crew_members, crewMember],
    }));
    setCrewMember({ name: "", title: "" });
  };

  const handleDeleteCrewMember = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      crew_members: prevData.crew_members.filter((_, i) => i !== index),
    }));
  };

  const handleCrewMemberChange = (index, field, value) => {
    const updatedCrewMembers = formData.crew_members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setFormData((prevData) => ({
      ...prevData,
      crew_members: updatedCrewMembers,
    }));
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
          required
          value={formData.company_name}
          onChange={(e) => handleInputChange("company_name", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Contact Name"
          placeholder="Contact Name"
          variant="bordered"
          labelPlacement="outside"
          required
          fullWidth
          value={formData.contact_name}
          onChange={(e) => handleInputChange("contact_name", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Company Phone Number"
          required
          placeholder="+92 333 *******"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Street Address"
          labelPlacement="outside"
          required
          placeholder="Street Address"
          variant="bordered"
          fullWidth
          value={formData.street_address}
          onChange={(e) => handleInputChange("street_address", e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <Input
          label="Extra Address"
          labelPlacement="outside"
          required
          placeholder="Extra Address"
          variant="bordered"
          fullWidth
          value={formData.exstra_address}
          onChange={(e) => handleInputChange("exstra_address", e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <div className={styles.halfInput}>
          <Input
            label="City"
            required
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
            required
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
            required
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
            value={formData.zip_code}
            required
            onChange={(e) => handleInputChange("zip_code", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <p className={styles.label}>Business Insurance?</p>
        <RadioGroup
          orientation="vertical"
          color="warning"
          required
          value={formData.business_insurance}
          onValueChange={(value) =>
            handleInputChange("business_insurance", value)
          }
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
      </div>

      <div className={styles.formGroup} style={{ textAlign: "start" }}>
        <Checkbox
          color="primary"
          isSelected={formData.has_crew}
          onChange={() => handleInputChange("has_crew", !formData.has_crew)}
        >
          Has Crew?
        </Checkbox>
      </div>
      {formData.has_crew && <>
        <div className={styles.crewList}>
          {formData.crew_members.map((member, index) => (
            <div key={index} className={styles.crewItem}>
              <div className={styles.halfInput}>
                <Input
                  label="Crew Member Name"
                  placeholder="Crew Member Name"
                  labelPlacement="outside"

                  variant="bordered"
                  fullWidth
                  value={member.name}
                  onChange={(e) =>
                    handleCrewMemberChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className={styles.halfInput}>
                <Input
                  label="Crew Member Title"
                  placeholder="Crew Member Title"
                  labelPlacement="outside"

                  variant="bordered"
                  fullWidth
                  value={member.title}
                  onChange={(e) =>
                    handleCrewMemberChange(index, "title", e.target.value)
                  }
                />
              </div>
              {formData.crew_members.length > 1 && <>
                <button
                  className={styles.deletedButton}
                  onClick={() => handleDeleteCrewMember(index)}
                >
                  Delete
                </button>
              </>}
            </div>
          ))}
        </div>

        <Button
          color="warning"
          className={styles.addButton}
          onClick={handleAddCrewMember}
        >
          + Add Crew Member
        </Button>
      </>}

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
