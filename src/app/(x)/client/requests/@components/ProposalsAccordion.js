"use client";
import React, { useState } from "react";
import styles from "./ProposalsAccordion.module.css";
import { Divider } from "@nextui-org/react";
import serviceImage from "@/assets/images/vendor/service-request.png";
import VendorCard from "./VendorCard";

export default function ProposalsAccordion({ proposals }) {
  const [openProposalId, setOpenProposalId] = useState(null);

  const toggleProposal = (id) => {
    setOpenProposalId((prevId) => (prevId === id ? null : id));
  };
  console.log(proposals);

  if (proposals?.proposals?.length <= 0) {
    return <div style={{
      textAlign: "center",
      height: "100vh"
    }}>No service details found.</div>;
  }

  const vendor = {
    user: {
      first_name: "JJ",
      last_name: "Brother Elections",
      profile_photo: "https://via.placeholder.com/150",
    },
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "Electrician",
    paymentType: "Hourly-rate",
    flatRate: "N/A",
    hourlyRate: "$10 hourly",
    estimatedHours: "10",
    yearsInBusiness: "10-12 Years",
    startDate: "2024-10-14",
    completionDate: "2024-10-14",
  };

  return (
    <div className={styles.container}>
      {proposals?.proposals?.map((proposal) => {
        const isOpen = openProposalId === proposal.id;
        return (
          <div key={proposal.id} className={styles.proposal}>
            {/* Header Section */}
            <div
              className={styles.proposalHeader}
              onClick={() => toggleProposal(proposal.id)}
            >
              {!isOpen && (
                <>

                  {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

                  <div className={styles.sectionCard}>
                    <div className={styles.vendorInfo}>
                      <img
                        src={
                          proposal.vendor.user.profile_photo ||
                          "https://placehold.co/600x400"
                        }
                        alt={`${proposal.vendor.user.first_name} ${proposal.vendor.user.last_name}`}
                        className={styles.avatar}
                      />
                      <h4>
                        {proposal.vendor.user.first_name}{" "}
                        {proposal.vendor.user.last_name}
                      </h4>
                    </div>
                    <p>
                      <b> Payment Type:</b> {proposals.payment_type}
                    </p>
                    {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}
                    {proposals.payment_type === "flat_rate" ? <>   <p>
                      <b>Flat Rate:</b> {proposals.price}
                    </p></> : <>   <p>
                      <b>Hourly Rate:</b> {proposals.price}
                    </p></>}

                    {/* <p>
                      <b>Hourly Rate:</b> {proposal.price}
                    </p> */}
                    {/* <Divider orientation="vertical" className="mx-4 h-16" /> */}

                    <p>
                      <b>Complete Date:</b> {new Date(proposals.completion_date).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </>
              )}
              <div className={`${styles.toggleIcon} ${isOpen && "w-full"} `}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M6.85789 0.000395775L13.1719 7.0704L11.0662 9.42706L6.85789 4.71373L2.64955 9.42706L0.5439 7.0704L6.85789 0.000395775Z"
                      fill="#818282"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                  >
                    <path
                      d="M6.31399 9.42667L0 2.35667L2.10565 0L6.31399 4.71333L10.5223 0L12.628 2.35667L6.31399 9.42667Z"
                      fill="#818282"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Details Section */}
            {isOpen && (
              <>
                <section className={styles.section}>
                  <h3 className={styles.subheader}>Description</h3>
                  <p className={styles.description}>{proposals.description}</p>
                  <div className={styles.detailsGrid}>
                    <div>
                      <span>Category:</span> {proposals.service?.name}
                    </div>
                    <div>
                      <span>Payment Type:</span> {proposals.payment_type}
                    </div>
                    {proposals.payment_type === "flat_rate" ? <>

                      <div>
                        <span>Flat Rate Amount:</span> ${proposals.price}
                      </div>
                      <div>
                        <span>Hourly Rate Amount:</span> N/A
                      </div>
                      <div>
                        <span>Estimated Hours:</span> N/A
                      </div>
                    </> : <>
                      <div>
                        <span>Flat Rate Amount:</span> N/A
                      </div>
                      <div>
                        <span>Hourly Rate Amount:</span> ${proposals.price}
                      </div>
                      <div>
                        <span>Estimated Hours:</span> {proposals.estimated_hours}
                      </div>
                    </>}
                    {/* <div>
                      <span>Flat Rate Amount:</span> ${proposal.price}
                    </div>
                    <div>
                      <span>Hourly Rate:</span> NA hourly
                    </div> */}
                    {/* <div>
                      <span>Estimated Hours:</span> {proposal.estimated_hours}
                    </div> */}
                    <div>
                      <span>Start Date:</span>{" "}
                      {new Date(proposals.start_date).toLocaleDateString(
                        "en-CA"
                      )}
                    </div>
                    <div>
                      <span>Completion Date:</span>{" "}
                      {new Date(proposals.completion_date).toLocaleDateString(
                        "en-CA"
                      )}
                    </div>
                    <div>
                      <span>Suite Number:</span> N/A
                    </div>
                    <div>
                      <span>Street Address:</span>{" "}
                      {proposals?.location?.street_address || "N/A"}
                    </div>
                    <div>
                      <span>City:</span>{" "}
                      {proposals?.location?.city || "N/A"}
                    </div>
                    <div>
                      <span>State:</span>{" "}
                      {proposals?.location?.state || "N/A"}
                    </div>
                    <div>
                      <span>Postal Code:</span>{" "}
                      {proposals?.location?.zip_code || "N/A"}
                    </div>
                    <div>
                      <span>Country:</span>{" "}
                      {proposals?.location?.country || "N/A"}
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
                <Divider
                  className="my-4 h-1 rounded mx-4 "
                  style={{ width: "98%" }}
                />
                <VendorCard vendor={proposal} serviceId={proposals.id} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
