"use client";
import Link from "next/link";

import Frame3 from "@/assets/images/website/Frame (3).svg"; // Bottom wave image
import Frame4 from "@/assets/images/website/Frame (4).svg"; // Bottom wave image
import Frame6 from "@/assets/images/website/Frame (6).svg"; // Bottom wave image

import styles from "@/assets/css/styles.module.css"; // Import CSS module

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export const VendorSingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setConfirmIsVisible(!confirmIsVisible);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      toast.error("please agree to the Terms and Conditions!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
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

      if (response.data.success) {
        const expiresIn7Days = new Date();
        expiresIn7Days.setDate(expiresIn7Days.getDate() + 1);
        setCookie("emailToConfirm", email, {
          expires: expiresIn7Days,
          path: "/",
        });
        toast.success(response.data.message);
        router.push("/auth/verification");
      }
    } catch (error) {
      // console.error("Registration error:", error);
      // alert("Failed to register. Please try again.");
      toast.error(error.response.data.message);
      setEmail("");
      setConfirmPassword("");
      setPassword("");
    }
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authToken = getCookie("authToken"); // Synchronously check the cookie
  useEffect(() => {
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [authToken]);

  return (
    <section className={styles.makeAppointment}>
      <div className={styles.leftSection}>
        <div className={styles.serviceLine}>
          <Image src={Frame3} alt="Frame Image" className="me-4" />
          Get job leads 100% free.
        </div>
        <div className={styles.serviceLine}>
          <Image src={Frame4} alt="Frame Image" className="me-4" />
          Grow your business with verified money backed service requests.
        </div>
        <div className={styles.serviceLine}>
          <Image src={Frame6} alt="Frame Image" className="me-4" />
          Pay small fee only when you win a job.
        </div>
      </div>
      <div className={styles.rightSection}>
        {!isAuthenticated && (
          <>
            <Card className={styles.cardServiceAppointment}>
              <CardHeader>
                <h4 className={styles.cardServiceAppointmentTitle}>
                  Become a service provider
                </h4>
              </CardHeader>
              <CardBody className={`${styles.customCardBody}`}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <Input
                    isClearable
                    required
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
                    required
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
                    required
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
                    color="primary"
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

                  <div className="mb-4">
                    <p className={styles.bottomTextCard}>
                      Already a member?
                      <Link
                        href="/auth/sign-in/vendor"
                        className={styles.bottomTextCardT}
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </CardBody>
            </Card>
          </>
        )}
      </div>
    </section>
  );
};
