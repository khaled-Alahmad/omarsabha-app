"use client";
import React, { useState, useEffect } from "react";
import styles from "../MyProposals.module.css";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filters({ filters }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  // Debounce state to control when the filter updates
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // Function to update the URL query parameters
  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  // Update debounced query state with delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler); // Clear timeout if component re-renders within delay
    };
  }, [searchQuery]);

  // Sync the debounced query with the URL
  useEffect(() => {
    if (debouncedQuery !== searchParams.get("search")) {
      updateFilter("search", debouncedQuery);
    }
  }, [debouncedQuery]);
  const services = [
    { key: "1", label: "Service 1" },
    { key: "2", label: "Service 2" },
    { key: "3", label: "Service 3" },
  ];
  return (
    <div className={styles.searchFilterContainer}>
      <Input
        // label="Search"
        isClearable
        size="lg"
        radius="md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="me-2  lg:max-w-xs "
        classNames={{
          label: "text-black/100 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "ms-2 border-l-2 border-l-slate-400",
            "placeholder:text-transparent-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-transparent",
            "dark:bg-transparent",
            "border-2",

            "!cursor-text",
          ],
        }}
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      {/* <Select
        placeholder="Filter by Services"
        size="lg"
        className=" lg:max-w-xs  "
        radius="md"
        classNames={{
          base: "bg-transparent",
          label: "color-primary",
          trigger: "bg-transparent border-2",

          mainWrapper: "bg-transparent  text-slate-400",
        }}
      >
        {services.map((animal) => (
          <SelectItem key={animal.key} value={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select> */}
    </div>
  );
}
