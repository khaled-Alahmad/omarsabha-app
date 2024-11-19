import Link from "next/link";

import icons from "@/assets/icons/Icon.png"; // Bottom wave image

import styles from "@/assets/css/styles.module.css"; // Import CSS module
import ImageVendors from "@/assets/images/website/vendors.png"; // Bottom wave image

import { Button, Divider } from "@nextui-org/react";
import { fetchData } from "@/context/apiHelper";
// async function getVendors() {
//   return data.data.vendors;
// }

export default async function OurVendors() {
  const data = await fetchData("home-data");

  const vendors = await data.data.vendors;
  console.log(vendors);

  return (
    <section className={styles.vendorsSection}>
      <h2 className={styles.servicesTitle}>Our Vendors</h2>
      <span className={styles.servicesDesc}>
        At InstaHandi, we pride ourselves on partnering with the best
        professionals in the industry. Our vendors are highly skilled,
        thoroughly vetted, and committed to delivering exceptional service.
      </span>
      <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
        {vendors.map((item) => {
          return (
            <div
              key={item.id}
              className={`${styles.VendorItemsCard} lg:col-span-3 col-span-12`}
            >
              <div className={styles.ImageVendor}>
                <img
                  src={item.user?.profile_photo}
                  alt="Frame Image"
                  className="mb-2"
                  style={{
                    width: "18rem",
                    height: "14rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.titleVendor}>
                {item.user?.first_name} {item.user?.last_name}
              </div>
              <Divider className="my-2" />

              <div className={styles.descVendor}>{item.user?.description}</div>
              <div className={styles.vendorLine}>
                <img src={icons.src} alt="Frame Image" className="me-2" />
                {item.years_experience} Years in Business
              </div>
              <div className={styles.bottomVendorCard}>
                <Button as={Link} href="#" className={styles.vendorCardButton}>
                  View Profile
                </Button>
                <span className={styles.ratingVendorCard}>
                  {item.average_rating}/Rating⭐
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Button as={Link} href="/vendors" className={styles.ctaButton}>
        View All Vendors
      </Button>
    </section>
  );
}
