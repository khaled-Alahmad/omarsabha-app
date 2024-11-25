import React from "react";
import styles from "@/assets/css/styles.module.css"; // Import CSS module
import { Button, Input } from "@nextui-org/react";
import imageLogin from "@/assets/images/auth/login-image.png";
import HelpSection from "./HelpSection";
import { fetchData } from "@/context/apiHelper";

export default async function HelpSupport() {
  const data = await fetchData("public/home-data");
  const faqs = data.data.faqs || [];

  return (
    <div className={styles.container}>
      <HelpSection faqs={faqs} />
      <section className={styles.contactForm}>
        <div className={styles.imageSection}>
          <img src={imageLogin.src} alt="Home Image" className={styles.image} />
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.title}>Contact Foam</h2>
          {/* <p className={styles.subtitle}>Enter detail to Sign in</p> */}

          <form className={styles.form}>
            <Input
              isClearable
              variant="bordered"
              label="First Name"
              placeholder="First Name"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isClearable
              variant="bordered"
              label="Last Name"
              placeholder="Last Name"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              isClearable
              variant="bordered"
              label="Phone Number"
              placeholder="Phone Number"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isClearable
              variant="bordered"
              label="Email Address"
              placeholder="Email Address"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              variant="solid"
              color="primary"
              className={styles.signUpButton}
              style={{ width: "fit-content", padding: " 0.625rem 1.125rem" }}
            >
              Send Details
            </Button>
          </form>
        </div>
      </section>
      <section className={styles.supportSection}>
        <div className={styles.supportText}>
          <h3>Need More Help?</h3>
          <p>Chat With Support Now.</p>
        </div>
        <div className={styles.supportButton}>
          <Button>Chat Now</Button>
        </div>
      </section>
    </div>
  );
}
