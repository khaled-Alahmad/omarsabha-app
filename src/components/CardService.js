import React from "react";
import styles from "@/assets/css/styles.module.css"; // Import CSS module
import Image from "next/image";

function CardService({ item }) {
  return (
    <div
      //   key={item.id}
      className={`${styles.servicesItemsCard} lg:col-span-3 col-span-6`}
    >
      <div className={styles.ImageService}>
        <Image src={item.img} alt="Frame Image" className="mb-2" />
      </div>
      <div className={styles.titleService}>{item.title}</div>
      <div className={styles.descService}>{item.desc}</div>
    </div>
  );
}

export default CardService;
