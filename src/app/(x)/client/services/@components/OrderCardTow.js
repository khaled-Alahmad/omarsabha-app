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
              src={data.vendorImage || "https://via.placeholder.com/80"}
              alt={data.vendorName || "N/A"}
              className={styles.vendorAvatar}
            />
            <Link href={`/client/services/${data.id}`}>
              <h4>{data.vendorName || "N/A"}</h4>
            </Link>
          </div>
          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
          <div className="text-center">
            <b>Payment Type:</b> {data.paymentType || "N/A"}
          </div>
          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
          <div className="text-center">
            <b>Hourly Rate:</b> {data.hourlyRate || "N/A"}
          </div>
          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
          <div className="text-center items-center">
            <b>Complete Date:</b> {data.completionDate || "N/A"}
          </div>
          <div className="text-start">
            <b>Complete Date:</b> {data.completionDate || "N/A"}
          </div>{" "}
          {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
          <div className="text-center">
            <b>Complete Date:</b> {data.completionDate || "N/A"}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progressStatus}%` }}
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