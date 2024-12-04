"use client";

import React, { useState } from "react";
import styles from "./PaymentMethodSelection.module.css";
import VisaIcon from "@/assets/icons/VisaIcon";
import MasterIcon from "@/assets/icons/MasterIcon";
import PayIcon from "@/assets/icons/PayIcon";
import StripeIcon from "@/assets/icons/StripeIcon";
import PayPalIcon from "@/assets/icons/PayPalIcon";

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

  const handleSelection = (id) => {
    setSelectedMethod(id);
  };

  const handleNext = () => {
    console.log(`Selected Payment Method ID: ${selectedMethod}`);
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
    </div>
  );
}
