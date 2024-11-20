"use client";

import styles from "@/assets/css/styles.module.css"; // Import CSS module

import { useState } from "react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does InstaHandi work?",
      answer:
        "InstaHandi connects homeowners with skilled professionals for various home services. Simply create a project, receive bids from pre-vetted service providers, and choose the best option based on your needs and budget.",
    },
    {
      question: "Are the service providers on InstaHandi verified?",
      answer:
        "Yes, all service providers are pre-vetted and verified before they can offer their services on InstaHandi.",
    },
    {
      question: "How do I get quotes for my project?",
      answer:
        "You can create a project on InstaHandi, and service providers will send you their bids based on your requirements.",
    },
    {
      question: "Is there a fee to use InstaHandi?",
      answer:
        "InstaHandi is free for homeowners to use. You only pay for the services you hire.",
    },
    {
      question: "What if I’m not satisfied with the service provided?",
      answer:
        "If you’re not satisfied, you can communicate with the service provider directly, and InstaHandi will assist in finding a resolution if needed.",
    },
  ];
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
