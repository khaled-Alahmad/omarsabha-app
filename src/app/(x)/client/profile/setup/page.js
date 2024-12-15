"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./ProfileSetup.module.css";
import { addData, fetchData, updateData } from "@/context/apiHelper";
import { Progress } from "@nextui-org/react";
import Loading from "@/app/loading";
import toast from "react-hot-toast";
import axios from "axios";
import { getCookie } from "cookies-next";

export default function ProfileSetup() {
  //   const { id } = params; // Fetch the `id` from params
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
    phone: "",
    street_address: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    profile_photo: null,
  });

  const [loading, setLoading] = useState(true);
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          profilePhoto: reader.result, // Update the preview URL
        }));
      };
      reader.readAsDataURL(file);

      // Simulating file upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
        }
        setFormData((prev) => ({
          ...prev,
          uploadProgress: Math.min(progress, 100), // Update progress
        }));
      }, 200);
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({
      ...prev,
      profilePhoto: null, // Remove the image
      uploadProgress: 0, // Reset progress
    }));
  };
  // Fetch data when component loads
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetchData(`clients/me`);
        if (response?.success) {
          const userData = response.data;
          setFormData({
            first_name: userData.first_name || "",
            last_name: userData.last_name || "",
            email: userData.email || "",
            description: userData.description || "",
            phone: userData.phone || "",
            street_address: userData.location?.street_address || "",
            city: userData.location?.city || "",
            state: userData.location?.state || "",
            country: userData.location?.country || "",
            postal_code: userData.location?.zip_code || "",
            profile_photo: userData.profile_photo || null,
          });
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    const token = getCookie("authToken");

    try {
      const response = await axios.post(`clients/me`, formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",

        }

      }); // Assuming updateData is your API method
      if (response?.success) {
        toast.success("Profile updated successfully!");
        router.push("/client/profile"); // Redirect after successful update
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Your Profile Setup</h1>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Phone number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+XX-XXXX-XXXX"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Street Address</label>
        <input
          type="text"
          name="streetAddress"
          value={formData.street_address}
          onChange={handleChange}
          placeholder="Enter street address"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter country"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.zip_code}
            onChange={handleChange}
            placeholder="Enter postal code"
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Upload Profile Photo</label>
        {/* <div className={styles.fileUpload}>
          <input type="file" onChange={handleFileUpload} accept="image/*" />
          <span>
            {formData.profilePhoto
              ? typeof formData.profilePhoto === "string"
                ? "Current photo uploaded"
                : formData.profilePhoto.name
              : "Click to upload Profile Picture"}
          </span>
        </div> */}
        <div className={styles.mediaUploadSection}>
          <span className={styles.mediaUploadSectionTitle}>
            Upload Profile Photo
          </span>
          <label className={styles.mediaUploadLabel}>
            <div className={styles.mediaUploadBox}>
              <span>Click to upload Profile Picture</span>
              <input
                type="file"
                // multiple
                accept="image/*"
                className={styles.mediaUploadInput}
                onChange={handleFileUpload}
              />
            </div>
          </label>

          {/* Progress Bar */}
          {formData.uploadProgress > 0 && (
            <div className={styles.progressBarContainer}>
              <span>Media files uploading</span>
              <Progress
                value={formData.uploadProgress}
                color="warning"
                size="sm"
              />
              <span>{formData.uploadProgress}%</span>
            </div>
          )}

          {/* Uploaded Files Preview */}
          <div className={styles.mediaPreviewContainer}>
            {/* {formData.profilePhoto.map((file, index) => ( */}
            <div className={styles.mediaPreviewItem}>
              <img
                src={formData.profilePhoto}
                alt={"formData.profilePhoto.name"}
                className={styles.mediaPreviewImage}
              />
              <button
                className={styles.removeFileButton}
                onClick={() => handleRemoveFile}
              >
                🗑
              </button>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => router.back()}
        >
          Back
        </button>
        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </div>
    </form>
  );
}
