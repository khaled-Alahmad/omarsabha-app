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

export default function WebsiteHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
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
      <section className={styles.makeAppointment}>
        <div className={styles.leftSection}>
          <div className={styles.serviceLine}>
            <Image src={Frame3} alt="Frame Image" className="me-4" />
            Get job leads 100% free.
          </div>
          <div className={styles.serviceLine}>
            <Image src={Frame4} alt="Frame Image" className="me-4" />
            Grow your business with verified money backed service requests.
          </div>
          <div className={styles.serviceLine}>
            <Image src={Frame6} alt="Frame Image" className="me-4" />
            Pay small fee only when you win a job.
          </div>
        </div>
        <div className={styles.rightSection}>
          <Card className={styles.cardServiceAppointment}>
            <CardHeader>
              <h4 className={styles.cardServiceAppointmentTitle}>
                Become a service provider
              </h4>
            </CardHeader>
            <CardBody className={`${styles.customCardBody}`}>
              <div className="mb-4">
                <Input
                  type="email"
                  label="Email"
                  className={`${styles.inputField} custom-input`}
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Password"
                  // placeholder="Enter your password"
                  className={`${styles.inputField} custom-input`}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Confirm Password"
                  // placeholder="Confirm your password"
                  className={`${styles.inputField} custom-input`}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
              </div>
              <div className="mb-4">
                <Checkbox
                  color="warning"
                  isSelected={isSelected} // This will control whether the checkbox is checked
                  onValueChange={setIsSelected} // This will update the state when the checkbox is clicked
                >
                  I agree to the Terms and Conditions
                </Checkbox>
              </div>
              <div className="mb-4">
                <Button as={Link} href="#" className={styles.signUpButton}>
                  Sign Up
                </Button>
              </div>
              <div className="mb-4">
                <p className={styles.bottomTextCard}>
                  Already a member?
                  <Link href="/#" className={styles.bottomTextCardT}>
                    Sign In
                  </Link>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <span className={styles.servicesDesc}>
          Need a quick fix around the house? Our skilled professionals are
          available for all types of home repairs, from fixing leaky faucets to
          repairing broken windows. With InstaHandi, you can ensure that even
          the smallest issues are addressed promptly and efficiently.
        </span>
        <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`${styles.servicesItemsCard} lg:col-span-3 col-span-6`}
              >
                <div className={styles.ImageService}>
                  <Image src={service1} alt="Frame Image" className="mb-2" />
                </div>
                <div className={styles.titleService}>{item.title}</div>
                <div className={styles.descService}>{item.desc}</div>
              </div>
            );
          })}
        </div>
        <Button as={Link} href="#" className={styles.ctaButton}>
          View All Services
        </Button>
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
      <section className={styles.vendorsSection}>
        <h2 className={styles.servicesTitle}>Our Vendors</h2>
        <span className={styles.servicesDesc}>
          At InstaHandi, we pride ourselves on partnering with the best
          professionals in the industry. Our vendors are highly skilled,
          thoroughly vetted, and committed to delivering exceptional service.
        </span>
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
                    as={Link}
                    href="#"
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
        <Button as={Link} href="#" className={styles.ctaButton}>
          View All Vendors
        </Button>
      </section>
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
    </div>
  );
}
