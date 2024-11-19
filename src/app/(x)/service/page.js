// app/website/services/page.js
"use client";
import styles from "@/assets/css/styles.module.css";
import bgImage from "@/assets/images/website/bg-our-service.png"; // Background image
import ImageBt from "@/assets/images/website/Vector 1.png"; // Bottom wave image
import CardService from "@/components/CardService";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import service1 from "@/assets/icons/Icon.svg"; // Bottom wave image
import google from "@/assets/images/website/Mobile app store badge.svg"; // Bottom wave image
import google1 from "@/assets/images/website/Mobile app store badge (1).svg"; // Bottom wave image
import google2 from "@/assets/images/website/Mobile app store badge (2).svg"; // Bottom wave image
import ImageApp from "@/assets/images/website/Group 1410088879.png"; // Hero image

export default function ServicesPage() {
  // useEffect(() => {
  //   document.title = "Our Service";
  // }, []);
  const data = [
    {
      id: 1,
      title: "Plumbing services",
      desc: "Drain pipe leaking, pipe clogged, replace the pipe line",
      img: service1,
    },
    {
      id: 2,
      title: "Mold Removal",
      desc: "Removing and cleaning mildew, Restoration and Prevention",
      img: service1,
    },
    {
      id: 3,
      title: "Appliance Repair",
      desc: "repair of washing machines, refrigerators, Air conditioner, etc",
      img: service1,
    },
    {
      id: 4,
      title: "Bathroom Remodeling",
      desc: "Design and Consulting, installation, Repairing, tile repair",
      img: service1,
    },
    {
      id: 5,
      title: "Locksmith",
      desc: "Lock Installation and Repair, Duplication, Lock Rekeying",
      img: service1,
    },
    {
      id: 6,
      title: "Furniture assembly",
      desc: "Removing and cleaning mildew, Restoration and Prevention",
      img: service1,
    },
    {
      id: 7,
      title: "Painting",
      desc: "repair of washing machines, refrigerators, Air conditioner, etc",
      img: service1,
    },
    {
      id: 8,
      title: "Painting",
      desc: "Design and Consulting, installation, Repairing, tile repair",
      img: service1,
    },
  ];
  return (
    <>
      <section
        className={styles.ourService}
        style={{
          backgroundImage: `url(${bgImage.src})`, // Background image
        }}
      >
        <div className="container">
          <div className={styles.ourServiceText}>
            <h1>Our Services</h1>
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
      <section className={styles.servicesSectionSearch}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <div className={styles.leftSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  d="M6.84995 1.7C5.81662 1.7 4.87495 1.95 4.02495 2.45C3.17495 2.95 2.49162 3.63333 1.97495 4.5C1.45828 5.36667 1.19995 6.30833 1.19995 7.325C1.19995 8.34167 1.45828 9.28333 1.97495 10.15C2.49162 11.0167 3.17495 11.7 4.02495 12.2C4.87495 12.7 5.81662 12.95 6.84995 12.95C7.48328 12.95 8.09995 12.8417 8.69995 12.625C9.29995 12.4083 9.84995 12.1167 10.35 11.75L12.7 14.05C12.8 14.1833 12.9416 14.25 13.125 14.25C13.3083 14.25 13.4583 14.1917 13.575 14.075C13.6916 13.9583 13.75 13.8083 13.75 13.625C13.75 13.4417 13.6833 13.3 13.55 13.2L11.25 10.85C11.6166 10.35 11.9083 9.8 12.125 9.2C12.3416 8.6 12.45 7.98333 12.45 7.35C12.45 6.31667 12.2 5.36667 11.7 4.5C11.2 3.63333 10.5166 2.95 9.64995 2.45C8.78328 1.95 7.84995 1.7 6.84995 1.7ZM6.84995 2.95C7.64995 2.95 8.38328 3.15 9.04995 3.55C9.71662 3.95 10.2416 4.48333 10.625 5.15C11.0083 5.81667 11.2 6.54167 11.2 7.325C11.2 8.10833 11.0083 8.84167 10.625 9.525C10.2416 10.2083 9.71662 10.7417 9.04995 11.125C8.38328 11.5083 7.64995 11.7 6.84995 11.7C6.04995 11.7 5.31662 11.5083 4.64995 11.125C3.98328 10.7417 3.44995 10.2083 3.04995 9.525C2.64995 8.84167 2.44995 8.10833 2.44995 7.325C2.44995 6.54167 2.64995 5.81667 3.04995 5.15C3.44995 4.48333 3.98328 3.95 4.64995 3.55C5.31662 3.15 6.04995 2.95 6.84995 2.95Z"
                  fill="#A6A6A6"
                />
              </svg>
              <input type="text" placeholder="Search for services" />
            </div>

            <Button as={Link} href="#" className={styles.searchButton}>
              Search
            </Button>
          </div>
        </div>
        <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
          {data.map((item) => {
            return (
              // <div
              //   key={item.id}
              //   className={`${styles.servicesItemsCard} lg:col-span-3 col-span-6`}
              // >
              //   <div className={styles.ImageService}>
              //     <Image src={service1} alt="Frame Image" className="mb-2" />
              //   </div>
              //   <div className={styles.titleService}>{item.title}</div>
              //   <div className={styles.descService}>{item.desc}</div>
              // </div>
              <CardService item={item} key={item.id} />
            );
          })}
        </div>
        {/* <Button as={Link} href="#" className={styles.ctaButton}>
          View All Services
        </Button> */}
      </section>
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
          <Button as={Link} href="#" className={`${styles.ctaButton} mb-2`}>
            Download App
          </Button>
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
      <section className={styles.cutSection}></section>

      <section className="lg:flex flex-col align-middle items-center justify-start lg:ps-12  text-center lg:pt-8 pt-4  ps-8 ">
        <div className={styles.containerGetOurService}>
          <span className={styles.subTitleGetOurService}>How It Works</span>
          <h3 className={styles.titleGetOurService}>How To Get Our Service</h3>
          <p className={styles.descOurService}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className={styles.septsGetOurService}>
          <div className={styles.CardSeptsGetOurService}>
            <span className={styles.subTitleCardSeptsGetOurService}>
              Step 1
            </span>
            <h3 className={styles.titleCardSeptsGetOurService}>
              Choose Service Requests
            </h3>
            <p className={styles.descCardSeptsGetOurService}>
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className={styles.CardSeptsGetOurService}>
            <span className={styles.subTitleCardSeptsGetOurService}>
              Step 2
            </span>
            <h3 className={styles.titleCardSeptsGetOurService}>
              Summit request
            </h3>
            <p className={styles.descCardSeptsGetOurService}>
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className={styles.CardSeptsGetOurService}>
            <span className={styles.subTitleCardSeptsGetOurService}>
              Step 3
            </span>
            <h3 className={styles.titleCardSeptsGetOurService}>Hire</h3>
            <p className={styles.descCardSeptsGetOurService}>
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
        </div>
      </section>
      <section
        className={`lg:flex lg:flex-row flex-col align-middle items-center justify-start lg:ps-12  text-center lg:pt-8 py-4  ps-8 ${styles.sellSection}`}
      >
        <div className={styles.containerSell}>
          <h2 className={styles.sellTitle}>Start Selling your Service N0w!</h2>
          <p className={styles.sellDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since tLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&apos;s standard
            dummy text ever since tLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since t
          </p>
        </div>
        <div className={styles.sellButton}>
          <Button
            as={Link}
            href="#"
            className={`${styles.ctaButton} mb-2`}
            // style={{ flex: "1" }}
          >
            Sign Up as Vendor
          </Button>
        </div>
      </section>
      <section className={styles.cutSectionTow}></section>
    </>
  );
}
