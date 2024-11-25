"use client";

import star from "@/assets/icons/Star 6.svg"; // Bottom wave image
import left from "@/assets/icons/left.svg"; // Bottom wave image
import right from "@/assets/icons/right.svg"; // Bottom wave image

import styles from "@/assets/css/styles.module.css"; // Import CSS module
import ImageVendors from "@/assets/images/website/vendor-image.png";
import { User } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function TestimonialsSection({ data }) {
  const [startIndex, setStartIndex] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(1); // Default to 1 for mobile

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - testimonialsToShow, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + testimonialsToShow, data.length - testimonialsToShow)
    );
  };
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
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>Testimonials</h2>
      <span className={styles.servicesDesc}>What Our Customers Are Saying</span>
      <div className={styles.testimonialsWrapper}>
        <button
          onClick={handlePrev}
          className={`${styles.arrowButtonLeft} me-4`}
          disabled={startIndex === 0}
        >
          <Image height={40} width={40} src={left} alt="Left Arrow" />
        </button>

        <div className={styles.testimonialsItems}>
          {data
            .slice(startIndex, startIndex + testimonialsToShow)
            .map((item) => (
              <div key={item.id} className={styles.testimonialsItemsCard}>
                <div className={styles.vendorLine}>
                  {Array.from({ length: item.rating }, (_, index) => (
                    <Image
                      key={index}
                      src={star}
                      alt="Star Icon"
                      className="me-1"
                    />
                  ))}
                </div>
                <div className={styles.descVendor}>{item.message}</div>
                <User
                  name={item.client_name}
                  description={item.job}
                  avatarProps={{ src: item.profile_photo }}
                  classNames={{
                    name: styles.nameAvatar,
                    description: styles.descAvatar,
                  }}
                />
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className={`${styles.arrowButtonRight} ms-4`}
          disabled={startIndex >= data.length - testimonialsToShow}
        >
          <Image height={40} width={40} src={right} alt="Right Arrow" />
        </button>
      </div>
    </section>
  );
}
