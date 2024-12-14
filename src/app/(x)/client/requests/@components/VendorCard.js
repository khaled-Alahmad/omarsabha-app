"use client";
import React, { useState } from "react";
import styles from "./VendorCard.module.css";
import VendorModal from "./VendorModal";
import { Button } from "@nextui-org/react";
import { addData } from "@/context/apiHelper";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "@/app/loading";

export default function VendorCard({ vendor, serviceId }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  if (!vendor) {
    return <div>Vendor details not available.</div>;
  }

  const sampleVendor = {
    user: {
      first_name: "JJ Brother",
      last_name: "Elections",
      profile_photo: "https://via.placeholder.com/120",
    },
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly",
    hourlyRate: "$10 hourly",
    flatRate: "N/A",
    estimatedHours: "10",
    yearsInBusiness: "10-12 Years",
    startDate: "2024-10-14",
    completionDate: "2024-10-14",
  };

  // const {
  //   user: { first_name, last_name, profile_photo },
  //   message,
  //   category = "Electrician",
  //   paymentType = "Hourly-rate",
  //   flatRate = "N/A",
  //   hourlyRate = "$10 hourly",
  //   estimatedHours = "10",
  //   yearsInBusiness = "10-12 Years",
  //   startDate = "2024-10-14",
  //   completionDate = "2024-10-14",
  // } = vendor;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);

    try {
      const response = await addData(`clients/service-requests/${serviceId}/hire-vendor`, {
        proposal_id: vendor.id
      }); // Assuming updateData is your API method
      if (response?.success) {
        toast.success(response.message);
        router.push("/client/requests"); // Redirect after successful update
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred .");
    } finally {
      setLoading(false)
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      {/* Vendor Header */}
      <div className={styles.header}>
        <img
          src={vendor.vendor?.user?.profile_photo || "https://placehold.co/600x400"}
          alt={`profile photo`}
          className={styles.avatar}
        />
        <h2 className={styles.vendorName}>{`${vendor.vendor?.user?.first_name} ${vendor.vendor?.user?.last_name}`}</h2>
      </div>

      {/* Vendor Message */}
      <div className={styles.message}>
        <h3>Vendor Message.</h3>
        <p>{vendor.message}</p>
      </div>

      {/* Vendor Details */}
      <div className={styles.detailsGrid}>
        <div className="flex items-end">
          <strong>Category:</strong> {vendor.vendor?.services[0]?.name || "N/A"}
        </div>
        <div className="flex items-end">
          <strong>Payment Type:</strong> {vendor.payment_type}
        </div>
        {vendor.payment_type === "flat_rate" ? <>
          <div className="flex items-end">
            <strong>Flat Rate Amount:</strong> {vendor.price}$
          </div>
          <div className="flex items-end">
            <strong>Hourly Rate:</strong> N/A
          </div>
          <div className="flex items-end">
            <strong>Estimated Hours:</strong> N/A
          </div>
        </> : <>
          <div className="flex items-end">
            <strong>Flat Rate Amount:</strong> N/A
          </div>
          <div className="flex items-end">
            <strong>Hourly Rate:</strong> {vendor.price}$
          </div>
          <div className="flex items-end">
            <strong>Estimated Hours:</strong> {vendor.estimated_hours}
          </div>
        </>}
        {/* <div className="flex items-end">
          <strong>Flat Rate Amount:</strong> {vendor.price}
        </div>
        <div className="flex items-end">
          <strong>Hourly Rate:</strong> {vendor.price}
        </div>
        <div className="flex items-end">
          <strong>Estimated Hours:</strong> {vendor.estimated_hours}
        </div> */}
        <div className="flex items-end">
          <strong>Years in Business:</strong> {vendor?.vendor?.years_experience}
        </div>
        <div className="flex items-end">
          <strong>Start Date:</strong>   {new Date(vendor.created_at).toLocaleDateString(
            "en-CA"
          )}
        </div>
        <div className="flex items-end">
          <strong>Completion Date:</strong>   {new Date(vendor.updated_at).toLocaleDateString(
            "en-CA"
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <Button
          onClick={() => {
            console.log("clicekd! ");
          }}
          className={styles.rejectButton}
          color="error"
        >
          Reject
        </Button>
        <Button
          onClick={() => {
            setIsVisible(true);
            console.log("clicekd! ");
          }}
          className={styles.hireButton}
          color="success"
        >
          Hire
        </Button>
      </div>
      <VendorModal
        onSubmit={handleSubmit}
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        vendor={vendor}
      />
    </div>
  );
}
