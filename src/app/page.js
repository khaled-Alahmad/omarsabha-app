"use client";
import Link from "next/link";
import bgImage from "@/assets/images/website/bg-02.png"; // Background image
import ImageHero from "@/assets/images/website/image 159.png"; // Hero image
import ImageApp from "@/assets/images/website/Group 1410088879.png"; // Hero image
import ImageBt from "@/assets/images/website/Vector 1.png"; // Bottom wave image
import ImageVendors from "@/assets/images/website/vendors.png"; // Bottom wave image

import Frame from "@/assets/images/website/Frame.svg"; // Bottom wave image
import Frame1 from "@/assets/images/website/Frame (1).svg"; // Bottom wave image
import Frame2 from "@/assets/images/website/Frame (2).svg"; // Bottom wave image
import Frame3 from "@/assets/images/website/Frame (3).svg"; // Bottom wave image
import Frame4 from "@/assets/images/website/Frame (4).svg"; // Bottom wave image
import Frame6 from "@/assets/images/website/Frame (6).svg"; // Bottom wave image
import google from "@/assets/images/website/Mobile app store badge.svg"; // Bottom wave image
import google1 from "@/assets/images/website/Mobile app store badge (1).svg"; // Bottom wave image
import google2 from "@/assets/images/website/Mobile app store badge (2).svg"; // Bottom wave image

import service1 from "@/assets/icons/Icon.svg"; // Bottom wave image
import icons from "@/assets/icons/Icon.png"; // Bottom wave image
import star from "@/assets/icons/Star 6.svg"; // Bottom wave image
import left from "@/assets/icons/left.svg"; // Bottom wave image
import right from "@/assets/icons/right.svg"; // Bottom wave image

import styles from "@/assets/css/styles.module.css"; // Import CSS module

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
  Input,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EyeSlashFilledIcon } from "@/components/ui/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/Icons/EyeFilledIcon";
import CardService from "@/components/CardService";
import FloatingButton from "@/components/ui/website/FloatingButton";
import ChatComponent from "@/components/ui/website/ChatComponent";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { VendorSingUp } from "./(x)/website/@home/vendor-sign-up/page";
import ServiceHome from "./(x)/website/@home/services/page";
import GetTheApp from "./(x)/website/@home/get-the-app/page";
import OurVendors from "./(x)/website/@home/our-vendors/page";

// The main Home component
export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   // Example logic to check user type (replace with actual logic)
  //   // const userFlow = getUserFlow();
  //   // if (userFlow === "vendor") {
  //   //   router.push("/vendor");
  //   // } else if (userFlow === "homeowner") {
  //   //   router.push("/homeowner");
  //   // } else if (userFlow === "client") {
  //   //   router.push("/website");
  //   // } else {
  //   //   router.push("/website"); // Default or fallback
  //   // }
  // }, [router]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
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
  ];
  const dataThree = [
    {
      id: 1,
      start: 3,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors.src,
      name: "Craig Vaccaro",
      job: "Founder and co-CEO",
    },
    {
      id: 2,
      start: 4,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors.src,
      name: "Craig Vaccaro",
      job: "Founder and co-CEO",
    },
    {
      id: 3,
      start: 5,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors.src,
      name: "Craig Vaccaro",
      job: "Founder and co-CEO",
    },
    {
      id: 4,
      start: 1,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....",
      img: ImageVendors.src,
      name: "Craig Vaccaro",
      job: "Founder and co-CEO",
    },
  ];
  const faqData = [
    {
      question: "How does InstaHandi work?",
      answer:
        "InstaHandi connects homeowners with skilled professionals for various home services. Simply create a project, receive bids from pre-vetted service providers, and choose the best option based on your needs and budget.",
    },
    {
      question: "Are the service providers on InstaHandi verified?",
      answer:
        "Yes, all service providers are pre-vetted and verified before they can offer their services on InstaHandi.",
    },
    {
      question: "How do I get quotes for my project?",
      answer:
        "You can create a project on InstaHandi, and service providers will send you their bids based on your requirements.",
    },
    {
      question: "Is there a fee to use InstaHandi?",
      answer:
        "InstaHandi is free for homeowners to use. You only pay for the services you hire.",
    },
    {
      question: "What if I’m not satisfied with the service provided?",
      answer:
        "If you’re not satisfied, you can communicate with the service provider directly, and InstaHandi will assist in finding a resolution if needed.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [startIndex, setStartIndex] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(1); // Default to 1 for mobile

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - testimonialsToShow, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + testimonialsToShow, dataThree.length - testimonialsToShow)
    );
  };

  // Adjust testimonialsToShow based on screen size
  useEffect(() => {
    const updateTestimonialsToShow = () => {
      if (window.innerWidth >= 768) {
        setTestimonialsToShow(3); // Show 3 testimonials on larger screens
      } else {
        setTestimonialsToShow(1); // Show 1 testimonial on mobile
      }
    };

    updateTestimonialsToShow(); // Set initial value
    window.addEventListener("resize", updateTestimonialsToShow); // Update on resize

    return () => window.removeEventListener("resize", updateTestimonialsToShow); // Clean up
  }, []);
  return (
    <>
      <NavBar />

      <div className={styles.home}>
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
            <Button as={Link} href="#" className={styles.ctaButton}>
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
        </section>

        <VendorSingUp />
        <ServiceHome />

        <GetTheApp />
        <section className={styles.cutSection}></section>
        <OurVendors />
        <section className={styles.servicesSection}>
          <h2 className={styles.servicesTitle}>Testimonials</h2>
          <span className={styles.servicesDesc}>
            What Our Customers Are Saying
          </span>
          <div className={styles.testimonialsWrapper}>
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className={`${styles.arrowButtonLeft} me-4`}
              disabled={startIndex === 0}
            >
              <Image height={40} width={40} src={left} alt="Left Arrow" />
            </button>

            {/* Display the testimonials */}
            <div className={styles.testimonialsItems}>
              {dataThree
                .slice(startIndex, startIndex + testimonialsToShow)
                .map((item) => (
                  <div key={item.id} className={styles.testimonialsItemsCard}>
                    <div className={styles.vendorLine}>
                      {Array.from({ length: item.start }, (_, index) => (
                        <Image
                          key={index}
                          src={star}
                          alt="Star Icon"
                          className="me-1"
                        />
                      ))}
                    </div>
                    <div className={styles.descVendor}>{item.desc}</div>
                    <User
                      name={item.name}
                      description={item.job}
                      avatarProps={{ src: item.img }}
                      classNames={{
                        name: styles.nameAvatar,
                        description: styles.descAvatar,
                      }}
                    />
                  </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className={`${styles.arrowButtonRight} ms-4`}
              disabled={startIndex >= dataThree.length - testimonialsToShow}
            >
              <Image height={40} width={40} src={right} alt="Right Arrow" />
            </button>
          </div>
        </section>
        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                  <span className={styles.toggleIcon}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className={styles.faqAnswer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Other components */}
        {/* <Link href="/service">Go to Services</Link> */}
        <FloatingButton onClick={toggleChat} />
        {isChatOpen && (
          <div
            style={{ zIndex: "9999", height: "400px" }}
            className="fixed bottom-20 right-4 bg-white-50 shadow-lg rounded-lg  w-80 transition-transform transform duration-300 ease-in-out"
          >
            <ChatComponent />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
