"use client";

import React, { useState } from "react";
import styles from "./PaymentMethodSelection.module.css";
import VisaIcon from "@/assets/icons/VisaIcon";
import MasterIcon from "@/assets/icons/MasterIcon";
import PayIcon from "@/assets/icons/PayIcon";
import StripeIcon from "@/assets/icons/StripeIcon";
import PayPalIcon from "@/assets/icons/PayPalIcon";
import ConfirmPaymentModal from "./ConfirmPaymentModal";

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    lastFour: "1234",
    expiry: "06/2024",
    logo: <VisaIcon />,
  },
  {
    id: 2,
    type: "Mastercard",
    lastFour: "1234",
    expiry: "08/2024",
    logo: <MasterIcon />,
  },
  {
    id: 3,
    type: "Pay",
    lastFour: "1234",
    expiry: "06/2024",
    logo: <PayIcon />,
  },
  {
    id: 4,
    type: "Stripe",
    lastFour: "1234",
    expiry: "06/2024",
    logo: <StripeIcon />,
  },
  {
    id: 5,
    type: "PayPal",
    lastFour: "1234",
    expiry: "06/2024",
    logo: <PayPalIcon />,
  },
];

export default function PaymentMethodSelection() {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const paymentDetails = {
    vendorName: "Js Brothers",
    serviceType: "Electrician",
    requestDate: "10/14/2024",
    status: "Completed",
    totalAmount: "1000",
  };
  const handleSelection = (id) => {
    setSelectedMethod(id);
  };

  const handleNext = () => {
    console.log("co");

    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select your Payment method</h1>
      <div className={styles.paymentMethods}>
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`${styles.paymentMethod} ${
              selectedMethod === method.id ? styles.selected : ""
            }`}
          >
            <div className={styles.methodInfo}>
              {/* <img
                src={method.logo}
                alt={method.type}
                className={styles.logo}
              /> */}
              {method.logo}
              <div>
                <p className={styles.methodType}>
                  {method.type} ending in {method.lastFour}
                </p>
                <p className={styles.expiry}>Expiry {method.expiry}</p>
                <div className={styles.actions}>
                  <button type="button" className={styles.action}>
                    Set as default
                  </button>
                  <button type="button" className={styles.action}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <input
              type="radio"
              name="paymentMethod"
              checked={selectedMethod === method.id}
              onChange={() => handleSelection(method.id)}
              className={styles.radioInput}
            />
          </label>
        ))}
      </div>
      <button className={styles.nextButton} onClick={handleNext}>
        Next
      </button>
      <ConfirmPaymentModal
        visible={isModalOpen}
        onClose={handleCloseModal}
        paymentDetails={paymentDetails}
      />
    </div>
  );
}
