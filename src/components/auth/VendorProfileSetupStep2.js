"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep2({ onBack }) {
  const [logoPreview, setLogoPreview] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  // Function to handle the image upload and generate a preview
  const handleImageUpload = (event, setPreview) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to clear the selected image
  const handleDeleteImage = (setPreview) => {
    setPreview(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vendor Profile Setup</h2>

      {/* Upload Company Logo */}
      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>Upload Company Logo</p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setLogoPreview)}
            style={{ display: "none" }}
            id="logo-upload"
          />
          <label htmlFor="logo-upload" className={styles.uploadBoxLabel}>
            {logoPreview ? (
              <div className={styles.imageContainer}>
                <img
                  src={logoPreview}
                  alt="Company Logo Preview"
                  className={styles.imagePreview}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(setLogoPreview)}
                  className={styles.deleteButton}
                  aria-label="Delete logo image"
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="43"
                  viewBox="0 0 60 43"
                  fill="none"
                >
                  <path
                    d="M30 0.875C22.275 0.875 16.2 6.74375 15.3506 14.2344C13.7168 14.4976 12.1846 15.1977 10.9162 16.2606C9.6477 17.3234 8.6902 18.7094 8.145 20.2719C3.5325 21.6012 0 25.715 0 30.875C0 37.1075 5.0175 42.125 11.25 42.125H48.75C54.9825 42.125 60 37.1075 60 30.875C60 27.575 58.3969 24.62 56.0737 22.5538C55.6387 15.965 50.3831 10.7075 43.77 10.3663C41.5125 4.87438 36.3338 0.875 30 0.875ZM30 4.625C35.1787 4.625 39.3187 7.94375 40.7812 12.65L41.1937 14H43.125C48.2906 14 52.5 18.2094 52.5 23.375V24.3125L53.2612 24.8994C54.18 25.6035 54.9266 26.5074 55.4444 27.5427C55.9622 28.578 56.2377 29.7175 56.25 30.875C56.25 35.1425 53.0175 38.375 48.75 38.375H11.25C6.9825 38.375 3.75 35.1425 3.75 30.875C3.75 27.0875 6.46875 24.1475 9.9 23.5513L11.1319 23.3169L11.3663 22.0831C11.9288 19.5575 14.1675 17.75 16.875 17.75H18.75V15.875C18.75 9.55625 23.6812 4.625 30 4.625ZM30 15.1137L28.65 16.4019L21.15 23.9019L23.85 26.6019L28.125 22.3194V34.625H31.875V22.3194L36.15 26.5981L38.85 23.8981L31.35 16.3981L30 15.1137Z"
                    fill="#A6A6A6"
                  />
                </svg>
                <p className={styles.descImage}>
                  Click to upload Profile Picture
                </p>
              </>
            )}
          </label>
        </div>
      </div>

      {/* Upload Media Files */}
      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>
          Upload Media Files (about our service)
        </p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setMediaPreview)}
            style={{ display: "none" }}
            id="media-upload"
          />
          <label htmlFor="media-upload" className={styles.uploadBoxLabel}>
            {mediaPreview ? (
              <div className={styles.imageContainer}>
                <img
                  src={mediaPreview}
                  alt="Media File Preview"
                  className={styles.imagePreview}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(setMediaPreview)}
                  className={styles.deleteButton}
                  aria-label="Delete media image"
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="43"
                  viewBox="0 0 60 43"
                  fill="none"
                >
                  <path
                    d="M30 0.875C22.275 0.875 16.2 6.74375 15.3506 14.2344C13.7168 14.4976 12.1846 15.1977 10.9162 16.2606C9.6477 17.3234 8.6902 18.7094 8.145 20.2719C3.5325 21.6012 0 25.715 0 30.875C0 37.1075 5.0175 42.125 11.25 42.125H48.75C54.9825 42.125 60 37.1075 60 30.875C60 27.575 58.3969 24.62 56.0737 22.5538C55.6387 15.965 50.3831 10.7075 43.77 10.3663C41.5125 4.87438 36.3338 0.875 30 0.875ZM30 4.625C35.1787 4.625 39.3187 7.94375 40.7812 12.65L41.1937 14H43.125C48.2906 14 52.5 18.2094 52.5 23.375V24.3125L53.2612 24.8994C54.18 25.6035 54.9266 26.5074 55.4444 27.5427C55.9622 28.578 56.2377 29.7175 56.25 30.875C56.25 35.1425 53.0175 38.375 48.75 38.375H11.25C6.9825 38.375 3.75 35.1425 3.75 30.875C3.75 27.0875 6.46875 24.1475 9.9 23.5513L11.1319 23.3169L11.3663 22.0831C11.9288 19.5575 14.1675 17.75 16.875 17.75H18.75V15.875C18.75 9.55625 23.6812 4.625 30 4.625ZM30 15.1137L28.65 16.4019L21.15 23.9019L23.85 26.6019L28.125 22.3194V34.625H31.875V22.3194L36.15 26.5981L38.85 23.8981L31.35 16.3981L30 15.1137Z"
                    fill="#A6A6A6"
                  />
                </svg>
                <p className={styles.descImage}>Click to upload media files</p>
              </>
            )}
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.buttonGroup}>
        <Button
          bordered
          className={styles.skipButton}
          color="default"
          onClick={onBack}
        >
          Skip
        </Button>
        <Button color="primary" className={styles.saveButton}>
          Save
        </Button>
      </div>
    </div>
  );
}
