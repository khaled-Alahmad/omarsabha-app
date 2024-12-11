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
                  <b>Category:</b>{" "}
                  {request.service_request?.service_name || "N/A"}
                </div>
                {/* <div>
                  <b>Payment Type:</b> {request.payment_type || "N/A"}
                </div> */}
                {/* <div>
                  <b>Flat Rate Amount:</b>{" "}
                  {request.payment_type === "flat_rate" ? request.price : "N/A"}
                </div> */}
                {/* <div>
                  <b>Hourly Rate:</b>{" "}
                  {request.payment_type === "hourly_rate"
                    ? request.price
                    : "N/A"}
                </div> */}
                <div>
                  <b>Estimated Hours:</b> {request.estimated_hours || "N/A"}
                </div>
                <div>
                  <b>Service Start Date:</b>{" "}
                  {new Date(request.start_date).toLocaleDateString("en-US") ||
                    "N/A"}
                </div>
                <div>
                  <b>Desired Completion Date:</b>{" "}
                  {new Date(request.completion_date).toLocaleDateString(
                    "en-US"
                  ) || "N/A"}
                </div>
                <div>
                  <b>Street Address:</b>{" "}
                  {request.location?.street_address || "N/A"}
                </div>
                <div>
                  <b>City:</b>
                  {request.location?.city || "N/A"}
                </div>
                <div>
                  <b>State:</b> {request.location?.state || "N/A"}
                </div>
                <div>
                  <b>Postal Code:</b> {request.location?.postal_code || "N/A"}
                </div>
                <div>
                  <b>Country:</b> {request.location?.country || "N/A"}
                </div>
              </div>
            </div>

            {/* Vendor Details Section */}
            {/* <div className={styles.vendorDetails}> */}
            <div className={styles.vendorInfo}>
              <div className="flex items-center">
                <Avatar
                  src={
                    request.vendor?.user?.profile_photo ||
                    "https://via.placeholder.com/80"
                  }
                  alt={request.vendorName || "N/A"}
                  className={styles.vendorAvatar}
                />
                <h4>
                  {request.vendor?.user?.first_name +
                    " " +
                    request.vendor?.user?.last_name || "N/A"}
                </h4>
              </div>
              {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
              <p>
                <b>Payment Type:</b> {request.payment_type || "N/A"}
              </p>
              {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

              <p>
                {/* <b>Hourly Rate:</b>{" "} */}
                {request.payment_type === "hourly_rate" ? (
                  <>
                    <b>Hourly Rate:</b> {request.price}$
                  </>
                ) : (
                  <>
                    <b>Flat Rate:</b> {request.price}$
                  </>
                )}
              </p>
              {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

              <p>
                <b>Complete Date:</b>{" "}
                {new Date(request.completion_date).toLocaleDateString(
                  "en-US"
                ) || "N/A"}
              </p>
            </div>
            {/* </div> */}
          </div>
        </Card>
      ))}
    </div>
  );
}
