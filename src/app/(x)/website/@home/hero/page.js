"use client";
import Link from "next/link";
import bgImage from "@/assets/images/website/bg-02.png"; // Background image
import ImageHero from "@/assets/images/website/image 159.png"; // Hero image
import ImageBt from "@/assets/images/website/Vector 1.png"; // Bottom wave image

import Frame from "@/assets/images/website/Frame.svg"; // Bottom wave image
import Frame1 from "@/assets/images/website/Frame (1).svg"; // Bottom wave image
import Frame2 from "@/assets/images/website/Frame (2).svg"; // Bottom wave image

import styles from "@/assets/css/styles.module.css"; // Import CSS module

import { Button } from "@nextui-org/react";
import Image from "next/image";
import ServiceRequestForm from "@/components/vendor/service-request/ServiceRequestForm";
import { useState } from "react";
export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${bgImage.src})`, // Background image
      }}
    >
      {/* <div className="container"> */}
      <div className={styles.heroText}>
        <h1>InstaHandi</h1>
        <h2>REQUEST, COMPARE BIDS, HIRE</h2>
        <ul>
          <li className="flex align-middle items-center mb-5">
            <Image src={Frame} alt="Frame Image" className="me-4" />
            Have all the vendors in your City compete to win your business.
          </li>
          <li className="flex align-middle items-center mb-5">
            <Image src={Frame1} alt="Frame Image" className="me-4" />
            Free quality service providers hiring.
          </li>
          <li className="flex align-middle items-center mb-5">
            <Image src={Frame2} alt="Frame Image" className="me-4" />
            Best deal guarantee.
          </li>
        </ul>
        <Button
          // as={Link}
          // href="#"
          className={styles.ctaButton}
          onPress={() => setIsModalOpen(true)}
        >
          Request Service Now
        </Button>
      </div>
      <div className={styles.heroImage}>
        <Image src={ImageHero} alt="Hero Image" layout="responsive" />
      </div>
      {/* </div> */}

      {/* Bottom wave image */}
      <div className={styles["bottom-wave"]}>
        <Image
          src={ImageBt}
          alt="Bottom Wave Image"
          layout="responsive"
          // objectFit="cover"
        />
      </div>
      <ServiceRequestForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
