"use client";

import React, { useState, useMemo } from "react";
import {
  Dropdown,
  Button,
  Pagination,
  Tooltip,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DateRangePicker,
} from "@nextui-org/react";
import styles from "./PaymentsHistory.module.css";

const PaymentsHistory = () => {
  const allRows = [
    {
      clientName: "Tahir Ali",
      paymentDate: "2024-09-08T15:13:00Z",
      through: "Wise - 5466xxxx",
      servicesType: "Savings",
      amount: "+$15,000.00",
      status: "Completed",
    },
    {
      clientName: "Tahir Ali",
      paymentDate: "2024-09-10T14:13:00Z",
      through: "Wise - 5466xxxx",
      servicesType: "Savings",
      amount: "+$20,000.00",
      status: "Completed",
    },
    {
      clientName: "Tahir Ali",
      paymentDate: "2024-09-10T14:13:00Z",
      through: "Wise - 5466xxxx",
      servicesType: "Savings",
      amount: "+$20,000.00",
      status: "Completed",
    },
    {
      clientName: "Tahir Ali",
      paymentDate: "2024-09-11T13:13:00Z",
      through: "Wise - 5466xxxx",
      servicesType: "Savings",
      amount: "+$25,000.00",
      status: "Pending",
    },
    {
      clientName: "Tahir Ali",
      paymentDate: "2024-09-15T12:13:00Z",
      through: "Wise - 5466xxxx",
      servicesType: "Savings",
      amount: "+$10,000.00",
      status: "Completed",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const filteredRows = useMemo(() => {
    const { startDate, endDate } = selectedDateRange;

    return allRows.filter((row) => {
      const paymentDate = new Date(row.paymentDate);

      if (startDate && endDate) {
        return (
          paymentDate >= new Date(startDate) && paymentDate <= new Date(endDate)
        );
      }
      return true; // Show all rows if no date range is selected
    });
  }, [selectedDateRange, allRows]);

  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredRows.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage, filteredRows]);

  const renderActions = () => (
    <Dropdown>
      <DropdownTrigger>
        <Button auto flat size="xs" className={styles.actionsButton}>
          ⋮
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" className={styles.dropdownMenu}>
        <DropdownItem
          key="delete"
          color="error"
          className="hover:bg-green-200"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M2 4.49967H3.33333M3.33333 4.49967H14M3.33333 4.49967V13.833C3.33333 14.1866 3.47381 14.5258 3.72386 14.7758C3.97391 15.0259 4.31304 15.1663 4.66667 15.1663H11.3333C11.687 15.1663 12.0261 15.0259 12.2761 14.7758C12.5262 14.5258 12.6667 14.1866 12.6667 13.833V4.49967H3.33333ZM5.33333 4.49967V3.16634C5.33333 2.81272 5.47381 2.47358 5.72386 2.22353C5.97391 1.97348 6.31304 1.83301 6.66667 1.83301H9.33333C9.68696 1.83301 10.0261 1.97348 10.2761 2.22353C10.5262 2.47358 10.6667 2.81272 10.6667 3.16634V4.49967M6.66667 7.83301V11.833M9.33333 7.83301V11.833"
                stroke="#C91D0A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Delete Details
        </DropdownItem>
        <DropdownItem
          key="csv"
          color="error"
          className="hover:bg-green-200"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 0.5V5.7C6.50001 5.99831 6.61287 6.28591 6.81657 6.50674C7.02026 6.72756 7.30018 6.86576 7.60175 6.8944L7.71875 6.9H13V14.9C13.0001 15.3037 12.8453 15.6925 12.5665 15.9884C12.2878 16.2844 11.9057 16.4657 11.4969 16.496L11.375 16.5H1.625C1.21503 16.5001 0.820165 16.3477 0.519555 16.0732C0.218945 15.7987 0.0348103 15.4225 0.00406267 15.02L8.14678e-08 14.9V2.1C-0.000129658 1.69634 0.154705 1.30755 0.433466 1.01156C0.712227 0.715576 1.09431 0.534275 1.50313 0.504L1.625 0.5H6.5ZM5.92556 7.8384L4.20225 9.5352C4.12465 9.609 4.06275 9.69727 4.02017 9.79488C3.97759 9.89248 3.95517 9.99746 3.95423 10.1037C3.9533 10.2099 3.97385 10.3152 4.01471 10.4136C4.05556 10.5119 4.11589 10.6012 4.19218 10.6763C4.26847 10.7514 4.35918 10.8108 4.45904 10.8511C4.55889 10.8913 4.66588 10.9115 4.77376 10.9106C4.88165 10.9097 4.98826 10.8876 5.08739 10.8457C5.18652 10.8038 5.27618 10.7428 5.35113 10.6664L5.6875 10.3352V12.5C5.6875 12.7122 5.7731 12.9157 5.92548 13.0657C6.07785 13.2157 6.28451 13.3 6.5 13.3C6.71549 13.3 6.92215 13.2157 7.07452 13.0657C7.2269 12.9157 7.3125 12.7122 7.3125 12.5V10.3352L7.64887 10.6664C7.72382 10.7428 7.81348 10.8038 7.91261 10.8457C8.01174 10.8876 8.11835 10.9097 8.22624 10.9106C8.33412 10.9115 8.44111 10.8913 8.54096 10.8511C8.64082 10.8108 8.73153 10.7514 8.80782 10.6763C8.88411 10.6012 8.94444 10.5119 8.98529 10.4136C9.02615 10.3152 9.0467 10.2099 9.04577 10.1037C9.04483 9.99746 9.02241 9.89248 8.97983 9.79488C8.93725 9.69727 8.87535 9.609 8.79775 9.5352L7.07525 7.8384C6.99979 7.76402 6.91018 7.70501 6.81154 7.66475C6.71291 7.62449 6.60718 7.60377 6.50041 7.60377C6.39363 7.60377 6.2879 7.62449 6.18927 7.66475C6.09063 7.70501 6.00102 7.76402 5.92556 7.8384ZM8.125 0.5344C8.38774 0.58932 8.63257 0.707511 8.83756 0.8784L8.9375 0.9688L12.5239 4.5C12.7143 4.68729 12.8544 4.9182 12.9318 5.172L12.9642 5.3H8.125V0.5344Z"
                fill="#262727"
              />
            </svg>
          }
        >
          Export CSV
        </DropdownItem>
        <DropdownItem
          key="invoices"
          color="error"
          className="hover:bg-green-200"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6735 16.5H3.32468C2.44292 16.5 1.59727 16.1778 0.973775 15.6042C0.350277 15.0306 0 14.2526 0 13.4414V2.03115C0 1.09872 1.0031 0.507098 1.88557 0.788488C2.01222 0.828687 2.13476 0.887528 2.25318 0.965012L2.41941 1.07425C2.82375 1.33818 3.30746 1.4796 3.80324 1.47882C4.29902 1.47803 4.7822 1.33509 5.18554 1.06988C5.75172 0.69919 6.42938 0.5 7.1243 0.5C7.81923 0.5 8.49689 0.69919 9.06307 1.06988C9.46641 1.33509 9.94959 1.47803 10.4454 1.47882C10.9411 1.4796 11.4249 1.33818 11.8292 1.07425L11.9954 0.965012C12.9387 0.344556 14.2486 0.965012 14.2486 2.03115V8.63507H17.5733C17.7622 8.63507 17.9434 8.70412 18.077 8.82703C18.2107 8.94995 18.2857 9.11665 18.2857 9.29048V14.0968C18.2857 14.7342 18.0105 15.3454 17.5206 15.7961C17.0307 16.2468 16.3663 16.5 15.6735 16.5ZM14.4861 9.94589V14.0968C14.4861 14.3865 14.6112 14.6644 14.8339 14.8692C15.0565 15.0741 15.3586 15.1892 15.6735 15.1892C15.9884 15.1892 16.2904 15.0741 16.5131 14.8692C16.7358 14.6644 16.8609 14.3865 16.8609 14.0968V9.94589H14.4861ZM10.449 6.2319C10.449 6.05807 10.3739 5.89136 10.2403 5.76845C10.1067 5.64554 9.9255 5.57648 9.73655 5.57648H4.03711C3.84816 5.57648 3.66695 5.64554 3.53334 5.76845C3.39973 5.89136 3.32468 6.05807 3.32468 6.2319C3.32468 6.40572 3.39973 6.57243 3.53334 6.69534C3.66695 6.81825 3.84816 6.88731 4.03711 6.88731H9.73655C9.9255 6.88731 10.1067 6.81825 10.2403 6.69534C10.3739 6.57243 10.449 6.40572 10.449 6.2319ZM9.49907 8.85354C9.49907 8.67971 9.42401 8.51301 9.29041 8.39009C9.1568 8.26718 8.97559 8.19813 8.78664 8.19813H4.03711C3.84816 8.19813 3.66695 8.26718 3.53334 8.39009C3.39973 8.51301 3.32468 8.67971 3.32468 8.85354C3.32468 9.02737 3.39973 9.19407 3.53334 9.31699C3.66695 9.4399 3.84816 9.50895 4.03711 9.50895H8.78664C8.97559 9.50895 9.1568 9.4399 9.29041 9.31699C9.42401 9.19407 9.49907 9.02737 9.49907 8.85354ZM9.73655 10.8198C9.9255 10.8198 10.1067 10.8888 10.2403 11.0117C10.3739 11.1347 10.449 11.3014 10.449 11.4752C10.449 11.649 10.3739 11.8157 10.2403 11.9386C10.1067 12.0615 9.9255 12.1306 9.73655 12.1306H4.03711C3.84816 12.1306 3.66695 12.0615 3.53334 11.9386C3.39973 11.8157 3.32468 11.649 3.32468 11.4752C3.32468 11.3014 3.39973 11.1347 3.53334 11.0117C3.66695 10.8888 3.84816 10.8198 4.03711 10.8198H9.73655Z"
                fill="#262727"
              />
            </svg>
          }
        >
          Download Invoices
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Payments History</h2>
        <DateRangePicker
          variant="bordered"
          className={styles.dateRangePicker}
          onChange={(range) => {
            setSelectedDateRange({
              startDate: range.startDate ? range.startDate : null,
              endDate: range.endDate ? range.endDate : null,
            });
          }}
        />
      </div>
      {/* Add table wrapper for responsiveness */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Client Name</th>
              <th>Payment Date</th>
              <th>Through</th>
              <th>Services Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row, index) => (
              <tr key={index} className={styles.tableRow}>
                <td>{row.clientName}</td>
                <td>
                  {new Date(row.paymentDate).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
                <td>
                  {/* <Tooltip content={row.through}> */}
                  <span className={styles.through}>
                    <span className={styles.icon}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="32" height="32" rx="16" fill="#23A366" />
                        <path
                          d="M12.3253 12.8217L8 18.1394H15.7233L16.5907 15.631H13.2813L15.3033 13.1711L15.31 13.1065L13.9953 10.7251H19.9107L15.3253 24H18.4627L24 8H9.69533L12.3253 12.8217Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {row.through}
                  </span>
                  {/*  </Tooltip> */}
                </td>
                <td>{row.servicesType}</td>
                <td>{row.amount}</td>
                <td>
                  <span
                    className={
                      row.status === "Completed"
                        ? styles.statusCompleted
                        : styles.statusPending
                    }
                  >
                    {row.status}
                  </span>
                </td>
                <td>{renderActions()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        {Array.from(
          { length: Math.ceil(filteredRows.length / rowsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              className={`${styles.paginationButton} ${
                currentPage === i + 1 ? styles.active : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PaymentsHistory;
