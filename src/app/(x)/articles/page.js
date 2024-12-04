import Image from "next/image";
import ImageBt from "@/assets/images/website/Vector 1.png"; // Bottom wave image
import bgImage from "@/assets/images/website/bg-articels.webp"; // Background image
import styles from "@/assets/css/styles.module.css";
import Link from "next/link";
import { Button, Divider } from "@nextui-org/react";
import articleImage from "@/assets/images/website/articel-image.webp"; // Background image
import { ArrowIcon } from "@/components/ui/Icons/ArrowIcon";
import ImageVendors from "@/assets/images/website/vendors.png"; // Bottom wave image
import icons from "@/assets/icons/Icon.png"; // Bottom wave image
import { AppSection } from "@/components/ui/website/AppSection";

// app/website/contact/page.js
export default function ArticlesPage() {
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

  return (
    <>
      <section
        className={styles.articlesSection}
        style={{
          backgroundImage: `url(${bgImage.src})`, // Background image
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.ourServiceText}>
            <h1>Articles</h1>
            <p>
              At InstaHandi, we offer a wide range of home services to meet all
              your needs. Our platform connects you with skilled professionals
              who are ready to tackle any project, big or small. Explore our
              services below:
            </p>
          </div>
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
      <section className={styles.recentArticleSection}>
        <span className={styles.recentArticleNew}>New</span>
        <h1 className={styles.recentArticleTitle}>Recent Article</h1>
        <div className={styles.recentArticleContainer}>
          <div className={styles.recentArticleImage}>
            <Image src={articleImage} alt="Frame Image" />
          </div>
          <div className={styles.recentArticleContent}>
            <h2 className={styles.recentArticleContentTitle}>
              The Ultimate Guide to DIY Home Décor or guide.
            </h2>
            <span className={styles.recentArticleContentSubTitle}>
              Transform your living space with these easy and affordable DIY
              home decor ideas.
            </span>
            <p className={styles.recentArticleContentDesc}>
              Introduction: Looking to spruce up your home without breaking the
              bank? Our ultimate guide to DIY home decor is here to help! From
              upcycling old furniture to creating your own wall art, we have
              gathered the best ideas and tips to make your home uniquely yours
            </p>
            <Link
              href="/articles/1"
              className={styles.redMoreButton}
              endcontent={<ArrowIcon />}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.vendorsSection}>
        <h2 className={styles.servicesTitle}>Our Recent Articles</h2>
        <span className={styles.servicesDesc}>
          Introduction: Looking to spruce up your home without breaking the
          bank?
        </span>
        <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
          {dataTow.map((item) => {
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
        {/* <Button as={Link} href="#" className={styles.ctaButton}>
          View All Vendors
        </Button> */}
      </section>
      <AppSection />
      <section className={styles.cutSectionTow}></section>
    </>
  );
}
