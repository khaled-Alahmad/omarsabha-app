import styles from "@/assets/css/styles.module.css"; // Import CSS module
import FaqSection from "./FaqSection";
import { fetchData } from "@/context/apiHelper";

export default async function Faq() {
  const data = await fetchData("public/home-data");
  const faqs = data.data.faqs || [];
  return <FaqSection faqs={faqs} />;
}
