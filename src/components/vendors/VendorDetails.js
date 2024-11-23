import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import styles from "@/assets/css/styles.module.css";
import Image from "next/image";
import VendorImage from "@/assets/images/website/vendor-details.png"; // Bottom wave image
import { useEffect, useState } from "react";
import { fetchData } from "@/context/apiHelper";

export default function VendorDetails({ isOpen, onOpenChange, vendorId }) {
  console.log("vendor id:", vendorId);

  const [scrollBehavior, setScrollBehavior] = useState("outside");

  const [vendorDetails, setVendorDetails] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      if (vendorId) {
        try {
          const data = await fetchData(`vendors/${vendorId}`);
          setVendorDetails(data.user);
          console.log(data.user);
        } catch (error) {
          console.error("Error fetching vendor details:", error);
        }
      }
    };

    fetchVendorDetails();
  }, [vendorId]);
  if (!vendorDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Modal
        backdrop="opaque"
        size="5xl"
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader> */}
              <ModalBody className="p-8">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={vendorDetails.user?.profile_photo}
                    alt="Frame Image"
                    className={`mb-2 ${styles.vendorImageDetails}`}
                    style={{
                      width: "18rem",
                      height: "14rem",
                      objectFit: "cover",
                    }}
                  />
                  <h3 className={styles.VendorDetailsName}>
                    {vendorDetails.user?.first_name}
                    {vendorDetails.user?.last_name}
                  </h3>
                  <span className={styles.VendorDetailsReview}>
                    ⭐⭐⭐⭐ 15 Reviews
                  </span>
                  <p className={styles.VendorDetailsDesc}>
                    {vendorDetails.user?.description}{" "}
                  </p>
                  <div className={styles.VendorDetailsInfoContainer}>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Services Category:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>Painter</p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Street Address:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {vendorDetails.user?.location?.street_address}
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        City:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {" "}
                        {vendorDetails.user?.location?.city}
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        State:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {" "}
                        {vendorDetails.user?.location?.state}
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Country:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {vendorDetails.user?.location?.country}
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Postal Code:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {vendorDetails.user?.location?.zip_code}
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Years in business:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {vendorDetails.user?.years_experience}
                        years
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Phone number:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {vendorDetails.user?.phone || "not exist"}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-evenly w-full m-4 ">
                    <Button
                      // as={Link}
                      onPress={onClose}
                      // href="#"
                      className={`${styles.backBolton} `}
                      // style={{ flex: "1" }}
                    >
                      back
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
