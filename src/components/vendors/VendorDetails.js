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
import { useState } from "react";

export default function VendorDetails({ isOpen, onOpen, onOpenChange }) {
    const [scrollBehavior, setScrollBehavior] = useState("outside");

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
                  <Image
                    src={VendorImage}
                    alt="Frame Image"
                    className={`mb-2 ${styles.vendorImageDetails}`}
                    // width={300}
                    // layout="responsive"
                  />
                  <h3 className={styles.VendorDetailsName}>
                    Vendor/Company Name
                  </h3>
                  <span className={styles.VendorDetailsReview}>
                    ⭐⭐⭐⭐ 15 Reviews
                  </span>
                  <p className={styles.VendorDetailsDesc}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
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
                        Street Address: Shahr-e-Quaid - e - Azam, Khoamer
                        Khomer, Gilgit, Gilgit-Baltistan
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        City:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>Gilgit</p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        State:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>Pakistan</p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Country:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>Pakistan</p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Postal Code:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>15100</p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Years in business:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        {" "}
                        12-20 years
                      </p>
                    </div>
                    <div className={styles.VendorDetailsInfo}>
                      <span className={styles.VendorDetailsInfoLabel}>
                        Phone number:
                      </span>
                      <p className={styles.VendorDetailsInfoValue}>
                        03555 35 41 62
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-evenly w-full m-4 ">
                    <Button
                      as={Link}
                      onPress={onClose}
                      href="#"
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
