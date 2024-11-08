"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import styles from "./ForgetPassword.module.css";
import resetImage from "@/assets/images/auth/forget-password.png"; // Replace with actual path

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement email submission logic here
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={resetImage.src}
          alt="Reset Password"
          className={styles.image}
        />
      </div>

      <h2 className={styles.title}>Forget Password</h2>
      <p className={styles.subtitle}>
        Enter your email and we will send you a reset link
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Enter email"
          placeholder="johnryan458race@gmail.com"
          labelPlacement="outside"
          fullWidth
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className={styles.button}
          color="primary"
          size="lg"
        >
          Send me the link
        </Button>
      </form>
    </div>
  );
}
