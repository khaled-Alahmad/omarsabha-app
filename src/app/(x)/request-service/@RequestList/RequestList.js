import React from "react";
import styles from "../ServiceRequestList.module.css";
import serviceImage from "@/assets/images/vendor/service-request.png";
import { Skeleton, Card, Text, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function RequestList({ data }) {
  console.log("RequestList ", data);

  if (data.length === 0) {
    // Show "data not found" message if data is empty
    return <p className={styles.noDataMessage}>Data not found!</p>;
  }

  console.log("data:", data);

  // Render data when available
  return (
    <div className={styles.requestList}>
      {data.map((item, i) => (
        <Link key={i} href={`/request-service/${item.id}`} >
          <div className={styles.requestCard} >
            <img
              src={item.images[0]?.path || "https://placehold.co/600x400"}
              alt="Service Request"
              className={styles.image}
            />
            <div className={styles.requestDetails}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.requestDetailsSection}>
                {item.payment_type === "hourly_rate" ? (
                  <>
                    {" "}
                    <p>
                      <strong>Payment Type: </strong>
                      Hourly Rate
                    </p>
                    <p>
                      <strong>Hourly Rate: </strong>
                      {item.price}$
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Payment Type: </strong>
                      Flat Rate
                    </p>
                    <p>
                      <strong>Flat Rate: </strong>
                      {item.price}$
                    </p>
                  </>
                )}
                {/* <p>
                <strong>Payment Type: </strong>
                {item.payment_type}
              </p>
              <p>
                <strong>Hourly Rate: </strong>
                {item.price}$
              </p> */}
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
        </Link>
      ))}
    </div>
  );
}
