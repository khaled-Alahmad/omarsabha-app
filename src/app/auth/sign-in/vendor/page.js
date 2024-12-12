"use client";
import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { Button, Checkbox, Divider, Input } from "@nextui-org/react";
import styles from "@/app/auth/sign-in/vendor/VendorSignIn.module.css";
import imageLogin from "@/assets/images/auth/login-image.png";
import imageLogo from "@/assets/images/auth/logo.png";

import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";
import facebookIcon from "@/assets/icons/fb-icon.svg";
import googleIcon from "@/assets/icons/google-icon.svg";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function VendorSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  // toast.success("Login successful!");
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_AUTH}/login`,
        {
          email,
          password,
          role: "vendor",
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const { access_token, user } = response.data;

      if (access_token) {
        // Set expiration date for cookies (7 days)
        const expiresIn7Days = new Date();
        expiresIn7Days.setDate(expiresIn7Days.getDate() + 7);

        // Store token and role in cookies
        setCookie("authToken", access_token, {
          expires: expiresIn7Days,
          path: "/",
        });
        setCookie("userRole", user.role, {
          expires: expiresIn7Days,
          path: "/",
        });
        expiresIn7Days.setDate(expiresIn7Days.getDate() + 1);
        setCookie("emailToConfirm", user.email, {
          expires: expiresIn7Days,
          path: "/",
        });
        // Show success message before navigation
        // toast.success("Login successful!");
        // console.log("clicked!");
        // console.log(response);
        setCookie("approveVendor", user.approve, {
          expires: expiresIn7Days,
          path: "/",
        });
        setCookie("userID", user.id, {
          // expires: expiresIn7Days,
          path: "/",
        });
        setCookie("profileSetupVendor", user.profile_setup, {
          expires: expiresIn7Days,
          path: "/",
        });
        toast.success("Login successful!");
        if (!user.approve) {
          router.push("/auth/verification");
          return;
        } else if (!user.profile_setup) {
          router.push("/auth/profile-setup/vendor");
          return;
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.error("Login error:", error);

      // Provide a better error handling mechanism
      if (error.response && error.response.data) {
        const errorMessage =
          error.response.data.message || "An error occurred during login.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to login. Please try again.");
      }
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
        <div className={styles.formSectionAS}>
          <h2 className={styles.title}>Vendor Sign In</h2>
          <p className={styles.subtitle}>Enter detail to Sign in</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              isClearable
              variant="bordered"
              label="Email"
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              href="/auth/forget-password/vendor"
              className={styles.forgetPassword}
            >
              Forget Password?
            </a>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className={styles.signUpButton}
            >
              Sign In
            </Button>

            <div className={styles.dividerContainer}>
              <Divider className={styles.divider} />
              <span className={styles.dividerText}>Or</span>
              <Divider className={styles.divider} />
            </div>

            <Button
              variant="bordered"
              color="error"
              startContent={
                <img
                  src={facebookIcon.src}
                  alt="Facebook Icon"
                  className={styles.icon}
                />
              }
              className={styles.socialButton}
            >
              Sign in with Facebook
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
              Sign in with Google
            </Button>
            <p className={styles.signInText}>
              Already a member? <a href="/auth/sign-up/vendor">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
