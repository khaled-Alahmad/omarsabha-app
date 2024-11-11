"use client";
import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import styles from "./ResetPassword.module.css";
import resetImage from "@/assets/images/auth/reset-password.png";
import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const router = useRouter();
  const [authToken, setAuthToken] = useState("");

  // جلب التوكين من الكوكيز عند تحميل الصفحة
  useEffect(() => {
    const token = getCookie("authToken");
    console.log(token);

    if (token) {
      setAuthToken(token);
    } else {
      toast.error("Authorization token not found", { position: "top-right" });
    }
  }, []);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setConfirmIsVisible(!confirmIsVisible);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "top-right" });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_AUTH}/reset-password`,
        {
          password,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successful", { position: "top-right" });
        router.push("/auth/email-sent");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password", {
        position: "top-right",
      });
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.imageWrapper}>
        <img
          src={resetImage.src}
          alt="Reset Password"
          className={styles.image}
        />
      </div>

      <h2 className={styles.title}>Reset Your Password</h2>
      <p className={styles.subtitle}>
        Enter a new password and confirm it to reset.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="New Password"
          variant="bordered"
          placeholder="Enter your password"
          labelPlacement="outside"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          fullWidth
          value={password}
          className={styles.input}
          onChange={handlePasswordChange}
        />

        <Input
          label="Confirm Password"
          variant="bordered"
          placeholder="Confirm your password"
          labelPlacement="outside"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleConfirmVisibility}
              aria-label="toggle confirm password visibility"
            >
              {confirmIsVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={confirmIsVisible ? "text" : "password"}
          fullWidth
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          type="submit"
          className={styles.button}
          color="primary"
          size="lg"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}
