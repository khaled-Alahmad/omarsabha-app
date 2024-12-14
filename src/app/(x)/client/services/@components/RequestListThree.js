"use client";

import OrderCard from "./OrderCard";
import OrderCardTow from "./OrderCardTow";
import styles from "./RequestList.module.css";
import { Card, Badge, Avatar, Divider } from "@nextui-org/react";

export default function RequestListThree({ requests }) {
  if (!requests || requests.length === 0) {
    return <p>No requests found.</p>;
  }


  return (
    <div>
      {requests.map((request, index) => (
        <OrderCardTow key={index} data={request} />
      ))}
    </div>
  );
}
