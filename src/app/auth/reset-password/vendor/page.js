"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import styles from "./ResetPassword.module.css";
import resetImage from "@/assets/images/auth/reset-password.png"; // Replace with actual path
import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [requirements, setRequirements] = useState({
    length: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const toggleConfirmVisibility = () => setConfirmIsVisible(!confirmIsVisible);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setRequirements({
      length: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

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

      <h2 className={styles.title}>Reset Your Password</h2>
      <p className={styles.subtitle}>
        Enter a new password and confirm your new password to reset.
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

        {/* Password Requirements */}
        <ul className={styles.requirements}>
          <li className={requirements.length ? styles.valid : styles.invalid}>
            Password must be at least 8 characters long
          </li>
          <li
            className={requirements.hasNumber ? styles.valid : styles.invalid}
          >
            It is recommended to include a letter, a number, or a special
            character.
          </li>
        </ul>

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
