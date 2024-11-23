"use client";
import styles from "@/assets/css/styles.module.css";
import Image from "next/image";
import ImageBt from "@/assets/images/website/Vector 1.png";
import bgImage from "@/assets/images/website/bg-our-service.png";

import {
  Button,
  Card,
  Divider,
  Input,
  Select,
  SelectItem,
  Skeleton,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import VendorDetails from "@/components/vendors/VendorDetails";
import { fetchData } from "@/context/apiHelper";
import GetTheApp from "../website/@home/get-the-app/page";
import StepGetService from "./@steps/page";
import icons from "@/assets/icons/Icon.png";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";

export default function VendorHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [filters, setFilters] = useState({ search: "" });
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  const services = [
    { key: "1", label: "Service 1" },
    { key: "2", label: "Service 2" },
    { key: "3", label: "Service 3" },
  ];

  // Fetch vendors based on filters
  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      try {
        const data = await fetchData("vendors", filters);
        setVendors(data.data || []);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [filters]);

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleServiceFilter = (serviceKey) => {
    setFilters((prev) => ({ ...prev, service: serviceKey }));
  };

  const handleOpenVendorDetails = (vendorId) => {
    setSelectedVendorId(vendorId);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className={styles.ourService}
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="container">
          <div className={styles.ourServiceText}>
            <h1>Our Service Providers</h1>
            <p>
              At InstaHandi, we offer a wide range of home services to meet all
              your needs. Our platform connects you with skilled professionals
              who are ready to tackle any project, big or small. Explore our
              services below:
            </p>
          </div>
          <div className={styles["bottom-wave"]}>
            <Image src={ImageBt} alt="Bottom Wave Image" layout="responsive" />
          </div>
        </div>
      </section>
      <section className={styles.vendorsSection}>
        <div className={styles.hederVendorsSection}>
          <h2 className={`${styles.servicesTitle} flex-1`}>
            Professional Vendors
          </h2>
          <div className={styles.filterVendorContainer}>
            <Input
              isClearable
              size="lg"
              radius="md"
              className="me-2 max-w-xs"
              placeholder="Search by names"
              value={filters.search}
              onChange={handleSearchChange}
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Select
              placeholder="Filter by Services"
              size="lg"
              radius="md"
              onChange={(key) => handleServiceFilter(key)}
              className="max-w-xs"
            >
              {services.map((service) => (
                <SelectItem key={service.key} value={service.key}>
                  {service.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className={`${styles.servicesItems} grid my-8 gap-4 grid-cols-12`}>
          {loading
            ? Array.from({ length: 4 }, (_, index) => (
                <Card
                  className={`${styles.VendorItemsCard} w-[320px] lg:col-span-3 col-span-12`}
                  key={index}
                >
                  <Skeleton className="rounded-lg w-full h-40 mb-2" />
                  <Skeleton className="rounded-lg w-3/4 h-5 mb-2" />
                  <Skeleton className="rounded-lg w-1/2 h-5" />
                </Card>
              ))
            : vendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className={`${styles.VendorItemsCard} lg:col-span-3 col-span-12`}
                >
                  <div className={styles.ImageVendor}>
                    <img
                      src={vendor.user?.profile_photo}
                      alt={vendor.first_name}
                      className="mb-2"
                      style={{
                        width: "18rem",
                        height: "14rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className={styles.titleVendor}>
                    {vendor.user?.first_name} {vendor.user?.last_name}
                  </div>
                  <Divider className="my-2" />
                  <div className={styles.descVendor}>
                    {vendor.user?.description}
                  </div>
                  <div className={styles.vendorLine}>
                    <Image src={icons} alt="Experience Icon" className="me-2" />
                    {vendor.years_experience} Years in Business
                  </div>
                  <div className={styles.bottomVendorCard}>
                    <Button
                      className={styles.vendorCardButton}
                      onClick={() => handleOpenVendorDetails(vendor.id)}
                    >
                      View Profile
                    </Button>
                    <span className={styles.ratingVendorCard}>
                      {vendor.average_rating}/Rating⭐
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </section>
      <StepGetService />
      <GetTheApp />
      <VendorDetails
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        vendorId={selectedVendorId}
      />
    </>
  );
}
