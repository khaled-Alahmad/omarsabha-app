import { fetchData } from "@/context/apiHelper";
import RequestList from "./@components/RequestList";
import SearchFilter from "./@components/SearchFilter";
import { Tabs, Tab } from "./@components/Tabs";
import styles from "./Requests.module.css";
import Pagination from "../../vendor/proposals/@Pagination/Pagination";
import RequestListTow from "./@components/RequestListTow";

export default async function RequestsPage({ searchParams }) {
  const filters = {
    search: searchParams.search || "",
    filter: searchParams.filter || "",
    page: searchParams.page || 1, // Add page to filters
    limit: searchParams.limit || 10, // Default per_page value
  };

  // Fetch data based on query params
  const activeRequests = await fetchData(`clients/service-requests?status=pending`, filters);
  const cancelledRequests = await fetchData(
    `clients/service-requests?status=canceled`,
    filters
  );

  return (  
    <div className={styles.container}>

      <SearchFilter />
      {/* Tabs */}
      <Tabs>
        <Tab title="Active Requests" tabKey="active">
          {/* Active Requests List */}
          <RequestList requests={activeRequests.data} />
          <Pagination meta={activeRequests.meta} />
        </Tab>

        <Tab title="Cancelled Requests" tabKey="cancelled">
          {/* Cancelled Requests List */}
          <RequestListTow requests={cancelledRequests.data} />
          <Pagination meta={cancelledRequests.meta} />
        </Tab>
      </Tabs>
    </div>
  );
}
