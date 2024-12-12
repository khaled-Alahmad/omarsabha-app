import React from "react";
import styles from "./ServiceDetails.module.css";
import serviceImage from "@/assets/images/vendor/service-request.png";
import { Divider } from "@nextui-org/react";
import { fetchData } from "@/context/apiHelper";

export default async function ServiceDetails({ params }) {
  const { id } = params;

  // Fetch the data asynchronously
  const response = await fetchData(`vendors/proposals/${id}`);

  // Ensure the response contains valid data
  if (!response || !response.success || !response.data) {
    return <div>Proposal not found or an error occurred.</div>;
  }

  const proposal = response.data;
  const {
    service_request: serviceRequest,
    vendor: {
      user: vendorUser,
      user: { location: vendorLocation },
    },
    payment_type: proposalPaymentType,
    price,
    service_name,
    estimated_hours,
    created_at: proposalCreatedAt,
    message,
  } = proposal;
  console.log("vendorUser:", vendorUser);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{serviceRequest.title}</h2>

      {/* Description Section */}
      <section className={styles.section}>
        <h3 className={styles.subheader}>Description</h3>
        <p className={styles.description}>{serviceRequest.description}</p>
        <div className={styles.detailsGrid}>
          <div>
            <span>Category:</span> {serviceRequest.title}
          </div>
          <div>
            <span>Payment Type:</span> {serviceRequest.payment_type}
          </div>
          <div>
            <span>Flat Rate Amount:</span> ${serviceRequest.price}
          </div>
          <div>
            <span>Hourly Rate:</span> NA hourly
          </div>
          <div>
            <span>Estimated Hours:</span> {serviceRequest.estimated_hours}
          </div>
          <div>
            <span>Start Date:</span>{" "}
            {new Date(serviceRequest.start_date).toLocaleDateString("en-CA")}
          </div>
          <div>
            <span>Completion Date:</span>{" "}
            {new Date(serviceRequest.completion_date).toLocaleDateString(
              "en-CA"
            )}
          </div>
          <div>
            <span>Suite Number:</span> N/A
          </div>
          <div>
            <span>Street Address:</span> {vendorLocation.street_address}
          </div>
          <div>
            <span>City:</span> {vendorLocation.city}
          </div>
          <div>
            <span>State:</span> {vendorLocation.state}
          </div>
          <div>
            <span>Postal Code:</span> {vendorLocation.zip_code}
          </div>
          <div>
            <span>Country:</span> {vendorLocation.country}
          </div>
        </div>
        <div className={styles.imageGrid}>
          <img
            src={serviceImage.src}
            alt="Service Image"
            className={styles.image}
          />
          <img
            src={serviceImage.src}
            alt="Service Image"
            className={styles.image}
          />
          <img
            src={serviceImage.src}
            alt="Service Image"
            className={styles.image}
          />
        </div>
      </section>
      <Divider className="my-4" />

      {/* Client Information */}
      <section className={styles.clientInfo}>
        <img
          src={vendorUser.profile_photo}
          alt={`${vendorUser.first_name} ${vendorUser.last_name}`}
          className={styles.avatar}
        />
        <div className={`${styles.clientDetails}`}>
          <h4>{`${vendorUser.first_name} ${vendorUser.last_name}`}</h4>
          <Divider orientation="vertical" className="mx-4 h-16" />
          <p>
            <span>Phone number:</span> {vendorUser.phone}
          </p>
          <Divider orientation="vertical" className="mx-4 h-16" />
          <p>
            <span>Street Address:</span> {vendorLocation.street_address}
          </p>
        </div>
        {/* <button className={styles.viewMore}>View More</button> */}
      </section>
      <Divider className="my-4" />

      {/* Proposal Details */}
      <section className={styles.section}>
        <h3 className={styles.subheader}>Proposal Details</h3>
        <p className={styles.description}>{message}</p>
        <div className={styles.detailsGrid}>
          <div>
            <span>Category:</span>{service_name || "N/A"}
          </div>
          <div>
            <span>Payment Type:</span> {proposalPaymentType}
          </div>
          {proposalPaymentType === "flat_rate" ?
            <>
              <div>
                <span>Flat Rate Amount:</span> {price}$
              </div>
              <div>
                <span>Hourly Rate:</span> N/A
              </div>
              <div>
                <span>Estimated Hours:</span>N/A
              </div>
            </> :
            <>

              <div>
                <span>Flat Rate Amount:</span> N/A
              </div>
              <div>
                <span>Hourly Rate:</span> {price}$
              </div>
              <div>
                <span>Estimated Hours:</span>{estimated_hours || "N/A"}
              </div>
            </>}
          <div>
            <span>Start Date:</span> {new Date(proposalCreatedAt).toLocaleDateString("en-US")}
          </div>
          <div>
            <span>Completion Date:</span> {new Date(serviceRequest.completion_date).toLocaleDateString("en-US")}
          </div>
          {/* <div>
            <span>Created On:</span>{" "}
            {new Date(proposalCreatedAt).toLocaleDateString("en-CA")}
          </div> */}
          <div className={styles.status}>
            <span>Status:</span> {serviceRequest.status}
          </div>
        </div>
      </section>
    </div>
  );
}
