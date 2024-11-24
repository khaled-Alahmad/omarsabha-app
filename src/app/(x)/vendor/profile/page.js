import React from "react";
import styles from "./VendorProfile.module.css"; // CSS Module for styling
import { FaEdit, FaPlus } from "react-icons/fa";
import serviceImage from "@/assets/images/vendor/profile-image-01.png";
import clientImage from "@/assets/images/vendor/client-image.png";
import { Divider } from "@nextui-org/react";
const VendorProfile = () => {
  // Sample data (You might want to fetch this data from an API)
  const profile = {
    companyName: "Company Name",
    firstName: "Tahir",
    lastName: "Ali",
    serviceType: "Ali",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    companyEmail: "tahiralyshah@gmail.com",
    phoneNumber: "03555 35 41 62",
    streetAddress:
      "Shahr-e-Quaid-e-Azam, Khoamer Khomer, Gilgit, Gilgit-Baltistan",
    city: "Gilgit",
    state: "Pakistan",
    country: "Pakistan",
    postalCode: "15100",
    yearsInBusiness: "10",
    businessInsurance: "Yes",
    hasCrew: "Yes",
    crewDetails: { name: "Asif Ahmad", role: "Marketing Manager" },
  };

  const images = new Array(8).fill({
    src: serviceImage.src,
    name: "Image Name",
  });
  const videos = new Array(8).fill({
    src: serviceImage.src,
    name: "Video Name",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting ind",
  });

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <button className={styles.editButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.33203 4.57101C1.33203 3.71224 1.67318 2.88864 2.28042 2.2814C2.88766 1.67415 3.71126 1.33301 4.57003 1.33301H7.9987C8.17551 1.33301 8.34508 1.40325 8.4701 1.52827C8.59513 1.65329 8.66536 1.82286 8.66536 1.99967C8.66536 2.17649 8.59513 2.34605 8.4701 2.47108C8.34508 2.5961 8.17551 2.66634 7.9987 2.66634H4.57003C4.06488 2.66634 3.58042 2.86701 3.22323 3.2242C2.86603 3.5814 2.66536 4.06586 2.66536 4.57101V11.4283C2.66536 11.9335 2.86603 12.4179 3.22323 12.7751C3.58042 13.1323 4.06488 13.333 4.57003 13.333H11.4274C11.9325 13.333 12.417 13.1323 12.7742 12.7751C13.1314 12.4179 13.332 11.9335 13.332 11.4283V7.99967C13.332 7.82286 13.4023 7.65329 13.5273 7.52827C13.6523 7.40325 13.8219 7.33301 13.9987 7.33301C14.1755 7.33301 14.3451 7.40325 14.4701 7.52827C14.5951 7.65329 14.6654 7.82286 14.6654 7.99967V11.4283C14.6654 12.2871 14.3242 13.1107 13.717 13.718C13.1097 14.3252 12.2861 14.6663 11.4274 14.6663H4.57003C3.71126 14.6663 2.88766 14.3252 2.28042 13.718C1.67318 13.1107 1.33203 12.2871 1.33203 11.4283V4.57101Z"
              fill="#A6A6A6"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0901 8.81192L8.62009 9.69859L7.93142 8.55659L9.40142 7.66992L9.40342 7.66859C9.45977 7.63465 9.51171 7.5939 9.55809 7.54725L12.8981 4.18992C12.9315 4.15619 12.9638 4.12128 12.9948 4.08525C13.2154 3.82792 13.5421 3.31859 13.1468 2.92125C12.8128 2.58525 12.3341 2.90259 12.0241 3.17525C11.9409 3.24856 11.8609 3.3253 11.7841 3.40525L11.7614 3.42792L8.46809 6.73792C8.38989 6.81565 8.32861 6.90871 8.28809 7.01125L7.73875 8.39325C7.72833 8.41926 7.72637 8.44788 7.73314 8.47507C7.73991 8.50225 7.75508 8.52661 7.77648 8.54469C7.79788 8.56277 7.82443 8.57365 7.85236 8.57578C7.88029 8.57792 7.90752 8.5712 7.93142 8.55659L8.62009 9.69859C7.41675 10.4239 5.98009 9.20525 6.50009 7.89992L7.05009 6.51859C7.15717 6.24865 7.31824 6.00342 7.52342 5.79792L10.8161 2.48725L10.8354 2.46792C10.9334 2.36792 11.2628 2.03059 11.6621 1.78792C11.8801 1.65659 12.2281 1.48259 12.6581 1.44925C13.1514 1.40992 13.6781 1.56525 14.0914 1.98059C14.4078 2.29311 14.6067 2.70515 14.6548 3.14725C14.6878 3.49185 14.6351 3.83927 14.5014 4.15859C14.3081 4.63659 13.9854 4.98792 13.8434 5.12992L10.5034 8.48725C10.379 8.61214 10.2412 8.72037 10.0901 8.81192ZM13.0588 4.06125C13.0588 4.06125 13.0561 4.06325 13.0501 4.06525L13.0588 4.06125Z"
              fill="#A6A6A6"
            />
          </svg>{" "}
          Edit
        </button>
        <div className={styles.header}>
          <img src={clientImage.src} alt="Profile" className={styles.avatar} />
          <h2 className={styles.companyName}>{profile.companyName}</h2>
        </div>
        <div className={styles.details}>
          <p>
            <strong>First Name:</strong> {profile.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.lastName}
          </p>
          <p>
            <strong>Service Type:</strong> {profile.serviceType}
          </p>
          <p>
            <strong>Description:</strong> {profile.description}
          </p>
          <p>
            <strong>Company Name:</strong> {profile.companyEmail}
          </p>
          <p>
            <strong>Company Phone number:</strong> {profile.phoneNumber}
          </p>
          <p>
            <strong>Street Address:</strong> {profile.streetAddress}
          </p>
          <p>
            <strong>City:</strong> {profile.city}
          </p>
          <p>
            <strong>State:</strong> {profile.state}
          </p>
          <p>
            <strong>Country:</strong> {profile.country}
          </p>
          <p>
            <strong>Postal Code:</strong> {profile.postalCode}
          </p>
          <p>
            <strong>Years in business:</strong> {profile.yearsInBusiness}
          </p>
          <p>
            <strong>Business Insurance:</strong> {profile.businessInsurance}
          </p>
          <p>
            <strong>Has Crew:</strong> {profile.hasCrew}
          </p>
          <p>
            <strong>Crew member details:</strong> {profile.crewDetails.name},{" "}
            {profile.crewDetails.role}
          </p>
        </div>
        <Divider className="my-4" />
        <h3 className={styles.mediaTitle}>Media Gallery</h3>
        <p className={styles.mediaDesc}>
          Explore our work and see what we can do for you
        </p>

        {/* Image Gallery */}
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <div key={index} className={styles.mediaItem}>
              <img
                src={image.src}
                alt={image.name}
                className={styles.mediaImage}
              />
              <div className={styles.mediaContent}>
                <p>{image.name}</p>
              </div>
            </div>
          ))}
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
      <div className={styles.mediaSection}></div>
    </div>
  );
};

export default VendorProfile;
