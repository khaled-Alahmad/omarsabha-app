"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import VendorProfileSetupStep1 from "@/components/auth/VendorProfileSetupStep1";
import VendorProfileSetupStep2 from "@/components/auth/VendorProfileSetupStep2";
import VendorProfileSetupStep3 from "@/components/auth/VendorProfileSetupStep3";
import styles from "@/app/auth/profile-setup/vendor/VendorProfileSetup.module.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "@/app/loading";
import { addData } from "@/context/apiHelper";

export default function VendorProfileSetup() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [vendorType, setVendorType] = useState("Individual");
  const [loading, setLoading] = useState(false);

  const authToken = getCookie("authToken");

  useEffect(() => {
    if (!authToken) {
      router.push("/auth/sign-in");
    }
  }, [authToken, router]);

  const handleNext = (newData, finalStep = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    if (finalStep) {
      // setFormData((prev) => ({ ...prev, ...newData }));

      submitForm(newData);
    } else {
      if (vendorType === "Individual") {
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const submitForm = async (newData) => {
    const fullFormData = new FormData();
    const finalData = { ...formData, ...newData };

    Object.entries(finalData).forEach(([key, value]) => {
      if (key === "additional_images" && Array.isArray(value)) {
        value.forEach((file) =>
          fullFormData.append("additional_images[]", file)
        );
      } else if (key === "service_ids" && Array.isArray(value)) {
        fullFormData.append("service_ids", JSON.stringify(value)); // Send as JSON array
      } else if (value !== null && value !== undefined) {
        fullFormData.append(key, value);
      }
    });

    console.log("Submitting FormData:");
    for (const [key, value] of fullFormData.entries()) {
      console.log(`${key}:`, value);
    }

    setLoading(true);
    const header = {
      "Content-Type": "multipart/form-data",
    }
    try {
      const response = await addData("vendors/setup-profile", fullFormData, header);

      if (response.status === 200) {
        toast.success("Profile setup complete!");
        router.push("/dashboard");
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(`Error setting up profile: ${errorMessage}`);
      console.error("Profile setup error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
  const steps = ["Basic Details", "Business Details", "File Upload"];

  return (
    <div className={styles.setupContainer}>

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
