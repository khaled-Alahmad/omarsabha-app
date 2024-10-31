// app/website/contact/page.js
import styles from "@/assets/css/styles.module.css";
const termsAndConditions = [
  {
    title: "1. Introduction",
    description:
      "Welcome to instaHandi. These Terms and Conditions govern your use of our platform, connecting homeowners with service providers.",
  },
  {
    title: "2. User Accounts",
    description: (
      <>
        <strong>Registration</strong>
        <br />
        Accurate information is required during registration.
        <br />
        <strong>Responsibility</strong>
        <br />
        Users must maintain account confidentiality.
      </>
    ),
  },
  {
    title: "3. Services",
    description: (
      <>
        <strong>Scope</strong>
        <br />
        instaHandi connects homeowners with various service providers.
        <br />
        <strong>Payment</strong>
        <br />
        Payments are made through the platform.
      </>
    ),
  },
  {
    title: "4. Bidding Process",
    description: (
      <>
        <strong>Submission</strong>
        <br />
        Homeowners submit job requests and receive bids from providers.
        <br />
        <strong>Selection</strong>
        <br />
        Homeowners select providers based on bids.
        <br />
        <strong>Job Scope</strong>
        <br />
        Providers must not perform jobs outside the defined request. instaHandi
        is not responsible for any unauthorized work.
      </>
    ),
  },
  {
    title: "5. Responsibilities",
    description: (
      <>
        <strong>Service Providers</strong>
        <br />
        Must adhere to job descriptions and legal requirements.
        <br />
        <strong>Homeowners</strong>
        <br />
        Must provide accurate job descriptions and make timely payments.
      </>
    ),
  },
  {
    title: "6. Liability",
    description: (
      <>
        <strong>Vendor Damages</strong>
        <br />
        Homeowners waive the right to sue for damages if the vendor is not
        insured. If insured, claims can only be made against the vendor’s
        business insurance.
        <br />
        <strong>Limitation</strong>
        <br />
        instaHandi is not liable for damages resulting from unauthorized work.
      </>
    ),
  },
  {
    title: "7. Payment and Transaction Hold",
    description: (
      <>
        <strong>Transaction Hold</strong>
        <br />
        Funds for job costs are held when the vendor is hired.
        <br />
        <strong>Release of Funds</strong>
        <br />
        Funds are released to the vendor 7 days after the job is marked as
        completed.
        <br />
        <strong>Commission</strong>
        <br />A 5% fee will be deducted from the job total as a commission for
        instaHandi.
      </>
    ),
  },
  {
    title: "8. Dispute Resolution",
    description:
      "instaHandi provides a mechanism for resolving disputes between homeowners and providers.",
  },
  {
    title: "9. Privacy",
    description: (
      <>
        <strong>Data Protection</strong>
        <br />
        instaHandi respects user privacy and complies with data protection laws.
      </>
    ),
  },
  {
    title: "10. Amendments",
    description:
      "instaHandi reserves the right to amend these Terms and Conditions at any time.",
  },
  {
    title: "11. Contact Information",
    description:
      "For questions or concerns, users can contact instaHandi support.",
  },
];
export default function TermsPage() {
  return (
    <>
      <section className={styles.termsSection}>
        <h1 className={styles.titleTerms}>InstaHandi Terms and Conditions</h1>
        <span className={styles.dateTerms}> Last Updated: Jun 12, 2024</span>
        <div className={styles.termsContainer}>
          {termsAndConditions.map((item, index) => (
            <div key={index} className={styles.termItem}>
              <h2 className={styles.termTitle}>{item.title}</h2>
              <p className={styles.termDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
