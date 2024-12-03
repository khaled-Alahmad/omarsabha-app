"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "../Requests.module.css";
import {
  Card,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function RequestList({ requests }) {
  if (!requests || requests.length === 0) {
    return <p>No requests found.</p>;
  }

  return (
    <div>
      <div className={styles.requestList}>
        {requests.map((request) => (
          <Card key={request.id} className={styles.card}>
            <div className={styles.cardContent}>
              <img
                src={request.images[0] || "https://placehold.co/600x400"}
                alt={request.title}
                className={styles.image}
              />
              <div className={styles.details}>
                <h3 className={styles.title}>{request.title}</h3>
                <p className={styles.description}>{request.description}</p>
                <p className={styles.date}>
                  <strong>Desired start date:</strong>{" "}
                  {new Date(request.start_date).toLocaleDateString("en-CA")}
                </p>
                <p className={styles.proposals}>
                  Proposals submitted: <Badge>{request.proposals}</Badge>
                </p>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <button className={styles.actionButton}>•••</button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Actions">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Cancel</DropdownItem>
                  <DropdownItem color="error">Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
