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
import { getCookie } from "cookies-next";

export const VendorSingUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
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
                <div className="mb-4">
                  <Input
                    type="email"
                    label="Email"
                    className={`${styles.inputField} custom-input`}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Password"
                    // placeholder="Enter your password"
                    className={`${styles.inputField} custom-input`}
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
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Confirm Password"
                    // placeholder="Confirm your password"
                    className={`${styles.inputField} custom-input`}
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
                  />
                </div>
                <div className="mb-4">
                  <Checkbox
                    color="warning"
                    isSelected={isSelected} // This will control whether the checkbox is checked
                    onValueChange={setIsSelected} // This will update the state when the checkbox is clicked
                  >
                    I agree to the Terms and Conditions
                  </Checkbox>
                </div>
                <div className="mb-4">
                  <Button as={Link} href="#" className={styles.signUpButton}>
                    Sign Up
                  </Button>
                </div>
                <div className="mb-4">
                  <p className={styles.bottomTextCard}>
                    Already a member?
                    <Link href="/#" className={styles.bottomTextCardT}>
                      Sign In
                    </Link>
                  </p>
                </div>
              </CardBody>
            </Card>
          </>
        )}
      </div>
    </section>
  );
};
