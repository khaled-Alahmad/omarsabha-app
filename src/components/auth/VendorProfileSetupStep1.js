"use client";
import React, { useEffect, useState } from "react";
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

import axios from "axios";
import Loading from "@/app/loading";
import { fetchData } from "@/context/apiHelper";

export default function VendorProfileSetupStep1({ onNext, setVendorType }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    account_type: "Individual",
    service_ids: [],
    years_experience: "",
    description: "",
  });
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetchData(`public/services`);
        console.log(response);

        setServices(response.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  if (services.length <= 0) {
    return <Loading />;
  }
  const handleNext = () => {
    setVendorType(formData.vendor_type);
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
            required
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
            required
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
          required
          color="warning"
          value={formData.account_type}
          onValueChange={(value) => handleInputChange("account_type", value)}
          className={styles.radioGroup}
        >
          <Radio value="Individual">Individual</Radio>
          <Radio value="Company">Business</Radio>
        </RadioGroup>
      </div>

      <div className={styles.formGroup}>
        <label>Service Categories</label>
        <Select
          label="Service Categories"
          placeholder="Select categories"
          variant="bordered"
          labelPlacement="outside"
          fullWidth
          selectionMode="multiple"
          selectedKeys={formData.service_ids} // Selected values as an array
          onSelectionChange={(selected) => {
            const selectedArray = Array.from(selected); // Convert Set to Array
            handleInputChange("service_ids", selectedArray);
          }}
        >
          {services.map((service) => (
            <SelectItem key={service.id} value={service.id}>
              {service.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Years in Business"
          placeholder="Enter years"
          variant="bordered"
          required
          labelPlacement="outside"
          // placeholder="Enter last name"
          fullWidth
          type="number"
          value={formData.years_experience}
          onChange={(e) =>
            handleInputChange("years_experience", e.target.value)
          }
        />
        {/* <Select
          label="Years in Business"
          placeholder="Select years"
          variant="bordered"
          labelPlacement="outside"
          required
          fullWidth
          value={formData.years_experience}
          onChange={(e) =>
            handleInputChange("years_experience", e.target.value)
          }
        >
          <SelectItem value="1-2">1-2 years</SelectItem>
          <SelectItem value="2-4">2-4 years</SelectItem>
          <SelectItem value="4-6">4-6 years</SelectItem>
        </Select> */}
      </div>

      <div className={styles.formGroup}>
        <Textarea
          label="Description"
          placeholder="Start from here"
          required
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
