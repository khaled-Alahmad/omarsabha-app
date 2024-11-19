import React from "react";
import styles from "./ServiceDetails.module.css";
import serviceImage from "@/assets/images/vendor/service-request.png";
import clientImage from "@/assets/images/vendor/client-image.png";

import { Divider } from "@nextui-org/react";

export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Replace switched</h2>

      {/* Description Section */}
      <section className={styles.section}>
        <h3 className={styles.subheader}>Description</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <div className={styles.detailsGrid}>
          <div>
            <span>Category:</span> Electrician
          </div>
          <div>
            <span>Payment Type:</span> Hourly-rate
          </div>
          <div>
            <span>Flat Rate Amount:</span> N/A
          </div>
          <div>
            <span>Hourly Rate:</span> $10 hourly
          </div>
          <div>
            <span>Estimated Hours:</span> 10
          </div>
          <div>
            <span>Start Date:</span> 2024-10-14
          </div>
          <div>
            <span>Completion Date:</span> 2024-10-14
          </div>
          <div>
            <span>Street Address:</span> Shahr-e-Quaid-e-Azam, Khoamer Khomer,
            Gilgit, Gilgit-Baltistan
          </div>
          <div>
            <span>Suite Number:</span> N/A
          </div>
          <div>
            <span>City:</span> Gilgit
          </div>
          <div>
            <span>State:</span> Pakistan
          </div>
          <div>
            <span>Postal Code:</span> 15300
          </div>
          <div>
            <span>Country:</span> Pakistan
          </div>
        </div>
        <div className={styles.imageGrid}>
          <img
            src={serviceImage.src}
            alt="Service Image"
            className={styles.image}
          />
          <img
            src={serviceImage.src}
            alt="Service Image"
            className={styles.image}
          />
          <img
            src={serviceImage.src}
            alt="Service Image"
            className={styles.image}
          />
        </div>
      </section>
      <Divider className="my-4" />
      {/* Client Information */}
      <section className={styles.clientInfo}>
        <img
          src={clientImage.src}
          alt="Client Avatar"
          className={styles.avatar}
        />
        <div className={`${styles.clientDetails}`}>
          <h4>Client Name</h4>
          <Divider orientation="vertical" className="mx-4  h-16 " />
          <p>
            <span>Phone number:</span> 0355-354362
          </p>
          <Divider orientation="vertical" className="mx-4  h-16" />

          <p>
            <span>Street Address:</span> Shahr-e-Quaid-e-Azam, Khoamer Khomer,
            Gilgit, Gilgit-Baltistan
          </p>
        </div>
        <button className={styles.viewMore}>View More</button>
      </section>
      <Divider className="my-4" />

      {/* Proposal Details */}
      <section className={styles.section}>
        <h3 className={styles.subheader}>Proposal Details</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <div className={styles.detailsGrid}>
          <div>
            <span>Payment Type:</span> Hourly-rate
          </div>
          <div>
            <span>Hourly Rate:</span> $10 hourly
          </div>
          <div>
            <span>Estimated Hours:</span> 10
          </div>
          <div>
            <span>Start Date:</span> 2024-10-14
          </div>
          <div>
            <span>Completion Date:</span> 2024-10-14
          </div>
          <div className={styles.status}>
            <span>Status:</span> Pending
          </div>
        </div>
      </section>
    </div>
  );
}
