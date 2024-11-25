// `src/app/components/FaqSection.js`
"use client";

import { useState } from "react";
import styles from "@/assets/css/styles.module.css"; // Import CSS module

export default function FaqSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              {item.answer}
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>{item.question}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
