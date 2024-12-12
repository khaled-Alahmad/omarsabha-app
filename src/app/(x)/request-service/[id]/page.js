"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import styles from "./BidDetails.module.css";
import ProposeChangeModal from "@/components/vendor/service-request/ProposeChangeModal";
import { useParams } from "next/navigation";
import { fetchData } from "@/context/apiHelper";
import Loading from "@/app/loading";

export default function BidDetails() {
  const params = useParams(); // Get route parameters

  const [data, setData] = useState(null); // State for fetched data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isError, setIsError] = useState(false); // Error state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    const fetchDataA = async () => {
      try {
        const response = await fetchData(`vendors/service-requests/${params.id}`); // Replace with your API endpoint
        // if (!response.ok) throw new Error("Failed to fetch data");
        // const result = await response.json();
        setData(response.data); // Assuming `result.data` contains the required data
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataA();
  }, [params.id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Show loading or error state
  if (isLoading) return <Loading />;
  // if (isError) return <p>Error loading data. Please try again later.</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.title}</h2>

      <div className={styles.descriptionSection}>
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>

      <div className={styles.detailsSection}>
        <div>
          <span>Category:</span> {data.service?.name}
        </div>
        <div>
          <span>Payment Type:</span> {data.payment_type}
        </div>
        <div>
          <span>Flat Rate Amount:</span> ${data.price || "N/A"}
        </div>
        <div>
          <span>Estimated Hours:</span> {data.estimated_hours || "N/A"}
        </div>
        <div>
          <span>Start Date:</span>
          {/* {new Date(data.start_date).toLocaleDateString()} */}
          {new Date(data.start_date).toLocaleDateString("en-CA")}
        </div>
        <div>
          <span>Completion Date:</span>{" "}
          {/* {new Date(data.completion_date).toLocaleDateString()} */}
          {new Date(data.completion_date).toLocaleDateString("en-CA")}

        </div>
        <div>
          <span>Street Address:</span> {data.location.street_address}
        </div>
        <div>
          <span>City:</span> {data.location.city}
        </div>
        <div>
          <span>State:</span> {data.location.state}
        </div>
        <div>
          <span>Postal Code:</span> {data.location.zip_code}
        </div>
        <div>
          <span>Country:</span> {data.location.country}
        </div>
      </div>

      <div className={styles.imageGallery}>
        {data.images.length > 0 ? (
          data.images.map((image, index) => (
            <img
              key={index}
              src={image.path}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <Button
          className={styles.proposeButton}
          color="default"
          onClick={openModal}
        >
          Propose Change
        </Button>
        <Button className={styles.bidButton} color="primary">
          Place Bid
        </Button>
      </div>
      <ProposeChangeModal isOpen={isModalOpen} onClose={closeModal} serviceRequestId={params.id} />
    </div>
  );
}
