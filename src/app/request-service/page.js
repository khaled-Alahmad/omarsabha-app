import React from "react";
import styles from "./ServiceRequestList.module.css";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import { Input } from "@nextui-org/react";
import serviceImage from "@/assets/images/vendor/service-request.png";

export default function ServiceRequestList() {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <Input
          // label="Search"
          isClearable
          size="lg"
          radius="md"
          className="me-2 lg:max-w-xs  "
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
          placeholder="Search by Zip code"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <button>Filter by Budget</button>
        <button>Filter by Location</button>
        <button>Filter by Category</button>
      </div>

      <div className={styles.content}>
        <div className={styles.requestList}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={styles.requestCard}>
              <img
                src={serviceImage.src}
                alt="Service Request"
                className={styles.image}
              />
              <div className={styles.requestDetails}>
                <h3>Light switch replacement</h3>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>
                <div className={styles.requestDetailsSection}>
                  <p>
                    <strong>Payment Type:</strong> Hourly-rate
                  </p>
                  <p>
                    <strong>Hourly Rate:</strong> $10 hourly
                  </p>
                  <p>
                    <strong>Desired start date:</strong> 10/10/2024
                  </p>
                  <p>
                    <strong>Complete Date:</strong> 10/10/2024
                  </p>
                  <p>
                    <strong>Location:</strong> Denver, CO, USA
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
