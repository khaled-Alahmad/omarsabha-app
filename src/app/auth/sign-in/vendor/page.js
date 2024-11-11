"use client";
import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { Button, Checkbox, Divider, Input } from "@nextui-org/react";
import styles from "@/app/auth/sign-in/vendor/VendorSignIn.module.css";
import imageLogin from "@/assets/images/auth/login-image.png";
import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";
import facebookIcon from "@/assets/icons/fb-icon.svg";
import googleIcon from "@/assets/icons/google-icon.svg";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VendorSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

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
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err));
      console.log(response.data.access_token);

      if (response.data && response.data.access_token) {
        // حساب تاريخ انتهاء الصلاحية بعد 7 أيام
        const expiresIn7Days = new Date();
        expiresIn7Days.setDate(expiresIn7Days.getDate() + 7);

        // تخزين التوكن في الكوكيز مع تاريخ انتهاء الصلاحية
        setCookie("authToken", response.data.access_token, {
          expires: expiresIn7Days,
          path: "/",
        });

        toast.success("Login successful!");
        // يمكنك إعادة التوجيه إلى صفحة أخرى بعد تسجيل الدخول بنجاح
      }
      if (
        response.data &&
        response.data.user &&
        response.data.user.profile_setup == 0
      ) {
        router.push("/auth/profile-setup/vendor");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your credentials and try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={imageLogin.src} alt="Home Image" className={styles.image} />
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.title}>Vendor Sign In</h2>
        <p className={styles.subtitle}>Enter detail to Sign in</p>

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
  );
}
