import Image from "next/image";
import { Divider, Button } from "@nextui-org/react";
import styles from "@/assets/css/styles.module.css";
import icons from "@/assets/icons/Icon.png";
import ImageVendors from "@/assets/images/website/vendors.png";

export default function VendorsList({ vendors }) {
  return (
    <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
      {vendors.map((vendor) => (
        <div
          key={vendor.id}
          className={`${styles.VendorItemsCard} lg:col-span-3 col-span-12`}
        >
          <div className={styles.ImageVendor}>
            <Image
              src={vendor.img || ImageVendors}
              alt={vendor.title}
              className="mb-2"
            />
          </div>
          <div className={styles.titleVendor}>{vendor.title}</div>
          <Divider className="my-2" />
          <div className={styles.descVendor}>{vendor.desc}</div>
          <div className={styles.vendorLine}>
            <Image src={icons} alt="Experience Icon" className="me-2" />
            10-20 Years in Business
          </div>
          <div className={styles.bottomVendorCard}>
            <Button className={styles.vendorCardButton}>View Profile</Button>
            <span className={styles.ratingVendorCard}>
              {vendor.rating}/Rating⭐
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
