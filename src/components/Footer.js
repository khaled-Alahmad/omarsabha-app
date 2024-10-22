import React from "react";
import styles from "@/assets/css/styles.module.css"; // Import CSS module
import Image from "next/image";

// Import social media icons and logo
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import logo from "@/assets/images/website/logo.png"; // Replace with your actual logo path
import { Divider } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Image src={logo} alt="InstaHandi Logo" className={styles.logo} />
        <div className={styles.logoAndNav}>
          <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/service">Service</a>
            <a href="/about">About Us</a>
            <a href="/requests">Service Requests</a>
            <a href="/vendors">Vendors</a>
            <a href="/articles">Articles</a>
          </nav>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Contact us:{" "}
          <a href="mailto:support@instahandi.com">support@instahandi.com</a>
        </p>
        <div className={styles.bottomRight}>
          <a href="/terms">Terms and Conditions</a>
        </div>
      </div>
      <Divider className="my-2" />
      <div className={styles.footerBottomT}>
        <p>© 2024 InstaHandi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
