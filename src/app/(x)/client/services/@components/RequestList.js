"use client";

import styles from "./RequestList.module.css";
import { Card, Badge, Avatar, Divider } from "@nextui-org/react";

export default function RequestList({ requests }) {
  if (!requests || requests.length === 0) {
    return <p>No requests found.</p>;
  }

  return (
    <div>
      {requests.map((request) => (
        <Card key={request.id} className={styles.card}>
          <div className={styles.cardContent}>
            {/* Description Section */}
            <div className={styles.description}>
              <h3 className={styles.title}>Description</h3>
              <p>{request.description}</p>
              <div className={styles.detailsGrid}>
                <div>
                  <b>Category:</b> {request.category || "N/A"}
                </div>
                <div>
                  <b>Payment Type:</b> {request.paymentType || "N/A"}
                </div>
                <div>
                  <b>Flat Rate Amount:</b> {request.flatRate || "N/A"}
                </div>
                <div>
                  <b>Hourly Rate:</b> {request.hourlyRate || "N/A"}
                </div>
                <div>
                  <b>Estimated Hours:</b> {request.estimatedHours || "N/A"}
                </div>
                <div>
                  <b>Service Start Date:</b> {request.startDate || "N/A"}
                </div>
                <div>
                  <b>Desired Completion Date:</b>{" "}
                  {request.completionDate || "N/A"}
                </div>
                <div>
                  <b>Street Address:</b> {request.streetAddress || "N/A"}
                </div>
                <div>
                  <b>City:</b> {request.city || "N/A"}
                </div>
                <div>
                  <b>State:</b> {request.state || "N/A"}
                </div>
                <div>
                  <b>Postal Code:</b> {request.postalCode || "N/A"}
                </div>
                <div>
                  <b>Country:</b> {request.country || "N/A"}
                </div>
              </div>
            </div>

            {/* Vendor Details Section */}
            {/* <div className={styles.vendorDetails}> */}
            <div className={styles.vendorInfo}>
              <div className="flex items-center">
                <Avatar
                  src={request.vendorImage || "https://via.placeholder.com/80"}
                  alt={request.vendorName || "N/A"}
                  className={styles.vendorAvatar}
                />
                <h4>{request.vendorName || "N/A"}</h4>
              </div>
              {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
              <p>
                <b>Payment Type:</b> {request.paymentType || "N/A"}
              </p>
              {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

              <p>
                <b>Hourly Rate:</b> {request.hourlyRate || "N/A"}
              </p>
              {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

              <p>
                <b>Complete Date:</b> {request.completionDate || "N/A"}
              </p>
            </div>
            {/* </div> */}
          </div>
        </Card>
      ))}
    </div>
  );
}
