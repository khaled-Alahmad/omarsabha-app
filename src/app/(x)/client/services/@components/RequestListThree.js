"use client";

import OrderCard from "./OrderCard";
import OrderCardTow from "./OrderCardTow";
import styles from "./RequestList.module.css";
import { Card, Badge, Avatar, Divider } from "@nextui-org/react";

export default function RequestListThree({ requests }) {
  if (!requests || requests.length === 0) {
    return <p>No requests found.</p>;
  }
  const sampleData = {
    vendorName: "JJ Brother Elections",
    paymentType: "Hourly-rate",
    hourlyRate: "$10 hourly",
    completionDate: "10/11/2024",
    progressStatus: 67, // Progress percentage
    vendorImage: "https://via.placeholder.com/80", // Example vendor image
  };

  return (
    <div>
      {requests.map((request, index) => (
        <OrderCardTow key={index} data={request} />
      ))}
    </div>
  );
}
