// app/website/services/page.js
"use client";
import styles from "@/assets/css/service/service.module.css";
import bgImage from "@/assets/images/website/bg-our-service.png"; // Background image
import ImageBt from "@/assets/images/website/Vector 1.png"; // Bottom wave image
import Image from "next/image";
import { useEffect } from "react";

export default function ServicesPage() {
  // useEffect(() => {
  //   document.title = "Our Service";
  // }, []);
  return (
    <section
      className={styles.ourService}
      style={{
        backgroundImage: `url(${bgImage.src})`, // Background image
      }}
    >
      <div className={styles.ourServiceText}>
        <h1>Our Services</h1>
        <p>
          At InstaHandi, we offer a wide range of home services to meet all your
          needs. Our platform connects you with skilled professionals who are
          ready to tackle any project, big or small. Explore our services below:
        </p>
      </div>
      <div className={styles["bottom-wave"]}>
        <Image
          src={ImageBt}
          alt="Bottom Wave Image"
          layout="responsive"
          // objectFit="cover"
        />
      </div>
      {/* Services content */}
    </section>
  );
}
