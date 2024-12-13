import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const authToken = cookies().get("authToken")?.value;
  const userRole = cookies().get("userRole")?.value;
  const profileSetupVendor = cookies().get("profileSetupVendor")?.value;
  const approveVendor = cookies().get("approveVendor")?.value;

  const pathname = new URL(request.url).pathname;

  console.log("Middleware Triggered for URL:", request.url);
  console.log("Auth Token:", authToken);
  console.log("User Role:", userRole);
  console.log("Profile Setup Vendor:", profileSetupVendor);
  console.log("Approve Vendor:", approveVendor);

  // Define route patterns
  const patterns = {
    vendor: new URLPattern({ pathname: "/vendor/:path*" }),
    client: new URLPattern({ pathname: "/client/:path*" }),
    requestService: new URLPattern({ pathname: "/request-service" }),
    auth: new URLPattern({ pathname: "/auth/:path*" }),
    profileSetupVendor: "/auth/profile-setup/vendor",
    profileSetupClient: "/auth/profile-setup/client",
    dashboard: "/dashboard",
    profile: "/profile",
  };

  // Helper function to check route matches
  const isRoute = (pattern) =>
    typeof pattern === "string"
      ? pathname.startsWith(pattern)
      : pattern.test(request.url);

  const isProtectedRoute =
    isRoute(patterns.vendor) ||
    isRoute(patterns.client) ||
    isRoute(patterns.requestService) ||
    isRoute(patterns.dashboard) ||
    isRoute(patterns.profile);

  const isVendorRoute =
    isRoute(patterns.vendor) || isRoute(patterns.requestService);

  // Define middleware rules
  const rules = [
    {
      // Redirect vendor to profile setup if profile is incomplete
      condition: () =>
        authToken &&
        userRole === "vendor" &&
        profileSetupVendor === "false" &&
        pathname !== patterns.profileSetupVendor,
      redirectTo: "/auth/profile-setup/vendor",
    },
    {
      // Redirect client to profile setup if profile is incomplete
      condition: () =>
        authToken &&
        userRole === "client" &&
        profileSetupVendor === "false" &&
        pathname !== patterns.profileSetupClient,
      redirectTo: "/auth/profile-setup/client",
    },
    {
      // Redirect unauthenticated users from protected routes
      condition: () => !authToken && isProtectedRoute,
      redirectTo: "/auth/sign-in/vendor",
    },
    {
      // Redirect users with incorrect roles
      condition: () => isVendorRoute && userRole !== "vendor",
      redirectTo: "/",
    },
    {
      condition: () => isRoute(patterns.client) && userRole !== "client",
      redirectTo: "/",
    },
  ];

  // Process rules
  for (const rule of rules) {
    if (rule.condition()) {
      console.log(
        `Redirecting to: ${rule.redirectTo || "NextResponse.next()"}`
      );
      return rule.redirectTo
        ? NextResponse.redirect(new URL(rule.redirectTo, request.url))
        : NextResponse.next();
    }
  }

  console.log("No matching rule. Proceeding to NextResponse.next().");
  return NextResponse.next();
}

// Define matcher
export const config = {
  matcher: [
    "/vendor/:path*",
    "/client/:path*",
    "/dashboard",
    "/profile",
    "/auth/:path*",
    "/request-service",
  ],
};
