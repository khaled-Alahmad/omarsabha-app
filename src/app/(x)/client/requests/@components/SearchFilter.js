"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "../Requests.module.css";
import {
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", e.target.value);
    params.delete("page"); // Reset pagination on new search
    router.push(`?${params.toString()}`);
  };

  const handleFilter = (key) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", key);
    params.delete("page"); // Reset pagination on new filter
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.searchFilter}>
      <h1 className={styles.titleS}>My Requests</h1>

      <Input
        // label="Search"
        isClearable
        size="lg"
        radius="md"
        onChange={handleSearch}
        defaultValue={searchParams.get("search") || ""}
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
        placeholder="Search by names"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Select
        placeholder="Filter by Date"
        size="lg"
        className=" lg:max-w-xs  "
        onAction={handleFilter}
        radius="md"
        classNames={{
          base: "bg-transparent",
          label: "color-primary",
          trigger: "bg-transparent border-2",

          mainWrapper: "bg-transparent  text-slate-400",
        }}
      >
        <SelectItem key="recent">Most Recent</SelectItem>
        <SelectItem key="oldest">Oldest</SelectItem>
      </Select>
      {/* <Dropdown>
        <DropdownTrigger>
          <button className={styles.filterButton}>Filter by Date</button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Filter Options" onAction={handleFilter}>
          <DropdownItem key="recent">Most Recent</DropdownItem>
          <DropdownItem key="oldest">Oldest</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
    </div>
  );
}
