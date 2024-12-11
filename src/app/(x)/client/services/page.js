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
  const activeRequests = await fetchData(`clients/orders`, filters);
  const cancelledRequests = await fetchData(
    `clients/orders`,
    filters
  );

  return (
    <div className={styles.container}>
      <SearchFilter />
      {/* Tabs */}
      <Tabs>
        <Tab title="Awaiting start" tabKey="active">
          {/* Active Requests List */}
          <RequestList requests={activeRequests.data} />
          <Pagination meta={activeRequests.meta} />
        </Tab>

        <Tab title="Ongoing services" tabKey="ongoing">
          {/* Cancelled Requests List */}
          <RequestListTow requests={cancelledRequests.data} />
          <Pagination meta={cancelledRequests.meta} />
        </Tab>
        <Tab title="Completed" tabKey="completed">
          {/* Cancelled Requests List */}
          <RequestListThree requests={cancelledRequests.data} />
          <Pagination meta={cancelledRequests.meta} />
        </Tab>
        <Tab title="Cancelled services" tabKey="cancelled">
          {/* Cancelled Requests List */}
          <RequestListFour requests={cancelledRequests.data} />
          <Pagination meta={cancelledRequests.meta} />
        </Tab>
      </Tabs>
    </div>
  );
}
