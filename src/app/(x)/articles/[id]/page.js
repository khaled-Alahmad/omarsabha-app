// app/website/contact/page.js
"use client";
import styles from "@/assets/css/styles.module.css";
import articleImage from "@/assets/images/website/articel-details-first.webp"; // Background image
import Image from "next/image";
import left from "@/assets/icons/left-icon.png"; // Bottom wave image
import right from "@/assets/icons/right-icon.png"; // Bottom wave image
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons/ArrowIcon";
import ImageVendors from "@/assets/images/website/vendors.png"; // Bottom wave image

export default function ArticleDetailsPage() {
  const [startIndex, setStartIndex] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(1); // Default to 1 for mobile
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - testimonialsToShow, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + testimonialsToShow, dataTow.length - testimonialsToShow)
    );
  };
  const dataTow = [
    {
      id: 1,
      title: "Seasonal Crafts for Kids: Fun Projects for Every Holiday",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 2,
      title: "Seasonal Crafts for Kids: Fun Projects for Every Holiday",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 3,
      title: "Seasonal Crafts for Kids: Fun Projects for Every Holiday",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 4,
      title: "Kahraman construction",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 5,
      title: "Seasonal Crafts for Kids: Fun Projects for Every Holiday",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 6,
      title: "Seasonal Crafts for Kids: Fun Projects for Every Holiday",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 7,
      title: "Seasonal Crafts for Kids: Fun Projects for Every Holiday",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
    {
      id: 8,
      title: "Kahraman construction",
      desc: "Looking for ways to keep your kids engaged during the holidays? Our collection of seasonal crafts for kids is perfect for every occasion. These easy and fun projects will bring out their creativity and keep them busy.",
      img: ImageVendors,
      rating: "4.9",
    },
  ];
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
      <section className={styles.ArticleDetailsSection}>
        <div className={styles.ArticleDetailsDate}>
          <span>Published On:</span>
          <p>16/10/2024</p>
        </div>
        <h1 className={styles.ArticleDetailsTitle}>
          The Ultimate Guide to DIY Home Décor or guide.
        </h1>
        <h6 className={styles.ArticleDetailsSubTitle}>
          Transform your living space with these easy and affordable DIY home
          decor ideas.
        </h6>

        <p className={styles.ArticleDetailsDesc}>
          Introduction: Looking to spruce up your home without breaking the
          bank? Our ultimate guide to DIY home decor is here to help! From
          upcycling old furniture to creating your own wall art, we have
          gathered the best ideas and tips to make your home uniquely yours.
        </p>
        <p className={styles.ArticleDetailsDesc}>
          <b className={styles.ArticleDetailsSubTitle}> sections:</b>
          <br />
          Upcycled Furniture: How to give your old furniture a new lease on
          life.
          <br />
          Wall Art: Creative and easy wall art projects you can do in a weekend.
          <br />
          Handmade Textiles: Learn to make your own cushions, throws, and
          curtains.
          <br />
          Lighting Solutions: DIY lamps and light fixtures to brighten up your
          space.
          <br />
        </p>
        <Image
          src={articleImage}
          alt="Frame Image"
          //   layout="responsive"
          style={{
            height: "29rem",
            width: "100%",
            objectFit: "cover",
            borderRadius: "0.75rem",
          }}
        />
        <p className={styles.ArticleDetailsDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <p className={styles.ArticleDetailsDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <p className={styles.ArticleDetailsDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <p className={styles.ArticleDetailsDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <div className={styles.ArticleDetailsSectionTow}>
          <div className={styles.ArticleDetailsSectionTowContent}>
            <p className={styles.ArticleDetailsDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <br />
            <br />

            <p className={styles.ArticleDetailsDesc}>
              Sections:
              <br />
              Upcycled Furniture: How to give your old furniture a new lease on
              life. Wall Art: Creative and easy wall art projects you can do in
              a weekend. Handmade Textiles: Learn to make your own cushions,
              throws, and curtains. Lighting Solutions: DIY lamps and light
              fixtures to brighten up your space.
            </p>
          </div>
          <div className={styles.ArticleDetailsSectionTowImage}>
            <Image
              src={articleImage}
              alt="Frame Image"
              //   layout="responsive"
              style={{
                // height: "29rem",
                // width: "100%",
                objectFit: "cover",
                borderRadius: "0.75rem",
              }}
            />
          </div>
        </div>
        <p className={styles.ArticleDetailsDesc}>
          <b className={styles.ArticleDetailsSubTitle}> Conclusion:</b> <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <div className={styles.hederMoreArticle}>
          <h2 className={styles.moreTextArticle}>More Articles</h2>
          <div className={styles.moreTextButton}>
            <button
              onClick={handlePrev}
              className={` me-4`}
              disabled={startIndex === 0}
            >
              <Image height={40} width={40} src={left} alt="Left Arrow" />
            </button>
            <button
              onClick={handleNext}
              className={`ms-4`}
              disabled={startIndex >= dataTow.length - testimonialsToShow}
            >
              <Image height={40} width={40} src={right} alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* Left Arrow */}

        {/* Display the testimonials */}
        <div className={`${styles.servicesItems} grid  gap-4 grid-cols-12`}>
          {dataTow
            .slice(startIndex, startIndex + testimonialsToShow)
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${styles.VendorItemsCard} lg:col-span-4 col-span-12`}
                >
                  <div className={styles.ImageVendor}>
                    <Image
                      src={ImageVendors}
                      alt="Frame Image"
                      className="mb-2"
                    />
                  </div>
                  <div className={styles.titleVendor}>{item.title}</div>
                  <br className="my-2" />
                  <div className={styles.descVendor}>{item.desc}</div>

                  <div className={styles.bottomVendorCard}>
                    <Button
                      as={Link}
                      href="/articles/1"
                      className={styles.redMoreButton}
                      endContent={<ArrowIcon />}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Right Arrow */}
      </section>
    </>
  );
}
