"use client";
import React from "react";
import styles from "./EmailSent.module.css";
import emailSentImage from "@/assets/images/auth/email-sent-image.png"; // Replace with actual path to image
import { Divider } from "@nextui-org/react";

export default function EmailSent() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={emailSentImage.src}
          alt="Email Sent"
          className={styles.image}
        />
      </div>
      <Divider className={styles.divider} />

      <h2 className={styles.title}>An email has been sent</h2>
      <p className={styles.subtitle}>
        We have sent you an email. Please check your inbox to reset your
        password.
      </p>
    </div>
  );
}
