"use client"
import styles from "@/assets/css/styles.module.css";
import Image from "next/image";
import ImageBt from "@/assets/images/website/Vector 1.png";
import bgImage from "@/assets/images/website/bg-our-service.png";
import { Button, Divider, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import ImageVendors from "@/assets/images/website/vendors.png";
import icons from "@/assets/icons/Icon.png";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import google from "@/assets/images/website/Mobile app store badge.svg";
import google1 from "@/assets/images/website/Mobile app store badge (1).svg";
import google2 from "@/assets/images/website/Mobile app store badge (2).svg";
import ImageApp from "@/assets/images/website/Group 1410088879.png";
import { useState } from "react";
import VendorDetails from "@/components/vendors/VendorDetails";
import { fetchData } from "@/context/apiHelper";
import GetTheApp from "../website/@home/get-the-app/page";
import StepGetService from "./@steps/page";

export default function VendorHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const filters = { status: "active", page: 1 };
  const data = fetchData("vendors", filters);
  console.log("Fetched Data:", data);
  const dataTow = [
    {
      id: 1,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 2,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 3,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 4,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 5,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 6,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 7,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 8,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 9,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 10,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 11,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 12,
      title: "Kahraman construction",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors,
      rating: "4.9",
    },
  ];
  const services = [
    { key: "1", label: "Service 1" },
    { key: "2", label: "Service 2" },
    { key: "3", label: "Service 3" },
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
            <h1>Our Service Providers</h1>
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
      <section className={styles.vendorsSection}>
        <div className={styles.hederVendorsSection}>
          <h2 className={`${styles.servicesTitle} flex-1`}>
            Professional Vendors
          </h2>
          <div className={styles.filterVendorContainer}>
            <Input
              // label="Search"
              isClearable
              size="lg"
              radius="md"
              className="me-2 max-w-xs  "
              classNames={{
                label: "text-black/100 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "ms-2 border-l-2 border-l-slate-400",
                  "placeholder:text-transparent-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "bg-transparent",
                  "dark:bg-transparent",
                  "border-2",

                  "!cursor-text",
                ],
              }}
              placeholder="Search by names"
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Select
              placeholder="Filter by Services"
              size="lg"
              className="max-w-xs  "
              radius="md"
              classNames={{
                base: "bg-transparent",
                label: "color-primary",
                trigger: "bg-transparent border-2",

                mainWrapper: "bg-transparent  text-slate-400",
              }}
            >
              {services.map((animal) => (
                <SelectItem key={animal.key} value={animal.key}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        ;
        <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
          {dataTow.map((item) => {
            return (
              <div
                key={item.id}
                className={`${styles.VendorItemsCard} lg:col-span-3 col-span-12`}
              >
                <div className={styles.ImageVendor}>
                  <Image
                    src={ImageVendors}
                    alt="Frame Image"
                    className="mb-2"
                  />
                </div>
                <div className={styles.titleVendor}>{item.title}</div>
                <Divider className="my-2" />

                <div className={styles.descVendor}>{item.desc}</div>
                <div className={styles.vendorLine}>
                  <Image src={icons} alt="Frame Image" className="me-2" />
                  10-20 Years in Business
                </div>
                <div className={styles.bottomVendorCard}>
                  <Button
                    // as={Link}
                    // href="#"
                    onClick={() => {
                      handleClick();
                    }}
                    className={styles.vendorCardButton}
                  >
                    View Profile
                  </Button>
                  <span className={styles.ratingVendorCard}>
                    {item.rating}/Rating⭐
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Button as={Link} href="#" className={styles.ctaButton}>
          View All Vendors
        </Button> */}
      </section>
      <StepGetService />
      <GetTheApp />
      <section className={styles.cutSection}></section>
      <section className={styles.cutSectionTow}></section>
      <VendorDetails
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen} // Pass the state handler to manage the modal
      />
    </>
  );
}
