"use client";
import { useState } from "react";
import styles from "./VerificationCode.module.css";
import imageVerification from "@/assets/images/auth/verification-illustration.png";
import toast from "react-hot-toast";
export default function VerificationCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Automatically move to the next input
    if (value && index < 3) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    // Automatically send if all fields are filled
    if (newCode.every((digit) => digit !== "")) {
      handleSubmit(newCode.join(""));
    }
  };

  const handleSubmit = async (verificationCode) => {
    setIsSubmitting(true);
    console.log("Sending verification code:", verificationCode);
    // Add your API call here
    setTimeout(() => {
      toast.success(
        `Verification code "${verificationCode}" sent successfully!`
      );
      setIsSubmitting(false);
    }, 1000);
  };

  const handleResend = () => {
    console.log("Resend code");
    toast.success("Verification code resent!");
  };

  return (
    <div className={styles.container}>
      <img
        src={imageVerification.src}
        alt="Enter Verification Code"
        className={styles.image}
      />
      <h2 className={styles.title}>Enter Verification Code</h2>
      <p className={styles.description}>
        Please enter the verification code we sent to your email.
      </p>
      <div className={styles.inputs}>
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-input-${index}`}
            type="text"
            maxLength="1"
            className={styles.input}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            disabled={isSubmitting}
          />
        ))}
      </div>
      <button
        className={styles.resend}
        onClick={handleResend}
        disabled={isSubmitting}
      >
        Resend
      </button>
    </div>
  );
}
