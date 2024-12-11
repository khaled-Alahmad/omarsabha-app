import React from "react";
import Link from "next/link";
import ImageApp from "@/assets/images/website/Group 1410088879.png"; // Hero image

import google from "@/assets/images/website/Mobile app store badge.svg"; // Bottom wave image
import google1 from "@/assets/images/website/Mobile app store badge (1).svg"; // Bottom wave image
import google2 from "@/assets/images/website/Mobile app store badge (2).svg"; // Bottom wave image

import styles from "@/assets/css/styles.module.css"; // Import CSS module

import { Button } from "@nextui-org/react";
import Image from "next/image";
export default function GetTheApp() {
  return (
    <section className="lg:flex align-middle justify-start lg:ps-12 lg:pt-8 pt-4  ps-8 ">
      <div className={styles.leftAppDownload}>
        <h2 className={styles.titleAppDownload}>
          What Are You Waiting For, Get the App Now!
        </h2>
        <p className={styles.descAppDownload}>
          Don&apos;t wait any longer to experience the convenience and
          reliability of InstaHandi. Download our app today and take the first
          step towards hassle-free home services.
        </p>
        <div className="flex gap-4 mb-4">
          <Image src={google} alt="Frame Image" className="mb-2" />
          <Image src={google1} alt="Frame Image" className="mb-2" />
          <Image src={google2} alt="Frame Image" className="mb-2" />
        </div>
        <Button className={`${styles.ctaButton} mb-2`}>Download App</Button>
      </div>
      <div className="flex-1 ">
        <Image
          // className="hidden lg:flex"
          src={ImageApp}
          alt="Hero Image"
          layout="responsive"
        />
      </div>
    </section>
  );
}
