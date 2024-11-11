"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import VendorProfileSetupStep1 from "@/components/auth/VendorProfileSetupStep1";
import VendorProfileSetupStep2 from "@/components/auth/VendorProfileSetupStep2";
import VendorProfileSetupStep3 from "@/components/auth/VendorProfileSetupStep3";
import styles from "@/app/auth/profile-setup/vendor/VendorProfileSetup.module.css";
import { useRouter } from "next/navigation";

export default function VendorProfileSetup() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [vendorType, setVendorType] = useState("Individual");

  const authToken = getCookie("authToken");

  useEffect(() => {
    if (!authToken) {
      router.push("/auth/sign-in");
    }
  }, [authToken, router]);

  const handleNext = (newData, finalStep = false) => {
    setFormData({ ...formData, ...newData });
    if (finalStep) {
      submitForm();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const submitForm = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}/vendors/setup-profile`;
    const fullFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "mediaFiles") {
        formData[key].forEach((file) => {
          fullFormData.append("additional_images[]", file);
        });
      } else {
        fullFormData.append(key, formData[key]);
      }
    });
    console.log(formData);

    try {
      const response = await axios.post(url, fullFormData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success("Profile setup complete!");
        router.push("/dashboard");
      } else if (response.status === 403) {
        toast.error(response.data.message);
        // router.push("/dashboard");
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(`Error setting up profile: ${errorMessage}`);
      console.error("Profile setup error:", error);
    }
  };

  return (
    <div className={styles.setupContainer}>
      <div className={styles.progressBar}>
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className={`${styles.step} ${
              currentStep === i + 1 ? styles.active : ""
            }`}
          >
            <span className={styles.stepNumber}>{i + 1}</span>
            <p className={styles.stepLabel}>
              {["Basic Details", "Business Details", "File Upload"][i]}
            </p>
          </div>
        ))}
      </div>

      {currentStep === 1 && (
        <VendorProfileSetupStep1
          onNext={handleNext}
          setVendorType={setVendorType}
        />
      )}
      {currentStep === 2 && (
        <VendorProfileSetupStep2 onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 3 && (
        <VendorProfileSetupStep3
          onBack={handleBack}
          onNext={(data) => handleNext(data, true)}
        />
      )}
    </div>
  );
}
