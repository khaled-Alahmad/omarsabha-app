"use client"; 
import React, { useEffect, useRef } from "react";
import styles from "../ServiceRequestList.module.css";
import { Loader } from "@googlemaps/js-api-loader";

export default function MapComponents({ locations }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCkMlal5E0x_tV7q0AtwP8hLA_XJQBwSfo", // Replace with your API key
      version: "weekly",
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      // Initialize the map
      const map = new google.maps.Map(mapRef.current, {
        center: {
          lat: locations?.[0]?.latitude || 37.7749,
          lng: locations?.[0]?.longitude || -122.4194,
        }, // Default to San Francisco if no locations
        zoom: 10,
      });

      // Add markers
      if (locations && locations.length > 0) {
        locations.forEach((location) => {
          if (location.latitude && location.longitude) {
            const marker = new google.maps.Marker({
              position: {
                lat: location.latitude,
                lng: location.longitude,
              },
              map,
              title: location.title || "Untitled",
            });

            // Add an info window
            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div>
                  <strong>${location.title || "No Title"}</strong><br />
                  ${location.street_address || "N/A"}<br />
                  ${location.city || "N/A"}, ${location.state || "N/A"} ${
                location.zip_code || "N/A"
              }
                </div>
              `,
            });

            marker.addListener("click", () => {
              infoWindow.open(map, marker);
            });
          }
        });
      }
    });
  }, [locations]);

  return <div ref={mapRef} className={styles.map}></div>;
}
