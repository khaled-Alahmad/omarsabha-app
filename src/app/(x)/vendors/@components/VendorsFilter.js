"use client";

import { useRouter, useSearchParams } from "next/navigation";

import styles from "@/assets/css/styles.module.css";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
export default function VendorsFilter({ search, service }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`/vendors?${params.toString()}`);
  };

  const handleServiceChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("service", value);
    } else {
      params.delete("service");
    }
    router.push(`/vendors?${params.toString()}`);
  };

  return (
    <div className={styles.hederVendorsSection}>
      <h2 className={`${styles.servicesTitle} flex-1`}>Professional Vendors</h2>
      <div className={styles.filterVendorContainer}>
        <Input
          isClearable
          size="lg"
          radius="md"
          className="me-2 max-w-xs"
          placeholder="Search by names"
          defaultValue={search}
          onChange={handleSearchChange}
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Select
          placeholder="Filter by Services"
          size="lg"
          className="max-w-xs"
          radius="md"
          defaultValue={service}
          onValueChange={handleServiceChange}
        >
          <SelectItem value="">All Services</SelectItem>
          <SelectItem value="Service 1">Service 1</SelectItem>
          <SelectItem value="Service 2">Service 2</SelectItem>
          <SelectItem value="Service 3">Service 3</SelectItem>
        </Select>
      </div>
    </div>
  );
}
