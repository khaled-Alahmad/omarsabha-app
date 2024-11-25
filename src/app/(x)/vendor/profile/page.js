import React from "react";

import styles from "./VendorProfile.module.css"; // CSS Module for styling
import { FaEdit, FaPlus } from "react-icons/fa";
import serviceImage from "@/assets/images/vendor/profile-image-01.png";
import clientImage from "@/assets/images/vendor/client-image.png";
import { Divider } from "@nextui-org/react";
import { fetchData } from "@/context/apiHelper";

export default async function VendorProfile() {
  const response = await fetchData("vendors/me");
  const profile = response?.data || {};

  // Default fallback values for missing data
  const vendor = profile.vendor || {};
  const location = profile.location || {};
  const images = profile.images || [];
  const videos = [
    {
      src: serviceImage.src,
      name: "Sample Video",
      desc: "No video description available",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <button className={styles.editButton}>
          <FaEdit /> Edit
        </button>
        <div className={styles.header}>
          <img
            src={profile.profile_photo || clientImage.src}
            alt={`${profile.first_name ?? "N/A"} ${profile.last_name ?? "N/A"}`}
            className={styles.avatar}
          />
          <h2 className={styles.companyName}>
            {profile.first_name ?? "N/A"} {profile.last_name ?? "N/A"}
          </h2>
        </div>
        <div className={styles.details}>
          <p>
            <strong>First Name:</strong> {profile.first_name ?? "N/A"}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.last_name ?? "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {profile.email ?? "N/A"}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone ?? "N/A"}
          </p>
          <p>
            <strong>Description:</strong> {profile.description ?? "N/A"}
          </p>
          <p>
            <strong>Account Type:</strong> {vendor.account_type ?? "N/A"}
          </p>
          <p>
            <strong>Years of Experience:</strong>{" "}
            {vendor.years_experience ?? "N/A"}
          </p>
          <p>
            <strong>Street Address:</strong> {location.street_address ?? "N/A"}
          </p>
          <p>
            <strong>City:</strong> {location.city ?? "N/A"}
          </p>
          <p>
            <strong>State:</strong> {location.state ?? "N/A"}
          </p>
          <p>
            <strong>Country:</strong> {location.country ?? "N/A"}
          </p>
          <p>
            <strong>Postal Code:</strong> {location.zip_code ?? "N/A"}
          </p>
          <p>
            <strong>Years in business:</strong> {vendor.years_experience}
          </p>
          <p>
            <strong>Business Insurance:</strong> 22
          </p>
          <p>
            <strong>Has Crew:</strong> {vendor.has_crew == 0 ? "Yes" : "No"}
          </p>
          <p>
            <strong>Crew member details:</strong> {vendor.crew_members ?? "N/A"}
          </p>
        </div>
        <Divider className="my-4" />
        <h3 className={styles.mediaTitle}>Media Gallery</h3>
        <p className={styles.mediaDesc}>
          Explore our work and see what we can do for you
        </p>

        {/* Image Gallery */}
        <div className={styles.gallery}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className={styles.mediaItem}>
                <img
                  src={image.path || serviceImage.src}
                  alt={`Image ${index + 1}`}
                  className={styles.mediaImage}
                />
                <div className={styles.mediaContent}>
                  <p>{`Image ${index + 1}`}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
        <button className={styles.addButton}>
          <FaPlus /> Add Image
        </button>

        {/* Video Gallery */}
        <div className={styles.gallery}>
          {videos.map((video, index) => (
            <div key={index} className={styles.mediaItem}>
              <img
                src={video.src}
                alt={video.name}
                className={styles.mediaImage}
              />
              <div className={styles.mediaContent}>
                <p>{video.name}</p>
                <span>{video.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.addButton}>
          <FaPlus /> Add Video
        </button>
      </div>
    </div>
  );
}
