// app/page.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// The main Home component
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Example logic to check user type (replace with actual logic)
    const userFlow = getUserFlow();

    if (userFlow === "vendor") {
      router.push("/vendor");
    } else if (userFlow === "homeowner") {
      router.push("/homeowner");
    } else if (userFlow === "client") {
      router.push("/website");
    } else {
      router.push("/website"); // Default or fallback
    }
  }, [router]);

  // No content is needed on this page as it will redirect
  return null;
}

// Mock function to determine user flow (replace with actual logic)
function getUserFlow() {
  // Replace this with actual logic (e.g., checking cookies or localStorage)
  // Returning 'client' for demonstration purposes
  return "client"; // Can be "vendor", "homeowner", or "client"
}
