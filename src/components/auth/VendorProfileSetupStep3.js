"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import styles from "./VendorProfileSetup.module.css";

export default function VendorProfileSetupStep3({ onBack, onNext }) {
  const [logoFile, setLogoFile] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [logoPreview, setLogoPreview] = useState(null);
  const [mediaPreviews, setMediaPreviews] = useState([]);

  // رفع الصور وعرض المعاينة
  const handleImageUpload = (event, setPreview, setFile) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleMultipleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        setMediaPreviews((prev) => [...prev, ...newPreviews]);
      };
      reader.readAsDataURL(file);
    });
    setMediaFiles((prev) => [...prev, ...files]);
  };

  // حذف الصورة من المعاينة
  const handleDeleteImage = (index, setPreview, setFile) => {
    setPreview((prev) => prev.filter((_, i) => i !== index));
    setFile(null);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("logo", logoFile);
    mediaFiles.forEach((file, index) => {
      formData.append(`mediaFiles[${index}]`, file);
    });

    onNext(formData); // تمرير البيانات للمكون الرئيسي
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vendor Profile Setup</h2>

      {/* رفع شعار الشركة */}
      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>Upload Company Logo</p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setLogoPreview, setLogoFile)}
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
                  onClick={() =>
                    handleDeleteImage(0, setLogoPreview, setLogoFile)
                  }
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

      {/* رفع ملفات متعددة */}
      <div className={styles.uploadSection}>
        <p className={styles.uploadLabel}>
          Upload Media Files (about our service)
        </p>
        <div className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleMultipleImageUpload}
            style={{ display: "none" }}
            id="media-upload"
          />
          <label htmlFor="media-upload" className={styles.uploadBoxLabel}>
            {mediaPreviews.length > 0 ? (
              mediaPreviews.map((preview, index) => (
                <div key={index} className={styles.imageContainer}>
                  <img
                    src={preview}
                    alt="Media File Preview"
                    className={styles.imagePreview}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleDeleteImage(index, setMediaPreviews, setMediaFiles)
                    }
                    className={styles.deleteButton}
                    aria-label="Delete media image"
                  >
                    X
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.descImage}>Click to upload media files</p>
            )}
          </label>
        </div>
      </div>

      {/* أزرار الإجراءات */}
      <div className={styles.buttonGroup}>
        <Button
          bordered
          className={styles.skipButton}
          color="default"
          onClick={onBack}
        >
          Skip
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
