// MyProposals.js
import React from "react";
import styles from "./MyProposals.module.css";
import JobList from "./@JobList/JobList";
import Pagination from "./@Pagination/Pagination";
import Filters from "./@Fillter/Fillter";
import { fetchData } from "@/context/apiHelper";

export default async function MyJobs({ searchParams }) {
  const filters = {
    search: searchParams.search || "",
    page: searchParams.page || 1, // Add page to filters
    limit: searchParams.limit || 10, // Default per_page value
  };

  // Fetch data from the API
  const data = await fetchData("vendors/orders", filters);
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.proposalHeader}>
        <h2 className={styles.title}>My Jobs</h2>
        <Filters filters={filters} />
        {/* <div className={styles.searchFilterContainer}>
          <Input
            // label="Search"
            isClearable
            size="lg"
            radius="md"
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
            className=" min-w-2xl  "
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
          </Select>
        </div> */}
      </div>
      <JobList data={data.data} />

      <Pagination meta={data.meta} />
    </div>
  );
}
