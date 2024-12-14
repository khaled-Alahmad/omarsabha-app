import styles from "@/assets/css/styles.module.css"; // Import CSS module

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { VendorSingUp } from "./(x)/website/@home/vendor-sign-up/page";
import ServiceHome from "./(x)/website/@home/services/page";
import GetTheApp from "./(x)/website/@home/get-the-app/page";
import OurVendors from "./(x)/website/@home/our-vendors/page";
import HeroSection from "./(x)/website/@home/hero/page";
import FloatingButtonWrapper from "./(x)/website/@home/floating-button-wrapper/page";
import Faq from "./(x)/website/@home/faq/page";
import Testimonials from "./(x)/website/@home/testimonials/page";
import { cookies } from "next/headers";

// The main Home component
export default async function Home() {
  // const [isChatOpen, setIsChatOpen] = useState(false);
  // const toggleChat = () => {
  //   setIsChatOpen(!isChatOpen);
  // };
  const cookieStore = cookies();
  const userRole = cookieStore.get("userRole")?.value || null;
  const authToken = cookieStore.get("authToken")?.value || null;
  return (
    <>
      <NavBar userRole={userRole} authToken={authToken} />

      <div className={styles.home}>
        <HeroSection />

        <VendorSingUp />
        <ServiceHome />

        <GetTheApp />
        <section className={styles.cutSection}></section>
        <OurVendors />
        <Testimonials />

        <Faq />

        {/* <FloatingButton onClick={toggleChat} />
        {isChatOpen && (
          <div
            style={{ zIndex: "9999", height: "400px" }}
            className="fixed bottom-20 right-4 bg-white-50 shadow-lg rounded-lg  w-80 transition-transform transform duration-300 ease-in-out"
          >
            <ChatComponent />
          </div>
        )} */}
        <FloatingButtonWrapper />
      </div>
      <Footer />
    </>
  );
}
