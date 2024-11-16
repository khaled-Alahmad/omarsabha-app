"use client";
import React, { useState } from "react";
import styles from "@/assets/css/styles.module.css"; // Import CSS module
import { Button, Input } from "@nextui-org/react";
import imageLogin from "@/assets/images/auth/login-image.png";

const HelpSupport = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <section className={styles.faqSection} style={{ padding: "2rem 0rem" }}>
        <h2 className={styles.faqTitle}>Help & support</h2>
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
      <section className={styles.contactForm}>
        <div className={styles.imageSection}>
          <img src={imageLogin.src} alt="Home Image" className={styles.image} />
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.title}>Contact Foam</h2>
          {/* <p className={styles.subtitle}>Enter detail to Sign in</p> */}

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              isClearable
              variant="bordered"
              label="First Name"
              placeholder="First Name"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isClearable
              variant="bordered"
              label="Last Name"
              placeholder="Last Name"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              isClearable
              variant="bordered"
              label="Phone Number"
              placeholder="Phone Number"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isClearable
              variant="bordered"
              label="Email Address"
              placeholder="Email Address"
              labelPlacement="outside"
              fullWidth
              className={styles.input}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              variant="solid"
              color="primary"
              className={styles.signUpButton}
              style={{ width: "fit-content", padding: " 0.625rem 1.125rem" }}
            >
              Send Details
            </Button>
          </form>
        </div>
      </section>
      <section className={styles.supportSection}>
        <div className={styles.supportText}>
          <h3>Need More Help?</h3>
          <p>Chat With Support Now.</p>
        </div>
        <div className={styles.supportButton}>
          <Button>Chat Now</Button>
        </div>
      </section>
    </div>
  );
};

export default HelpSupport;
