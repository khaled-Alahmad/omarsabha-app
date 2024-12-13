"use client";
import { useState } from "react";
import styles from "./VerificationCode.module.css";
import imageVerification from "@/assets/images/auth/verification-illustration.png";
import toast from "react-hot-toast";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function VerificationCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = getCookie("emailToConfirm");
  // console.log(email);
  const router = useRouter();

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
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL_AUTH}/verify-code`,
      {
        email,
        verify_code: verificationCode,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(response);
    toast.success(response.data.message);
    if (response.data.success) {
      const expiresIn7Days = new Date();
      expiresIn7Days.setDate(expiresIn7Days.getDate() + 7);

      // Store token and role in cookies
      setCookie("authToken", response.data.access_token, {
        expires: expiresIn7Days,
        path: "/",
      });
      setCookie("userRole", response.data.role, {
        expires: expiresIn7Days,
        path: "/",
      });
      setCookie("userID", response.data.user.id, {
        // expires: expiresIn7Days,
        path: "/",
      });
      setCookie("approveVendor", response.data.user.approve, {
        expires: expiresIn7Days,
        path: "/",
      });

      setCookie("profileSetupVendor", response.data.user.profile_setup, {
        expires: expiresIn7Days,
        path: "/",
      });
      if (!response.data.user.profile_setup && response.data.role == "vendor") {
        router.push("/auth/profile-setup/vendor");
      }
      if (!response.data.user.profile_setup && response.data.role == "client") {
        router.push("/auth/profile-setup/client");
      }
    }
    // setTimeout(() => {
    //   toast.success(
    //     `Verification code "${verificationCode}" sent successfully!`
    //   );
    //   setIsSubmitting(false);
    // }, 1000);
  };

  const handleResend = async () => {
    const token = getCookie("authToken");

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL_AUTH}/send-code`,
      {
        email,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
