"use client";
import React, { useState } from "react";
import styles from "@/app/auth/profile-setup/vendor/VendorProfileSetup.module.css";
import { Button, Input, Radio, RadioGroup, Select, SelectItem, Textarea } from "@nextui-org/react";
import { addData, fetchData } from "@/context/apiHelper";
import Link from "next/link";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

export default function ClientProfileSetup() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [logoFile, setLogoFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
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
        // profile_photo: logoFile
    });

    const handleDeleteLogo = () => {
        setLogoPreview(null);
        setLogoFile(null);
    };
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

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const submitForm = async () => {
        setLoading(true);

        try {
            const fullFormData = new FormData();
            fullFormData.append("profile_photo", logoFile); 

            Object.entries(formData).forEach(([key, value]) => {

                if (value !== undefined && value !== null && value !== "") {
                    fullFormData.append(key, value); 
                }
            });

            console.log("Submitting FormData:");
            for (const [key, value] of fullFormData.entries()) {
                console.log(`${key}: ${value}`);
            }

            const response = await addData("clients/setup-profile", fullFormData);

            if (response?.success) {
                toast.success("Profile setup complete!");
                setCookie("profileSetupVendor", true, {
                    path: "/",
                });
                router.push("/");

            } else {
                const errorMessage =
                    response?.message || "Failed to submit the form. Please try again.";
                toast.error(`Error: ${errorMessage}`);
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || error.message || "An unexpected error occurred.";
            toast.error(`Error setting up profile: ${errorMessage}`);
            console.error("Profile setup error:", error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return <Loading />;
    }
    return (
        <div className={styles.setupContainer}>
            <form className={styles.container} onSubmit={submitForm}>
                <h2 className={styles.title}>Your Profile Setup</h2>
                <Button as={Link} href="/" className={styles.editButton}>
                    Skip
                </Button>
                <div className={styles.formGroup}>
                    <div className={styles.halfInput}>
                        <Input
                            label="First Name"
                            labelPlacement="outside"
                            required
                            variant="bordered"
                            placeholder="Enter first name"
                            fullWidth
                            value={formData.first_name}
                            onChange={(e) => handleInputChange("first_name", e.target.value)}
                        />
                    </div>
                    <div className={styles.halfInput}>
                        <Input
                            label="Last Name"
                            variant="bordered"
                            required
                            labelPlacement="outside"
                            placeholder="Enter last name"
                            fullWidth
                            value={formData.last_name}
                            onChange={(e) => handleInputChange("last_name", e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <Input
                        label="Email Address"
                        variant="bordered"
                        required
                        labelPlacement="outside"
                        placeholder="Enter Email Address"
                        fullWidth
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <Textarea
                        label="Description"
                        placeholder="Start from here"
                        required
                        variant="bordered"
                        labelPlacement="outside"
                        fullWidth
                        minRows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <Input
                        label="Phone number:"
                        required
                        placeholder="+92 333 *******"
                        variant="bordered"
                        labelPlacement="outside"
                        fullWidth
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <Input
                        label="Street Address"
                        labelPlacement="outside"
                        required
                        placeholder="Street Address"
                        variant="bordered"
                        fullWidth
                        value={formData.street_address}
                        onChange={(e) => handleInputChange("street_address", e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.halfInput}>
                        <Input
                            label="City"
                            required
                            placeholder="City name"
                            labelPlacement="outside"
                            variant="bordered"
                            fullWidth
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                    </div>
                    <div className={styles.halfInput}>
                        <Input
                            label="State"
                            required
                            placeholder="State name"
                            labelPlacement="outside"
                            variant="bordered"
                            fullWidth
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.halfInput}>
                        <Input
                            label="Country"
                            placeholder="Country"
                            labelPlacement="outside"
                            required
                            variant="bordered"
                            fullWidth
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                        />
                    </div>
                    <div className={styles.halfInput}>
                        <Input
                            label="Postal Code"
                            placeholder="Postal Code"
                            labelPlacement="outside"
                            variant="bordered"
                            fullWidth
                            value={formData.zip_code}
                            required
                            onChange={(e) => handleInputChange("zip_code", e.target.value)}
                        />
                    </div>
                </div>
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
                <div className={styles.buttonGroupT}>
                    <Button
                        as={Link}
                        href="/"
                        className={styles.skipButton}
                    // color="default"
                    // onClick={onBack}
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"
                        type="submit"
                        // onClick={submitForm}
                        className={styles.saveButton}
                    // onClick={handleSave}
                    >
                        Save
                    </Button>
                </div>
            </form>


        </div>
    );
}
