import styles from "@/assets/css/styles.module.css";
export default function StepGetService() {
  return (
    <section className="lg:flex flex-col align-middle items-center justify-start lg:ps-12  text-center lg:pt-8 pt-4  ps-8 ">
      <div className={styles.containerGetOurService}>
        <span className={styles.subTitleGetOurService}>How It Works</span>
        <h3 className={styles.titleGetOurService}>
          How To Get Sell My Service
        </h3>
      </div>
      <div className={styles.septsGetOurService}>
        <div className={styles.CardSeptsGetService}>
          <span className={styles.subTitleCardSeptsGetService}>01</span>
          <h3 className={styles.titleCardSeptsGetOurService}>Create Account</h3>
          <p className={styles.descCardSeptsGetOurService}>
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className={styles.CardSeptsGetService}>
          <span className={styles.subTitleCardSeptsGetService}>02</span>
          <h3 className={styles.titleCardSeptsGetOurService}>
            Bid On proposals
          </h3>
          <p className={styles.descCardSeptsGetOurService}>
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className={styles.CardSeptsGetService}>
          <span className={styles.subTitleCardSeptsGetService}>03</span>
          <h3 className={styles.titleCardSeptsGetOurService}>Get Hired</h3>
          <p className={styles.descCardSeptsGetOurService}>
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>
    </section>
  );
}
