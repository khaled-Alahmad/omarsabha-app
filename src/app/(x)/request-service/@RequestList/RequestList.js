import React from "react";
import styles from "../ServiceRequestList.module.css";
import serviceImage from "@/assets/images/vendor/service-request.png";
import { Skeleton, Card, Text, CardBody } from "@nextui-org/react";

export default function RequestList({ data }) {
  console.log("RequestList ", data);

  if (data.length === 0) {
    // Show "data not found" message if data is empty
    return <p className={styles.noDataMessage}>Data not found!</p>;
  }

  // Render data when available
  return (
    <div className={styles.requestList}>
      {data.map((item, i) => (
        <div key={i} className={styles.requestCard}>
          <img
            src={serviceImage.src}
            alt="Service Request"
            className={styles.image}
          />
          <div className={styles.requestDetails}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.requestDetailsSection}>
              <p>
                <strong>Payment Type: </strong>
                {item.payment_type}
              </p>
              <p>
                <strong>Hourly Rate: </strong>
                {item.price}$
              </p>
              <p>
                <strong>Desired start date:</strong>{" "}
                {new Date(item.start_date).toLocaleDateString("en-CA")}
              </p>
              <p>
                <strong>Complete Date:</strong>{" "}
                {new Date(item.completion_date).toLocaleDateString("en-CA")}
              </p>
              <p>
                <strong>Location:</strong> {item.location?.city},{" "}
                {item.location?.country}, {item.location?.state}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
