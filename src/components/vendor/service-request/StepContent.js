"use client";
import {
  Input,
  Select,
  SelectItem,
  Radio,
  Button,
  Divider,
  RadioGroup,
  DatePicker,
  Textarea,
  Progress,
} from "@nextui-org/react";
import styles from "@/assets/css/ServiceRequest.module.css";
import { parseDate } from "@internationalized/date";
import CheckIcon from "@/assets/icons/CheckIcon";
import Image from "next/image";
import twitterIcon from "@/assets/icons/skill-icons_twitter.svg";
import fbIcon from "@/assets/icons/Social button.svg";

import tikIcon from "@/assets/icons/lineicons_tiktok.svg";
import instaIcon from "@/assets/icons/skill-icons_instagram.svg";
import { addData, fetchData } from "@/context/apiHelper";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/app/loading";
import axios from "axios";
import { getCookie } from "cookies-next";

export default function StepContent({
  currentStep,
  setCurrentStep,
  formData,
  setFormData
}) {
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);

    // Simulating file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
      }
      setFormData((prev) => ({
        ...prev,
        uploadProgress: Math.min(progress, 100),
      }));
    }, 200);

    // Adding files to state
    setFormData((prev) => ({
      ...prev,
      mediaFiles: [...prev.mediaFiles, ...files],
    }));
  };

  const handleRemoveFile = (fileName) => {
    setFormData((prev) => ({
      ...prev,
      mediaFiles: prev.mediaFiles.filter((file) => file.name !== fileName),
    }));
  };
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetchData(`public/services`);

        setServices(response.data || []);
        console.log("services", services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);
  // const submitData = async () => {
  //   const fullFormData = new FormData();

  //   Object.entries(formData).forEach(([key, value]) => {
  //     if (key === "mediaFiles" && Array.isArray(value)) {
  //       value.forEach((file) => {
  //         fullFormData.append("media_files[]", file);
  //       });
  //     } else if (value !== undefined && value !== null) {
  //       fullFormData.append(key, value);
  //     }
  //   });

  //   console.log("Submitting FormData:");
  //   for (let [key, value] of fullFormData.entries()) {
  //     console.log(`${key}:`, value);
  //   }
  //   const token = getCookie("authToken");

  //   try {
  //     const response = await axios.post("https://backend.instahandi.com/api/clients/service-requests", fullFormData, {
  //       headers: {
  //         "Authorization": `Bearer ${token}`

  //       }
  //     });

  //     if (response?.status === 200 || response?.success) {
  //       toast.success("Service request submitted successfully!");
  //       setCurrentStep(3); // Move to the next step
  //     } else {
  //       const errorMessage =
  //         response?.message || "Failed to submit the service request.";
  //       toast.error(`Error: ${errorMessage}`);
  //       console.error("Server Response:", response);
  //     }
  //   } catch (error) {
  //     const errorMessage =
  //       error.response?.data?.message || "An unexpected error occurred.";
  //     toast.error(`Error: ${errorMessage}`);
  //     console.error("Submission Error:", error);
  //   }
  // };
  const submitData = async () => {
    const fullFormData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "mediaFiles" && Array.isArray(value)) {
        value.forEach((file) => fullFormData.append("media_files[]", file));
      } else if (value !== undefined && value !== null) {
        fullFormData.append(key, value);
      }
    });

    console.log("Submitting FormData:");
    for (let [key, value] of fullFormData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await addData("clients/service-requests", fullFormData);

      if (response?.success) {
        toast.success("Service request submitted successfully!");
        setCurrentStep(4); // Move to the next step
      }
      // toast.success("Service request submitted successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setFormData({});
    }
  };

  if (!services) {
    return <Loading />
  }
  return (
    <div className={styles.stepContainer}>
      {currentStep === 1 && (
        <>
          <h3 className={styles.title}>Service Details</h3>
          <Select
            label="Service Categories"
            placeholder="Select a category"
            variant="bordered"
            labelPlacement="outside"
            fullWidth
            value={formData.service_id}
            onChange={(selectedValue) => {
              console.log("Selected Value: ", selectedValue.target.value);
              setFormData({ ...formData, service_id: selectedValue.target.value });
            }}
          >
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.name}
              </SelectItem>
            ))}
          </Select>

          <RadioGroup
            orientation="vertical"
            label="Select Payment type"
            labelPlacement="outside"
            variant="bordered"
            color="primary"
            value={formData.payment_type || ""}
            onChange={(e) => {
              setFormData({ ...formData, payment_type: e.target.value });
            }}
          >
            <Radio value="flat_rate">Flat Rate</Radio>
            <Radio value="hourly_rate">Hourly Rate</Radio>
          </RadioGroup>
          {formData.payment_type === "hourly_rate" && (
            <>
              <Input
                placeholder="Hourly Rate"
                label="Hourly Rate"
                labelPlacement="outside"
                variant="bordered"
                type="number"
                size="lg"
                radius="md"
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                value={formData.price || ""}
              />
              <Select
                placeholder="Estimated Hours"
                label="Estimated Hours"
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                radius="md"
                onChange={(value) =>
                  setFormData({ ...formData, estimated_hours: value.target.value })
                }
                value={formData.estimated_hours || ""}
              >
                <SelectItem value="1-2">1-2 Hours</SelectItem>
                <SelectItem value="2-4">2-4 Hours</SelectItem>
                <SelectItem value="4+">4+ Hours</SelectItem>
              </Select>
            </>
          )}
          {formData.payment_type === "flat_rate" && (
            <Input
              placeholder="Flat Rate"
              label="Flat Rate"
              labelPlacement="outside"
              variant="bordered"
              type="number"
              size="lg"
              radius="md"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              value={formData.price || ""}
            />
          )}

          <DatePicker
            label="Service Start Date"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="md"
            placeholder="mm/dd/yyyy"
            onChange={(value) => {
              // Parse the selected date to a `CalendarDate` object
              if (value) {
                const parsedDate = parseDate(value.toString());
                setFormData({ ...formData, start_date: parsedDate });
              }
            }}
            defaultValue={formData.start_date || null} // Pass a valid CalendarDate object or null
          />
          <DatePicker
            label="Service Completion Date"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="md"
            placeholder="mm/dd/yyyy"
            onChange={(value) => {
              if (value) {
                const parsedDate = parseDate(value.toString());
                setFormData({ ...formData, completion_date: parsedDate });
              }
            }}
            defaultValue={formData.completion_date || null} // Pass a valid CalendarDate object or null
          />
          <Textarea
            placeholder="Description"
            label="Description"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="md"
            // as="textarea"
            rows={3}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description || ""} // Use defaultValue for uncontrolled behavior
          />
          <Input
            placeholder="Title"
            label="Title"
            labelPlacement="outside"
            variant="bordered"
            // type="number"
            size="lg"
            radius="md"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title || ""}
          />
          {/* Media Upload Section */}
          <div className={styles.mediaUploadSection}>
            <span className={styles.mediaUploadSectionTitle}>Media Files</span>
            <label className={styles.mediaUploadLabel}>
              <div className={styles.mediaUploadBox}>
                <span>Click to upload Media Files</span>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
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
              {formData.mediaFiles.map((file, index) => (
                <div key={index} className={styles.mediaPreviewItem}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className={styles.mediaPreviewImage}
                  />
                  <button
                    className={styles.removeFileButton}
                    onClick={() => handleRemoveFile(file.name)}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <Button className={styles.nextButton} onPress={handleNext}>
              Next
            </Button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h3 className={styles.title}>Service Location</h3>
          <Input
            placeholder="Street Address"
            label="Street Address"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="md"
            onChange={(e) =>
              setFormData({ ...formData, street_address: e.target.value })
            }
            value={formData.street_address || ""}
          />
          <Input
            placeholder="City"
            label="City"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            radius="md"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            value={formData.city || ""}
          />
          <Input
            placeholder="State"
            label="State"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            radius="md"
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            value={formData.state || ""}
          />
          <Input
            placeholder="Postal Code"
            label="Postal Code"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            radius="md"
            onChange={(e) =>
              setFormData({ ...formData, zip_code: e.target.value })
            }
            value={formData.zip_code || ""}
          />
          <Input
            placeholder="Country"
            label="Country"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            radius="md"
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            value={formData.country || ""}
          />

          <div className="flex justify-around items-center mt-4">
            <Button className={styles.backButton} onPress={handleBack}>
              Back
            </Button>
            <Button className={styles.nextButton} onPress={handleNext}>
              Next
            </Button>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <div className="flex flex-col justify-center align-middle items-center">
            <h3 className={styles.title}>Review Submission</h3>
            <svg
              width="194"
              height="201"
              viewBox="0 0 194 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4524 183.829L97.0774 150.665C99.3039 149.767 100.046 147.071 98.718 144.806C94.968 138.478 87.0774 126.173 77.0774 116.173C67.3899 106.485 55.6321 99.0635 49.4993 95.5088C47.2727 94.2197 44.6164 95.001 43.718 97.1885L10.5149 177.892C9.06957 181.407 12.9758 185.274 16.4524 183.829Z"
                fill="#FE8315"
              />
              <path
                d="M99.1085 148.283C96.7257 150.665 82.507 141.564 67.6632 126.72C52.8195 111.876 43.7179 97.6186 46.0616 95.2357C48.4445 92.8529 62.7413 101.876 77.6241 116.759C92.507 131.642 101.452 145.939 99.1085 148.283Z"
                fill="#D67909"
              />
              <path
                d="M49.9678 170.04L31.1396 177.813L16.5693 163.204L24.3037 144.376L49.9678 170.04ZM84.1084 156.016L65.2803 163.751L30.5928 129.063L38.3272 110.235L84.1084 156.016Z"
                fill="#C02B34"
              />
              <path
                d="M39.5 51.5247C42.6929 51.5247 45.2812 48.9363 45.2812 45.7434C45.2812 42.5505 42.6929 39.9622 39.5 39.9622C36.3071 39.9622 33.7188 42.5505 33.7188 45.7434C33.7188 48.9363 36.3071 51.5247 39.5 51.5247Z"
                fill="#FE8315"
              />
              <path
                d="M39.5 15.392C42.7031 15.392 45.2813 17.9701 45.2813 21.1732V31.7982C45.2813 35.0013 42.7031 37.5795 39.5 37.5795C36.3359 37.5795 33.7188 35.0013 33.7188 31.7982V21.1732C33.7188 17.9701 36.3359 15.392 39.5 15.392ZM14.9297 39.9623H25.5547C28.7578 39.9623 31.3359 42.5404 31.3359 45.7435C31.3359 48.9467 28.7578 51.5248 25.5547 51.5248H14.9297C11.7266 51.5248 9.14844 48.9467 9.14844 45.7435C9.14844 42.5404 11.7266 39.9623 14.9297 39.9623ZM39.5 53.9076C42.7031 53.9076 45.2813 56.4857 45.2813 59.6888V70.3139C45.2813 73.517 42.7031 76.0951 39.5 76.0951C36.2969 76.0951 33.7188 73.517 33.7188 70.3139V59.6888C33.7188 56.4857 36.3359 53.9076 39.5 53.9076ZM53.4453 39.9623H64.0703C67.2734 39.9623 69.8516 42.5404 69.8516 45.7435C69.8516 48.9467 67.2734 51.5248 64.0703 51.5248H53.4453C50.2422 51.5248 47.6641 48.9467 47.6641 45.7435C47.6641 42.5404 50.2422 39.9623 53.4453 39.9623Z"
                fill="#FE8315"
              />
              <path
                d="M163.015 157.266C166.208 157.266 168.796 154.678 168.796 151.485C168.796 148.292 166.208 145.704 163.015 145.704C159.822 145.704 157.233 148.292 157.233 151.485C157.233 154.678 159.822 157.266 163.015 157.266Z"
                fill="#34AC6B"
              />
              <path
                d="M163.015 121.134C166.218 121.134 168.796 123.712 168.796 126.915V137.54C168.796 140.743 166.218 143.321 163.015 143.321C159.812 143.321 157.233 140.743 157.233 137.54V126.915C157.233 123.712 159.812 121.134 163.015 121.134ZM138.444 145.704H149.069C152.272 145.704 154.851 148.282 154.851 151.485C154.851 154.688 152.272 157.266 149.069 157.266H138.444C135.241 157.266 132.663 154.688 132.663 151.485C132.663 148.282 135.241 145.704 138.444 145.704ZM163.015 159.649C166.218 159.649 168.796 162.227 168.796 165.431V176.056C168.796 179.259 166.218 181.837 163.015 181.837C159.812 181.837 157.233 179.259 157.233 176.056V165.431C157.233 162.227 159.812 159.649 163.015 159.649ZM176.96 145.704H187.585C190.788 145.704 193.366 148.282 193.366 151.485C193.366 154.688 190.788 157.266 187.585 157.266H176.96C173.757 157.266 171.179 154.688 171.179 151.485C171.179 148.282 173.757 145.704 176.96 145.704Z"
                fill="#34AC6B"
              />
              <path
                d="M154.851 43.3607C158.043 43.3607 160.632 40.7724 160.632 37.5795C160.632 34.3866 158.043 31.7982 154.851 31.7982C151.658 31.7982 149.069 34.3866 149.069 37.5795C149.069 40.7724 151.658 43.3607 154.851 43.3607Z"
                fill="#07B7EE"
              />
              <path
                d="M154.851 7.22742C158.054 7.22742 160.632 9.80554 160.632 13.0087V23.6337C160.632 26.8368 158.054 29.4149 154.851 29.4149C151.647 29.4149 149.069 26.8368 149.069 23.6337V13.0087C149.069 9.80554 151.687 7.22742 154.851 7.22742ZM124.499 37.579C124.499 34.3759 127.077 31.7977 130.28 31.7977H140.905C144.108 31.7977 146.687 34.3759 146.687 37.579C146.687 40.7821 144.108 43.3602 140.905 43.3602H130.28C127.116 43.3602 124.499 40.7821 124.499 37.579ZM154.851 67.9305C151.647 67.9305 149.069 65.3524 149.069 62.1493V51.5243C149.069 48.3212 151.647 45.743 154.851 45.743C158.054 45.743 160.632 48.3212 160.632 51.5243V62.1493C160.671 65.3524 158.054 67.9305 154.851 67.9305ZM185.241 37.579C185.241 40.7821 182.663 43.3602 179.46 43.3602H168.835C165.632 43.3602 163.054 40.7821 163.054 37.579C163.054 34.3759 165.632 31.7977 168.835 31.7977H179.46C182.624 31.7977 185.241 34.3759 185.241 37.579Z"
                fill="#07B7EE"
              />
              <path
                d="M62.5069 118.79C59.5381 117.657 58.0147 114.337 59.1475 111.329C59.6944 109.923 60.71 108.79 62.0772 108.165C67.1162 105.782 73.2881 101.876 74.0694 96.7588C74.8115 92.0323 70.7881 87.0323 69.0694 85.4307C67.2334 83.9073 56.999 74.6495 59.3819 64.337C60.9834 57.462 67.4678 52.5791 78.6787 49.8838C86.1006 48.087 89.1475 45.7432 89.499 44.1026C90.0459 41.6807 86.4131 37.1495 83.6397 34.8838C81.1787 32.8526 80.8272 29.2198 82.8584 26.7588C84.8506 24.337 88.4444 23.9463 90.9053 25.8995C92.1553 26.9151 103.093 36.1338 100.749 46.6026C99.1865 53.4776 92.7022 58.3213 81.374 61.0557C74.0303 62.8135 70.9834 65.2354 70.5928 66.876C70.0069 69.4151 73.7569 74.2588 76.5694 76.6416L76.7647 76.7979C77.1944 77.1885 87.2334 86.5245 85.4365 98.3995C84.2256 106.564 77.9756 113.321 66.96 118.556C65.5928 119.298 63.9522 119.337 62.5069 118.79Z"
                fill="#34AC6B"
              />
              <path
                d="M135.202 199.767C133.835 200.274 132.35 200.314 130.944 199.845C128.132 198.868 127.038 195.939 128.483 193.36C130.983 188.868 133.444 182.696 131.022 179.024C128.757 175.626 122.624 174.884 120.319 174.884C117.975 175.001 104.421 175.314 100.085 167.423C97.1942 162.15 99.3426 155.196 106.452 146.798C111.139 141.251 112.116 137.931 111.452 136.72C110.436 134.884 104.85 134.181 101.374 134.415C98.2489 134.65 95.7489 132.579 95.827 129.845C95.9051 127.11 98.5223 124.689 101.647 124.454C103.249 124.337 117.272 123.595 121.764 131.564C124.694 136.798 122.507 143.751 115.319 152.228C110.671 157.735 109.733 161.056 110.436 162.306C111.491 164.259 117.311 165.04 120.944 164.845H121.218C121.804 164.845 135.202 164.689 140.944 173.204C144.889 179.064 144.108 187.032 138.639 196.915C137.819 198.282 136.608 199.259 135.202 199.767Z"
                fill="#FE8315"
              />
              <path
                d="M103.796 116.524C100.71 116.407 98.3276 113.79 98.4448 110.704C98.4838 109.376 99.0307 108.087 99.9291 107.11C100.242 106.759 107.859 98.6727 121.999 91.5634C130.281 87.4227 139.07 84.454 148.171 82.7352C159.851 80.5868 171.804 80.3915 183.523 82.1493C186.57 82.579 188.679 85.4305 188.249 88.4774C187.82 91.5243 184.968 93.6337 181.921 93.204C162.39 90.3524 144.07 93.0868 127.468 101.329C114.968 107.501 108.21 114.649 108.132 114.688C107.038 115.977 105.437 116.602 103.796 116.524ZM24.4994 126.72C23.9526 126.72 23.4057 126.641 22.8979 126.485C19.9291 125.587 18.2494 122.501 19.1479 119.532C21.1401 112.579 22.6244 105.47 23.6791 98.2821C25.7104 83.5946 23.7963 76.2509 21.3744 74.2587C19.4213 72.6571 14.851 73.5946 8.91349 76.7977C6.17912 78.2821 2.78068 77.2665 1.33537 74.5321C-0.149009 71.7977 0.866616 68.3993 3.60099 66.954C14.1869 61.2118 22.5463 60.743 28.4447 65.5477C35.1244 70.9774 37.1947 82.2274 34.7338 99.9227C33.6401 107.618 31.9994 115.235 29.851 122.696C29.1479 125.079 26.9604 126.72 24.4994 126.72Z"
                fill="#FFCC9F"
              />
              <path
                d="M117.429 78.9467C121.334 78.9467 124.499 75.7812 124.499 71.8763C124.499 67.9715 121.334 64.806 117.429 64.806C113.524 64.806 110.358 67.9715 110.358 71.8763C110.358 75.7812 113.524 78.9467 117.429 78.9467Z"
                fill="#FE8315"
              />
              <path
                d="M110.358 14.2982C114.263 14.2982 117.429 11.1327 117.429 7.22791C117.429 3.32308 114.263 0.157593 110.358 0.157593C106.454 0.157593 103.288 3.32308 103.288 7.22791C103.288 11.1327 106.454 14.2982 110.358 14.2982Z"
                fill="#C02B34"
              />
              <path
                d="M79.9297 185.783C84.3307 185.783 87.8984 182.215 87.8984 177.814C87.8984 173.413 84.3307 169.845 79.9297 169.845C75.5287 169.845 71.9609 173.413 71.9609 177.814C71.9609 182.215 75.5287 185.783 79.9297 185.783Z"
                fill="#FFCC9F"
              />
              <path
                d="M146.726 119.181C149.789 119.181 152.272 116.697 152.272 113.634C152.272 110.57 149.789 108.087 146.726 108.087C143.662 108.087 141.179 110.57 141.179 113.634C141.179 116.697 143.662 119.181 146.726 119.181Z"
                fill="#07B7EE"
              />
              <path
                d="M182.272 20.3525C185.616 20.3525 188.327 17.6418 188.327 14.2979C188.327 10.9539 185.616 8.24316 182.272 8.24316C178.929 8.24316 176.218 10.9539 176.218 14.2979C176.218 17.6418 178.929 20.3525 182.272 20.3525Z"
                fill="#FFCC9F"
              />
            </svg>

            <p className="text-center">
              The process has been successfully completed. Please click the
              button below to confirm your request and finalize your submission.
            </p>
          </div>
          <div className="flex justify-around items-center mt-4">
            <Button className={styles.backButton} onPress={handleBack}>
              Back
            </Button>
            <Button className={styles.nextButton} onClick={submitData}>
              Submit
            </Button>
          </div>
        </>
      )}
      {currentStep === 4 && (
        <>
          <div
            className="flex flex-col align-middle items-center text-center"
            style={{ justifyContent: "center", paddingTop: "2rem" }}
          >
            <div className={styles.iconContainer}>
              <CheckIcon className={styles.icon} />{" "}
              {/* Replace with your icon component */}
            </div>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.successMessage}>
              Proposal placed Successfully
            </div>
            <p className={styles.description1}>
              Your service request has been successfully submitted.
            </p>
            <p className={styles.description2}>
              Thank you for choosing Instahandi!
            </p>
            <p className={styles.description3}>Follow Us </p>
            <div className="flex gap-1 justify-center items-center mt-4">
              <Image src={fbIcon} width={0} height={0} alt="" />
              <Image src={instaIcon} width={0} height={0} alt="" />

              <Image src={tikIcon} width={0} height={0} alt="" />
              <Image src={twitterIcon} width={0} height={0} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
