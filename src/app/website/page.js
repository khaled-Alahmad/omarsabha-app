import Link from "next/link";
import bgImage from "@/assets/images/website/bg-01.jpg";
import ImageHero from "@/assets/images/website/hero-section.png";
import styles from "@/assets/css/styles.module.css";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function WebsiteHome() {
  return (
    <div className={styles.home}>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${bgImage.src})`, // Use bgImage.src to get the URL
          height: "100vh",
          backgroundSize: "cover", // Optional: Cover the entire section
          backgroundPosition: "center", // Optional: Center the background
          top: "-6.5rem",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="left-hero-section">
            <h1>InstaHandi</h1>
            <h2>REQUEST, COMPARE BIDS, HIRE</h2>
            <div></div>
            <Button
              as={Link}
              className="bg-primary-300 text-primary-50 shadow"
              href="#"
              variant="flat"
            >
              Request Service Now
            </Button>
          </div>
          <div className="right-hero-section">
            <Image src={ImageHero} width={0} height={0} alt="" />
          </div>
        </div>
      </section>
      {/* Add the website flow components here */}
      <Link href="/service">Go to Services</Link>
    </div>
  );
}
