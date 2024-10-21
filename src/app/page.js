// app/page.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import WebsiteHome from "./website/page";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Example logic: based on user type, redirect to the respective homepage
    const userFlow = getUserFlow(); // You can replace this with actual logic, e.g., checking cookies, session, etc.

    if (userFlow === "vendor") {
      router.push("/vendor");
    } else if (userFlow === "homeowner") {
      router.push("/homeowner");
    } else {
      router.push("/"); // Default fallback
    }
  }, [router]);

  return (
    <NextUIProvider>
      {/* <h1> */}
      <NextThemesProvider attribute="class" defaultTheme="light">
        <WebsiteHome />
        {/* </h1> */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

// Mock function to determine user flow (replace this with actual logic)
function getUserFlow() {
  // You can check cookies, user roles, or session data here.
  // Example:
  return "website"; // return 'vendor' or 'homeowner' based on the actual flow
}
