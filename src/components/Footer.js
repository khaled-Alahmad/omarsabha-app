import React from "react";
import styles from "@/assets/css/styles.module.css"; // Import CSS module
import Image from "next/image";

// Import social media icons and logo
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import logo from "@/assets/images/website/logo.png"; // Replace with your actual logo path
import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Image src={logo} alt="InstaHandi Logo" className={styles.logo} />
        <div className={styles.logoAndNav}>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/service">Service</Link>
            <Link href="/about">About Us</Link>
            <Link href="/requests">Service Requests</Link>
            <Link href="/vendors">Vendors</Link>
            <Link href="/articles">Articles</Link>
          </nav>
        </div>

        <div className={styles.socialLinks}>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitterIcon} alt="Twitter" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedinIcon} alt="LinkedIn" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebookIcon} alt="Facebook" />
          </Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Contact us:{" "}
          <a href="mailto:support@instahandi.com">support@instahandi.com</a>
        </p>
        <div className={styles.bottomRight}>
          <Link href="/terms">Terms and Conditions</Link>
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
