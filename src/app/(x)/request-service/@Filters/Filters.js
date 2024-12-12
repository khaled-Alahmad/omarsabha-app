"use client";
import React, { useEffect, useState } from "react";
import styles from "../ServiceRequestList.module.css";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import { Input } from "@nextui-org/react";
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

  return (
    <div className={styles.filters}>
      <Input
        isClearable
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="lg"
        radius="md"
        className="me-2 lg:max-w-xs"
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
        placeholder="Search by Zip code"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      {/* <Input onChange={(e) => updateFilter("min_price", e.target.value)} /> */}
      <Input
        isClearable
        // value={searchQuery}
        onChange={(e) => updateFilter("price_min", e.target.value)}
        size="lg"
        radius="md"
        type="number"
        className="me-2 lg:max-w-xs"
        classNames={{
          label: "text-black/100 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            // "ms-2 border-l-2 border-l-slate-400",
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
        placeholder="min price"
      // startContent={
      //   <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      // }
      />
      <Input
        isClearable
        // value={searchQuery}
        onChange={(e) => updateFilter("price_max", e.target.value)}
        size="lg"
        radius="md"
        type="number"
        className="me-2 lg:max-w-xs"
        classNames={{
          label: "text-black/100 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            // "ms-2 border-l-2 border-l-slate-400",
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
        placeholder="max price"
      // startContent={
      //   <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      // }
      />
      {/* Filter by Budget */}
      {/* </button> */}
      {/* <button onClick={() => updateFilter("location", "Denver")}>
        Filter by Location
      </button> */}
      {/* <button onClick={() => updateFilter("category", "Electrical")}>
        Filter by Category
      </button> */}
    </div>
  );
}
