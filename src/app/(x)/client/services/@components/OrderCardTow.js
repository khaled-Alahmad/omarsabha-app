"use client";

import styles from "./OrderCard.module.css";
import { Avatar, Divider, Link } from "@nextui-org/react";

export default function OrderCardTow({ data }) {
  const {
    vendorName,
    paymentType,
    hourlyRate,
    completionDate,
    progressStatus, // Assuming progressStatus is a value between 0-100
  } = data;

  return (
    <div className={styles.card}>
      {/* Vendor and Details */}
      <div className={styles.vendorDetails}>
        <div className={styles.vendorInfo}>
          <div className="flex">
            {" "}
            <Avatar
              src={data.vendor?.user?.profile_photo || "https://via.placeholder.com/80"}
              alt={data.vendor?.user?.first_name || "N/A"}
              className={styles.vendorAvatar}
            />
            <Link href={`/client/services/${data.id}`}>
              <h4>{data.vendor?.user?.first_name + " " + data.vendor?.user?.last_name || "N/A"}</h4>
            </Link>
          </div>
          <p className="text-center">
            <b>Payment Type:</b> {data.payment_type || "N/A"}
          </p>
          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
          {data.payment_type === "flat_type" ? <> <p className="text-center">
            <b>Flat Rate:</b> {data.price || "N/A"}$
          </p></> : <> <p className="text-center">
            <b>Hourly Rate:</b> {data.price || "N/A"}$
          </p></>}

          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

          <p className="text-center">
            <b>Complete Date:</b>      {new Date(data.completion_date).toLocaleDateString(
              "en-US"
            ) || "N/A"}
          </p>
          <div className="text-start flex items-center">
            <b>Total Time:</b> {"N/A"}
          </div>{" "}
          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
          <div className="text-center">
            <b>Total Cost:</b> {"N/A"}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
          // style={{ width: `${progressStatus}%` }}
          />
        </div>
        <div className={styles.progressLabels}>
          <span>Create Order</span>
          <span>Awaiting Start</span>
          <span>In Progress</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}
