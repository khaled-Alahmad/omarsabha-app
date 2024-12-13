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
import Link from "next/link";
import { deleteData, updateData } from "@/context/apiHelper";
import toast from "react-hot-toast";

export default function RequestListTow({ requests }) {
  const router = useRouter();

  if (!requests || requests.length === 0) {
    return <p>No requests found.</p>;
  }
  const cancelRequest = async (requestId) => {
    try {
      const data = {
        status: "canceled"
      }
      const response = await updateData(
        `clients/service-requests/${requestId}`, data

      );

      if (response.success) {
        toast.success("Request canceled successfully.");
        router.refresh(); // Refresh the page to reflect changes
      } else {
        const errorData = await response.json();
        toast.error(`Failed to cancel request: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error canceling request:", error);
      toast.error("An unexpected error occurred while canceling the request.");
    }
  };

  // Function to delete a request
  const deleteRequest = async (requestId) => {
    try {
      const response = await deleteData(
        `clients/service-requests/${requestId}`

      );

      if (response.success) {
        toast.success("Request deleted successfully.");
        router.refresh(); // Refresh the page to reflect changes
      } else {
        const errorData = await response.json();
        toast.error(`Failed to delete request: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      toast.error("An unexpected error occurred while deleting the request.");
    }
  };
  return (
    <div>
      <div className={styles.requestList}>
        {requests.map((request) => (
          <Card key={request.id} className={styles.card}>
            <div className={styles.cardContent}>
              <img
                src={request.images[0]?.path || "https://placehold.co/600x400"}
                alt={request.title}
                className={styles.image}
              />
              <div className={styles.details}>
                <Link
                  href={`/client/requests/${request.id}`}
                  className="hover:cursor-pointer hover:text-primary-300"
                >
                  <h3 className={styles.title}>{request.title}</h3>
                </Link>
                <p className={styles.description}>{request.description}</p>
                <p className={styles.date}>
                  <strong>Desired start date:</strong>{" "}
                  {new Date(request.start_date).toLocaleDateString("en-CA")}
                </p>
                <p className={styles.proposals}>
                  Proposals submitted: <span>{request.proposals_count}</span>
                </p>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <button className={styles.actionButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                    >
                      <path
                        d="M20.1817 26.6939C20.9675 26.6936 21.7213 27.0054 22.2773 27.5607C22.8332 28.1161 23.1458 28.8696 23.1461 29.6554C23.1465 30.4413 22.8347 31.1951 22.2793 31.751C21.724 32.3069 20.9705 32.6195 20.1846 32.6199C19.3988 32.6203 18.645 32.3085 18.0891 31.7531C17.5331 31.1977 17.2206 30.4442 17.2202 29.6584C17.2198 28.8725 17.5316 28.1188 18.087 27.5628C18.6424 27.0069 19.3959 26.6943 20.1817 26.6939ZM20.1766 16.3236C20.9624 16.3232 21.7162 16.635 22.2721 17.1904C22.8281 17.7458 23.1406 18.4992 23.141 19.2851C23.1414 20.0709 22.8296 20.8247 22.2742 21.3806C21.7188 21.9366 20.9653 22.2491 20.1795 22.2495C19.3937 22.2499 18.6399 21.9381 18.084 21.3827C17.528 20.8273 17.2155 20.0738 17.2151 19.288C17.2147 18.5022 17.5265 17.7484 18.0819 17.1924C18.6373 16.6365 19.3908 16.324 20.1766 16.3236ZM20.1715 5.95321C20.9573 5.95282 21.7111 6.26462 22.267 6.82C22.8229 7.37539 23.1355 8.12888 23.1359 8.91471C23.1363 9.70053 22.8245 10.4543 22.2691 11.0103C21.7137 11.5662 20.9602 11.8787 20.1744 11.8791C19.3886 11.8795 18.6348 11.5677 18.0788 11.0123C17.5229 10.457 17.2103 9.70346 17.21 8.91764C17.2096 8.13181 17.5214 7.37802 18.0767 6.82208C18.6321 6.26614 19.3856 5.9536 20.1715 5.95321Z"
                        fill="#818282"
                      />
                    </svg>
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Actions">

                  <DropdownItem
                    startContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M2 4.49967H3.33333M3.33333 4.49967H14M3.33333 4.49967V13.833C3.33333 14.1866 3.47381 14.5258 3.72386 14.7758C3.97391 15.0259 4.31304 15.1663 4.66667 15.1663H11.3333C11.687 15.1663 12.0261 15.0259 12.2761 14.7758C12.5262 14.5258 12.6667 14.1866 12.6667 13.833V4.49967H3.33333ZM5.33333 4.49967V3.16634C5.33333 2.81272 5.47381 2.47358 5.72386 2.22353C5.97391 1.97348 6.31304 1.83301 6.66667 1.83301H9.33333C9.68696 1.83301 10.0261 1.97348 10.2761 2.22353C10.5262 2.47358 10.6667 2.81272 10.6667 3.16634V4.49967M6.66667 7.83301V11.833M9.33333 7.83301V11.833"
                          stroke="#C91D0A"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    color="error"
                    onClick={() => deleteRequest(request.id)}

                    className="hover:bg-green-200"
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
