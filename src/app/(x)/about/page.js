import Image from "next/image";
import ImageBt from "@/assets/images/website/Vector 1.png"; // Bottom wave image
import styles from "@/assets/css/styles.module.css";
import bgImage from "@/assets/images/website/bg-about-us.webp"; // Background image
import Image1 from "@/assets/images/website/about-us-first.png"; // Bottom wave image
import Image2 from "@/assets/images/website/about-us-second.png"; // Bottom wave image
import Image3 from "@/assets/images/website/about-us-third.png"; // Bottom wave image
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

// app/website/about/page.js
export default function AboutPage() {
  return (
    <>
      <section
        className={styles.aboutUs}
        style={{
          backgroundImage: `url(${bgImage.src})`, // Background image
        }}
      >
        <div className="container">
          <div
            className={styles.ourServiceText}
            style={{ position: "relative", zIndex: 2 }}
          >
            <h1>About Us</h1>
            <p>
              At InstaHandi, we offer a wide range of home services to meet all
              your needs. Our platform connects you with skilled professionals
              who are ready to tackle any project, big or small. Explore our
              services below:
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
        </div>

        {/* Services content */}
      </section>
      <section className="lg:flex flex-col align-middle items-center justify-start lg:ps-12  text-center lg:pt-8 pt-4  ps-8 ">
        <section className={styles.aboutUsFirst}>
          <div className={styles.imageSectionAboutUs}>
            <Image
              src={Image1}
              alt="Bottom Wave Image"
              layout="responsive"
              // objectFit="cover"
            />
          </div>
          <div className={styles.textSectionAboutUs}>
            <p className={styles.descTextAboutUs}>
              At InstaHandi, our mission is to create a seamless and trustworthy
              platform where homeowners can easily connect with skilled
              professionals for all their service needs. We understand that
              finding reliable service providers can be a daunting task, whether
              it&apos;s for a small home repair, a major renovation, or regular
              maintenance tasks. That&apos;s why we&apos;ve built a platform that
              prioritizes convenience, quality, and transparency.
              <br /> <br /> For homeowners, InstaHandi offers a way to quickly
              find and compare bids from pre-vetted professionals, ensuring that
              every project is completed by a qualified expert. Our goal is to
              eliminate the hassle of searching for service providers,
              negotiating prices, and managing schedules by providing a one-stop
              solution that meets all of your home service needs.At InstaHandi,
              our mission is to create a seamless and trustworthy platform where
              homeowners can easily connect with skilled professionals for all
              their service needs. We understand that finding reliable service
              providers can be a daunting task, whether it&apos;s for a small home
              repair, a major renovation, or regular maintenance tasks. That&apos;s
              why we&apos;ve built a platform that prioritizes convenience, quality,
              and transparency.
              <br />
              <br /> For homeowners, InstaHandi offers a way to quickly find and
              compare bids from pre-vetted professionals, ensuring that every
              project is completed by a qualified expert. Our goal is to
              eliminate the hassle of searching for service providers,
              negotiating prices, and managing schedules by providing a one-stop
              solution that meets all of your home service needs.
            </p>
          </div>
        </section>
        <section className={styles.aboutUsFirst}>
          <div className={styles.textSectionAboutUs}>
            <h2 className={styles.titleTextAboutUs}>Our Mission</h2>
            <p className={styles.descTextAboutUs}>
              At InstaHandi, our mission is to create a seamless and trustworthy
              platform where homeowners can easily connect with skilled
              professionals for all their service needs. We understand that
              finding reliable service providers can be a daunting task, whether
              it&apos;s for a small home repair, a major renovation, or regular
              maintenance tasks. That&apos;s why we&apos;ve built a platform that
              prioritizes convenience, quality, and transparency. <br />
              <br />
              For homeowners, InstaHandi offers a way to quickly find and
              compare bids from pre-vetted professionals, ensuring that every
              project is completed by a qualified expert. Our goal is to
              eliminate the hassle of searching for service providers,
              negotiating prices, and managing schedules by providing a one-stop
              solution that meets all of your home service needs.At InstaHandi,
              our mission is to create a seamless and trustworthy platform where
              homeowners can easily connect with skilled professionals for all
              their service needs. We understand that finding reliable service
              providers can be a daunting task, whether it&apos;s for a small home
              repair, a major renovation, or regular maintenance tasks. That&apos;s
              why we&apos;ve built a platform that prioritizes convenience, quality,
              and transparency.
            </p>
          </div>
          <div className={styles.imageSectionAboutUs}>
            <Image
              src={Image2}
              alt="Bottom Wave Image"
              // layout="layout"

              // objectFit="cover"
            />
          </div>
        </section>
        <section className={styles.aboutUsFirst}>
          <div className={styles.imageSectionAboutUs}>
            {" "}
            <Image
              src={Image3}
              alt="Bottom Wave Image"
              // layout="responsive"
              // objectFit="cover"
            />
          </div>
          <div className={styles.textSectionAboutUs}>
            <h2 className={styles.titleTextAboutUs}>Our Vision</h2>
            <p className={styles.descTextAboutUs}>
              At InstaHandi, our mission is to create a seamless and trustworthy
              platform where homeowners can easily connect with skilled
              professionals for all their service needs. We understand that
              finding reliable service providers can be a daunting task, whether
              it&apos;s for a small home repair, a major renovation, or regular
              maintenance tasks. That&apos;s why we&apos;ve built a platform that
              prioritizes convenience, quality, and transparency.
              <br />
              <br /> For homeowners, InstaHandi offers a way to quickly find and
              compare bids from pre-vetted professionals, ensuring that every
              project is completed by a qualified expert. Our goal is to
              eliminate the hassle of searching for service providers,
              negotiating prices, and managing schedules by providing a one-stop
              solution that meets all of your home service needs.At InstaHandi,
              our mission is to create a seamless and trustworthy platform where
              homeowners can easily connect with skilled professionals for all
              their service needs. We understand that finding reliable service
              providers can be a daunting task, whether it&apos;s for a small home
              repair, a major renovation, or regular maintenance tasks. That&apos;s
              why we&apos;ve built a platform that prioritizes convenience, quality,
              and transparency.
            </p>
          </div>
        </section>
      </section>

      <section
        className={`lg:flex lg:flex-row flex-col align-middle items-center justify-center lg:px-12  text-center lg:py-20 py-8  px-8 ${styles.sellSection}`}
      >
        <div className={styles.containerSell}>
          <h2 className={styles.sellTitle}>Get the latest Updates</h2>
        </div>
        <div className={`${styles.sellButton} flex items-stretch   `}>
          <Input
            type="email"
            label="Enter your email"
            className={` ${styles.customInput2} me-2`}
          />
          <Button
            as={Link}
            href="#"
            className={`${styles.ctaButton} h-auto`}
            // style={{ flex: "1" }}
          >
            Subscribe
          </Button>
        </div>
      </section>
      <section className={styles.cutSectionTow}></section>
    </>
  );
}
