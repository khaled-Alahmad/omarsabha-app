// MyProposals.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "./MyProposals.module.css";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const mockData = [
  {
    title: "Electrician",
    createdOn: "2024-10-14",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly-rate",
    flatRateAmount: "N/A",
    hourlyRate: "$10 hourly",
    estimatedHours: 10,
    status: "Active",
  },
  {
    title: "Electrician",
    createdOn: "2024-10-14",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly-rate",
    flatRateAmount: "N/A",
    hourlyRate: "$10 hourly",
    estimatedHours: 10,
    status: "Active",
  },
  {
    title: "Electrician",
    createdOn: "2024-10-14",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly-rate",
    flatRateAmount: "N/A",
    hourlyRate: "$10 hourly",
    estimatedHours: 10,
    status: "Active",
  },
  {
    title: "Electrician",
    createdOn: "2024-10-14",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly-rate",
    flatRateAmount: "N/A",
    hourlyRate: "$10 hourly",
    estimatedHours: 10,
    status: "Active",
  },
  {
    title: "Electrician",
    createdOn: "2024-10-14",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    paymentType: "Hourly-rate",
    flatRateAmount: "N/A",
    hourlyRate: "$10 hourly",
    estimatedHours: 10,
    status: "Active",
  },
  // Repeat similar objects or fetch real data from an API
];

export default function MyJobs() {
  const [proposals, setProposals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const proposalsPerPage = 2;
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching data
    setProposals(mockData);
  }, []);

  const indexOfLastProposal = currentPage * proposalsPerPage;
  const indexOfFirstProposal = indexOfLastProposal - proposalsPerPage;
  const currentProposals = proposals.slice(
    indexOfFirstProposal,
    indexOfLastProposal
  );

  const totalPages = Math.ceil(proposals.length / proposalsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const services = [
    { key: "1", label: "Service 1" },
    { key: "2", label: "Service 2" },
    { key: "3", label: "Service 3" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.proposalHeader}>
        <h2 className={styles.title}>My Jobs</h2>

        <div className={styles.searchFilterContainer}>
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
        </div>
      </div>
      {currentProposals.map((proposal, index) => (
        <div
          key={index}
          className={styles.proposalCard}
          onClick={() => {
            router.push("/vendor/jobs/1");
          }}
        >
          <div className={styles.proposalHeader}>
            <h3>{proposal.title}</h3>
            <span className={styles.status}>
              Status: <span> {proposal.status} </span>
            </span>
          </div>
          <p className={styles.date}>Created On: {proposal.createdOn}</p>
          <p className={styles.desc}>{proposal.description}</p>
          <p className={styles.itemsProposal}>
            <div>
              <strong>Payment Type:</strong> {proposal.paymentType}{" "}
            </div>
            <div>
              {" "}
              <strong>Flat Rate Amount:</strong> {proposal.flatRateAmount}{" "}
            </div>
            <div>
              {" "}
              <strong>Hourly Rate:</strong> {proposal.hourlyRate}{" "}
            </div>
            <div>
              {" "}
              <strong>Estimated Hours:</strong> {proposal.estimatedHours}
            </div>
          </p>
        </div>
      ))}

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`${styles.paginationButton} ${
              currentPage === i + 1 ? styles.active : ""
            }`}
            onClick={() => changePage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
