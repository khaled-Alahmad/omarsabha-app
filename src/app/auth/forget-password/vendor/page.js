"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import styles from "./ForgetPassword.module.css";
import resetImage from "@/assets/images/auth/forget-password.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_AUTH}/forget-password`,
        { email },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success(`Password reset link sent to ${email}`);
        router.push("/auth/email-sent/vendor");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Unknown error";
      toast.error(`Failed to send reset link: ${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          width={1000}
          height={1000}
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
          required
          type="email"
        />
        <Button
          type="submit"
          className={styles.button}
          color="primary"
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send me the link"}
        </Button>
      </form>
    </div>
  );
}
