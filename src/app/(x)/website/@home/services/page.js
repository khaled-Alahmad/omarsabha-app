import styles from "@/assets/css/styles.module.css";
import CardService from "@/components/CardService";
import { fetchData } from "@/context/apiHelper";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// async function getServices() {
//     return data.data.services;
// }

export default async function ServiceHome() {
  const data = await fetchData("home-data");
  const services = data.data.services;

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <span className={styles.servicesDesc}>
        Need a quick fix around the house? Our skilled professionals are
        available for all types of home repairs, from fixing leaky faucets to
        repairing broken windows. With InstaHandi, you can ensure that even the
        smallest issues are addressed promptly and efficiently.
      </span>
      <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
        {services.map((item) => (
          <CardService item={item} key={item.id} />
        ))}
      </div>
      <Button as={Link} href="/service" className={styles.ctaButton}>
        View All Services
      </Button>
    </section>
  );
}
