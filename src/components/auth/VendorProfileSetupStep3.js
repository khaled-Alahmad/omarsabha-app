"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep3({ onBack, onNext }) {
  const [logoFile, setLogoFile] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [logoPreview, setLogoPreview] = useState(null);
  const [mediaPreviews, setMediaPreviews] = useState([]);

  // Handle single image upload and preview
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setLogoFile(file);
    }
  };

  // Handle multiple image upload and preview
  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = [];
    const newFiles = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        setMediaPreviews((prev) => [...prev, ...newPreviews]);
      };
      reader.readAsDataURL(file);
      newFiles.push(file);
    });

    setMediaFiles((prev) => [...prev, ...newFiles]);
  };

  // Delete single image
  const handleDeleteLogo = () => {
    setLogoPreview(null);
    setLogoFile(null);
  };

  // Delete media image
  const handleDeleteMedia = (index) => {
    setMediaPreviews((prev) => prev.filter((_, i) => i !== index));
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!logoFile) {
      alert("Profile photo is required.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_photo", logoFile);

    mediaFiles.forEach((file, index) => {
      formData.append(`additional_images[${index}]`, file);
    });

    onNext(formData); // Pass data to the main component
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vendor Profile Setup</h2>

      {/* Upload Logo */}
      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>Upload Company Logo</p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
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
                  onClick={handleDeleteLogo}
                  className={styles.deleteButton}
                  aria-label="Delete logo image"
                >
                  X
                </button>
              </div>
            ) : (
              <p className={styles.descImage}>
                Click to upload Profile Picture
              </p>
            )}
          </label>
        </div>
      </div>

      {/* Upload Media Files */}
      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>
          Upload Media Files (about your service)
        </p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleMediaUpload}
            style={{ display: "none" }}
            id="media-upload"
          />
          <label htmlFor="media-upload" className={styles.uploadBoxLabel}>
            <p className={styles.descImage}>Click to upload media files</p>
          </label>
        </div>

        {/* Media Previews */}
        <div className={styles.mediaPreviewContainer}>
          {mediaPreviews.map((preview, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={preview}
                alt={`Media ${index + 1}`}
                className={styles.imagePreview}
              />
              <button
                type="button"
                onClick={() => handleDeleteMedia(index)}
                className={styles.deleteButton}
                aria-label="Delete media image"
              >
                X
              </button>
            </div>
          ))}
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
          Back
        </Button>
        <Button
          color="primary"
          className={styles.saveButton}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
