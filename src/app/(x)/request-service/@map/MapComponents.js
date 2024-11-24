import React from "react";
import styles from "../ServiceRequestList.module.css";

export default function MapComponents() {
  return (
    <div className={styles.map}>
      {/* You can embed a Google Map iframe here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509162!2d144.9537353153189!3d-37.81627974202105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1aaff%3A0xb1f27d54c8e47874!2sFederation+Square!5e0!3m2!1sen!2sau!4v1612517782675!5m2!1sen!2sau"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className={styles.mapIframe}
      ></iframe>
    </div>
  );
}
