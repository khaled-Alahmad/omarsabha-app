import { fetchData } from "@/context/apiHelper";
import RequestList from "./@components/RequestList";
import SearchFilter from "./@components/SearchFilter";
import { Tabs, Tab } from "./@components/Tabs";
import styles from "./Requests.module.css";
import Pagination from "../../vendor/proposals/@Pagination/Pagination";
import RequestListTow from "./@components/RequestListTow";
import RequestListThree from "./@components/RequestListThree";
import RequestListFour from "./@components/RequestListFour";

export default async function RequestsPage({ searchParams }) {
  const filters = {
    search: searchParams.search || "",
    filter: searchParams.filter || "",
    page: searchParams.page || 1, // Add page to filters
    limit: searchParams.limit || 10, // Default per_page value
  };

  // Fetch data based on query params
  const pendingRequests = await fetchData(`clients/orders?status=pending`, filters);
  const executeRequests = await fetchData(
    `clients/orders?status=execute`,
    filters
  );
  const completedRequests = await fetchData(
    `clients/orders?status=completed`,
    filters
  );
  const canceledRequests = await fetchData(
    `clients/orders?status=canceled`,
    filters
  );

  return (
    <div className={styles.container}>
      <SearchFilter />
      {/* Tabs */}
      <Tabs>
        <Tab title="Awaiting start" tabKey="active">
          {/* Active Requests List */}
          <RequestList requests={pendingRequests.data} />
          <Pagination meta={pendingRequests.meta} />
        </Tab>

        <Tab title="Ongoing services" tabKey="ongoing">
          {/* Cancelled Requests List */}
          <RequestListTow requests={executeRequests.data} />
          <Pagination meta={executeRequests.meta} />
        </Tab>
        <Tab title="Completed" tabKey="completed">
          {/* Cancelled Requests List */}
          <RequestListThree requests={completedRequests.data} />
          <Pagination meta={completedRequests.meta} />
        </Tab>
        <Tab title="Cancelled services" tabKey="cancelled">
          {/* Cancelled Requests List */}
          <RequestListFour requests={canceledRequests.data} />
          <Pagination meta={canceledRequests.meta} />
        </Tab>
      </Tabs>
    </div>
  );
}
