"use client";
import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { Button, Checkbox, Divider, Input } from "@nextui-org/react";
import styles from "@/app/auth/sign-up/vendor/VendorSignUp.module.css";
import imageLogin from "@/assets/images/auth/login-image.png";
import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";
import facebookIcon from "@/assets/icons/fb-icon.svg";
import googleIcon from "@/assets/icons/google-icon.svg";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import imageLogo from "@/assets/images/auth/logo.png";
import Link from "next/link";

export default function VendorSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const router = useRouter();

  const [requirements, setRequirements] = useState({
    length: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setConfirmIsVisible(!confirmIsVisible);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setRequirements({
      length: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_AUTH}/register`,
        {
          email,
          password,
          password_confirmation: confirmPassword,
          role: "vendor",
        },
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer 2|R1O0uIFVqd3FhYl271cchP65g2jL8fuQss7F7zZma0ea5e53",
          },
        }
      );

      if (response.data && response.data.access_token) {
        const expiresIn7Days = new Date();
        expiresIn7Days.setDate(expiresIn7Days.getDate() + 7);
        setCookie("authToken", response.data.access_token, {
          expires: expiresIn7Days,
          path: "/",
        });
        toast.success("Registration successful!");
        router.push("/auth/profile-setup/vendor");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.imageSection} relative`}>
        <img src={imageLogin.src} alt="Home Image" className={styles.image} />
        <Link href="/">
          {" "}
          <img
            src={imageLogo.src}
            alt="Logo"
            className="absolute top-8 left-10 bg-black-400 rounded-lg p-1 z-40"
          />
        </Link>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.title}>Vendor Sign Up</h2>
        <p className={styles.subtitle}>Enter details to create your account</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            isClearable
            variant="bordered"
            label="Email or Phone Number"
            placeholder="Enter your Email"
            labelPlacement="outside"
            fullWidth
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
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

          <Checkbox
            color="warning"
            className={styles.checkbox}
            isSelected={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          >
            I agree to the Terms and Conditions
          </Checkbox>
          <Button
            type="submit"
            variant="solid"
            color="primary"
            className={styles.signUpButton}
          >
            Sign Up
          </Button>

          <div className={styles.dividerContainer}>
            <Divider className={styles.divider} />
            <span className={styles.dividerText}>Or</span>
            <Divider className={styles.divider} />
          </div>

          <Button
            variant="bordered"
            color="primary"
            startContent={
              <img
                src={facebookIcon.src}
                alt="Facebook Icon"
                className={styles.icon}
              />
            }
            className={styles.socialButton}
          >
            Sign up with Facebook
          </Button>
          <Button
            variant="bordered"
            color="error"
            startContent={
              <img
                src={googleIcon.src}
                alt="Google Icon"
                className={styles.icon}
              />
            }
            className={styles.socialButton}
          >
            Sign up with Google
          </Button>
          <p className={styles.signInText}>
            Already a member? <a href="/auth/sign-in/vendor">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
