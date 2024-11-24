import React from "react";
import styles from "./ServiceRequestList.module.css";
import RequestList from "./@RequestList/RequestList";
import Filters from "./@Filters/Filters";
import { fetchData } from "@/context/apiHelper";
import MapComponents from "./@map/MapComponents";

export default async function ServiceRequestList({ searchParams }) {
  const filters = {
    search: searchParams.search || "",
    budget: searchParams.budget || "",
    location: searchParams.location || "",
    category: searchParams.category || "",
  };

  let data = [];
  // try {
  console.log(filters);

  data = await fetchData("vendors/service-requests", filters);
  console.log(data.data);
  // } catch (error) {
  //   console.error(error);
  // }
  const locations = data.data?.map((request) => ({
    latitude: request.location?.latitude, // Use actual latitude if available
    longitude: request.location?.longitude, // Use actual longitude if available
    title: request.title,
    street_address: request.location?.street_address,
    city: request.location?.city,
    state: request.location?.state,
    zip_code: request.location?.zip_code,
  }));

  return (
    <div className={styles.container}>
      <Filters filters={filters} />
      <div className={styles.content}>
        <RequestList data={data.data} />
        <MapComponents locations={locations} />
      </div>
    </div>
  );
}
