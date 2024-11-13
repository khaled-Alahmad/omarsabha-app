import React from "react";
import styles from "./JobDetailsDetails.module.css";
import serviceImage from "@/assets/images/vendor/service-request.png";
import clientImage from "@/assets/images/vendor/client-image.png";
import { FaFileAlt, FaPlay, FaCheckCircle, FaDollarSign } from "react-icons/fa"; // Icons for each step

import { Divider } from "@nextui-org/react";

export default function JobDetails() {
  const progress = [
    {
      label: "Order Created",
      status: "completed",
      date: "10/14/2024",
      time: "07:20 PM",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M17.0566 4.1416H7.05664C5.95207 4.1416 5.05664 5.03703 5.05664 6.1416V19.1416C5.05664 20.2462 5.95207 21.1416 7.05664 21.1416H17.0566C18.1612 21.1416 19.0566 20.2462 19.0566 19.1416V6.1416C19.0566 5.03703 18.1612 4.1416 17.0566 4.1416Z"
            stroke="#262727"
          />
          <path
            d="M9.05664 9.1416H15.0566M9.05664 13.1416H15.0566M9.05664 17.1416H13.0566"
            stroke="#262727"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Awaiting Start",
      status: "current",
      date: "10/14/2024",
      time: "07:20 PM",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M16.5566 11.3105L13.0566 7.81055L14.4566 6.41055L16.5566 8.51055L20.7566 4.31055L22.1566 5.71055L16.5566 11.3105ZM11.0566 7.31055H2.05664V9.31055H11.0566V7.31055ZM21.0566 13.7105L19.6566 12.3105L17.0566 14.9105L14.4566 12.3105L13.0566 13.7105L15.6566 16.3105L13.0566 18.9105L14.4566 20.3105L17.0566 17.7105L19.6566 20.3105L21.0566 18.9105L18.4566 16.3105L21.0566 13.7105ZM11.0566 15.3105H2.05664V17.3105H11.0566V15.3105Z"
            fill="#262727"
          />
        </svg>
      ),
    },
    {
      label: "Order Completed",
      status: "upcoming",
      date: "",
      time: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0_270_2380)">
            <path
              d="M17.5293 7.45312L18.584 8.50781L9.80664 17.2852L5.5293 13.0078L6.58398 11.9531L9.80664 15.1758L17.5293 7.45312ZM12.0566 0.480469C13.1582 0.480469 14.2207 0.621094 15.2441 0.902344C16.2676 1.18359 17.2246 1.58594 18.1152 2.10938C19.0059 2.63281 19.8145 3.25781 20.541 3.98438C21.2676 4.71094 21.8926 5.52344 22.416 6.42188C22.9395 7.32031 23.3418 8.27734 23.623 9.29297C23.9043 10.3086 24.0488 11.3711 24.0566 12.4805C24.0566 13.582 23.916 14.6445 23.6348 15.668C23.3535 16.6914 22.9512 17.6484 22.4277 18.5391C21.9043 19.4297 21.2793 20.2383 20.5527 20.9648C19.8262 21.6914 19.0137 22.3164 18.1152 22.8398C17.2168 23.3633 16.2598 23.7656 15.2441 24.0469C14.2285 24.3281 13.166 24.4727 12.0566 24.4805C10.9551 24.4805 9.89258 24.3398 8.86914 24.0586C7.8457 23.7773 6.88867 23.375 5.99805 22.8516C5.10742 22.3281 4.29883 21.7031 3.57227 20.9766C2.8457 20.25 2.2207 19.4375 1.69727 18.5391C1.17383 17.6406 0.771484 16.6875 0.490234 15.6797C0.208984 14.6719 0.0644531 13.6055 0.0566406 12.4805C0.0566406 11.3789 0.197266 10.3164 0.478516 9.29297C0.759766 8.26953 1.16211 7.3125 1.68555 6.42188C2.20898 5.53125 2.83398 4.72266 3.56055 3.99609C4.28711 3.26953 5.09961 2.64453 5.99805 2.12109C6.89648 1.59766 7.84961 1.19531 8.85742 0.914062C9.86523 0.632812 10.9316 0.488281 12.0566 0.480469ZM12.0566 22.9805C13.0176 22.9805 13.9434 22.8555 14.834 22.6055C15.7246 22.3555 16.5605 22.0039 17.3418 21.5508C18.123 21.0977 18.834 20.5469 19.4746 19.8984C20.1152 19.25 20.6621 18.543 21.1152 17.7773C21.5684 17.0117 21.9238 16.1758 22.1816 15.2695C22.4395 14.3633 22.5645 13.4336 22.5566 12.4805C22.5566 11.5195 22.4316 10.5938 22.1816 9.70312C21.9316 8.8125 21.5801 7.97656 21.127 7.19531C20.6738 6.41406 20.123 5.70312 19.4746 5.0625C18.8262 4.42188 18.1191 3.875 17.3535 3.42188C16.5879 2.96875 15.752 2.61328 14.8457 2.35547C13.9395 2.09766 13.0098 1.97266 12.0566 1.98047C11.0957 1.98047 10.1699 2.10547 9.2793 2.35547C8.38867 2.60547 7.55273 2.95703 6.77148 3.41016C5.99023 3.86328 5.2793 4.41406 4.63867 5.0625C3.99805 5.71094 3.45117 6.41797 2.99805 7.18359C2.54492 7.94922 2.18945 8.78516 1.93164 9.69141C1.67383 10.5977 1.54883 11.5273 1.55664 12.4805C1.55664 13.4414 1.68164 14.3672 1.93164 15.2578C2.18164 16.1484 2.5332 16.9844 2.98633 17.7656C3.43945 18.5469 3.99023 19.2578 4.63867 19.8984C5.28711 20.5391 5.99414 21.0859 6.75977 21.5391C7.52539 21.9922 8.36133 22.3477 9.26758 22.6055C10.1738 22.8633 11.1035 22.9883 12.0566 22.9805Z"
              fill="#262727"
            />
          </g>
          <defs>
            <clipPath id="clip0_270_2380">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.0566406 0.480469)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Payment Completed",
      status: "upcoming",
      date: "",
      time: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M11.8691 3.50931V12.6509C11.8691 12.8001 11.8099 12.9431 11.7044 13.0486C11.5989 13.1541 11.4558 13.2134 11.3066 13.2134C11.1575 13.2134 11.0144 13.1541 10.9089 13.0486C10.8034 12.9431 10.7441 12.8001 10.7441 12.6509V3.50931L8.70414 5.54837C8.59751 5.64773 8.45647 5.70182 8.31075 5.69925C8.16502 5.69668 8.02598 5.63765 7.92292 5.53459C7.81986 5.43153 7.76083 5.29249 7.75826 5.14676C7.75569 5.00104 7.80978 4.86 7.90914 4.75337L10.9091 1.75337C11.0146 1.64803 11.1576 1.58887 11.3066 1.58887C11.4557 1.58887 11.5987 1.64803 11.7041 1.75337L14.7041 4.75337C14.7594 4.80487 14.8037 4.86697 14.8345 4.93597C14.8652 5.00497 14.8818 5.07945 14.8831 5.15498C14.8844 5.23051 14.8705 5.30553 14.8422 5.37557C14.8139 5.44561 14.7718 5.50924 14.7184 5.56265C14.665 5.61607 14.6014 5.65817 14.5313 5.68646C14.4613 5.71475 14.3863 5.72865 14.3107 5.72732C14.2352 5.72598 14.1607 5.70945 14.0917 5.67871C14.0227 5.64796 13.9606 5.60364 13.9091 5.54837L11.8691 3.50931ZM17.8691 12.3406V9.65087C17.8691 9.30277 17.7309 8.96894 17.4847 8.72279C17.2386 8.47665 16.9047 8.33837 16.5566 8.33837H15.0566C14.9075 8.33837 14.7644 8.39763 14.6589 8.50312C14.5534 8.60861 14.4941 8.75169 14.4941 8.90087C14.4941 9.05006 14.5534 9.19313 14.6589 9.29862C14.7644 9.40411 14.9075 9.46337 15.0566 9.46337H16.5566C16.6064 9.46337 16.6541 9.48313 16.6892 9.51829C16.7244 9.55345 16.7441 9.60114 16.7441 9.65087V17.7265C16.4028 17.1889 15.8645 16.8062 15.2446 16.6603C14.6247 16.5145 13.9723 16.6171 13.427 16.9461C12.8817 17.2752 12.4869 17.8045 12.327 18.421C12.1671 19.0374 12.2548 19.692 12.5713 20.2446C12.5713 20.254 12.5816 20.2624 12.5873 20.2718L14.6741 23.4593C14.7605 23.5725 14.8866 23.6487 15.027 23.6726C15.1673 23.6964 15.3115 23.6662 15.4305 23.5879C15.5494 23.5097 15.6342 23.3892 15.6679 23.2509C15.7015 23.1125 15.6814 22.9666 15.6116 22.8424L13.5379 19.6699C13.3655 19.3675 13.3202 19.0089 13.4122 18.6731C13.5041 18.3373 13.7257 18.0517 14.0282 17.8793C14.3307 17.7069 14.6893 17.6617 15.0251 17.7536C15.3609 17.8456 15.6464 18.0672 15.8188 18.3696C15.8236 18.379 15.8289 18.3881 15.8348 18.3968L16.8379 19.9249C16.9045 20.0254 17.0017 20.1018 17.115 20.1429C17.2283 20.1839 17.3519 20.1875 17.4674 20.1531C17.5829 20.1186 17.6843 20.048 17.7566 19.9515C17.829 19.8551 17.8684 19.738 17.8691 19.6174V13.7356C18.6871 14.4089 19.3465 15.2544 19.8002 16.2118C20.2539 17.1692 20.4909 18.2149 20.4941 19.2743V23.1509C20.4941 23.3001 20.5534 23.4431 20.6589 23.5486C20.7644 23.6541 20.9075 23.7134 21.0566 23.7134C21.2058 23.7134 21.3489 23.6541 21.4544 23.5486C21.5599 23.4431 21.6191 23.3001 21.6191 23.1509V19.2743C21.6149 17.8988 21.2703 16.5458 20.6159 15.3359C19.9616 14.1261 19.0179 13.097 17.8691 12.3406ZM7.55664 8.33837H6.05664C5.70854 8.33837 5.3747 8.47665 5.12856 8.72279C4.88242 8.96894 4.74414 9.30277 4.74414 9.65087V19.4009C4.74414 19.5501 4.8034 19.6931 4.90889 19.7986C5.01438 19.9041 5.15746 19.9634 5.30664 19.9634C5.45582 19.9634 5.5989 19.9041 5.70439 19.7986C5.80988 19.6931 5.86914 19.5501 5.86914 19.4009V9.65087C5.86914 9.60114 5.88889 9.55345 5.92406 9.51829C5.95922 9.48313 6.00691 9.46337 6.05664 9.46337H7.55664C7.70582 9.46337 7.8489 9.40411 7.95439 9.29862C8.05988 9.19313 8.11914 9.05006 8.11914 8.90087C8.11914 8.75169 8.05988 8.60861 7.95439 8.50312C7.8489 8.39763 7.70582 8.33837 7.55664 8.33837Z"
            fill="#262727"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Replace switched</h2>

      {/* Description Section */}
      <section className={styles.section}>
        <h3 className={styles.subheader}>Description</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <div className={styles.detailsGrid}>
          <div>
            <span>Category:</span> Electrician
          </div>
          <div>
            <span>Payment Type:</span> Hourly-rate
          </div>
          <div>
            <span>Flat Rate Amount:</span> N/A
          </div>
          <div>
            <span>Hourly Rate:</span> $10 hourly
          </div>
          <div>
            <span>Estimated Hours:</span> 10
          </div>
          <div>
            <span>Start Date:</span> 2024-10-14
          </div>
          <div>
            <span>Completion Date:</span> 2024-10-14
          </div>
          <div>
            <span>Street Address:</span> Shahr-e-Quaid-e-Azam, Khoamer Khomer,
            Gilgit, Gilgit-Baltistan
          </div>
          <div>
            <span>Suite Number:</span> N/A
          </div>
          <div>
            <span>City:</span> Gilgit
          </div>
          <div>
            <span>State:</span> Pakistan
          </div>
          <div>
            <span>Postal Code:</span> 15300
          </div>
          <div>
            <span>Country:</span> Pakistan
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
      <Divider className="my-4" />
      {/* Client Information */}
      <section className={styles.bottomJob}>
        <h2>Order Tracking Update:</h2>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.completedBar} style={{ width: "35%" }}></div>
          </div>
          <div className={styles.progressLabels}>
            {progress.map((step, index) => (
              <span
                key={index}
                className={`${styles.progressLabel} ${
                  step.status === "completed" ? styles.completed : ""
                } ${step.status === "current" ? styles.current : ""}`}
              >
                {step.label}
              </span>
            ))}
          </div>
        </div>

        {/* Status Table */}
        <table className={styles.statusTable}>
          <thead>
            <tr>
              <th>Details</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {progress.map((step, index) => (
              <tr key={index} className={styles[step.status]}>
                <td className="flex align-middle">
                  <span className={`${styles.icon} me-2`}> {step.icon} </span>
                  <div className="flex flex-col">
                    <p className={styles.stepsLabel}>{step.label}</p>
                    <p className={styles.stepDescription}>
                      {index === 0
                        ? "You placed a proposal to this Request"
                        : "Lorem Ipsum is simply dummy text"}
                    </p>
                  </div>
                </td>
                <td className={styles.date}>{step.date}</td>
                <td className={styles.date}>{step.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Action Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.backButton}>Back</button>
          <button className={styles.startOrderButton}>Start Order</button>
        </div>
      </section>
    </div>
  );
}
