import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const userRole = request.cookies.get("userRole")?.value;
  const profileSetupVendor = request.cookies.get("profileSetupVendor")?.value;
  const approveVendor = request.cookies.get("approveVendor")?.value;

  const pathname = new URL(request.url).pathname;

  console.log("Middleware Triggered for URL:", request.url);
  console.log("Auth Token:", authToken);
  console.log("Profile Setup Vendor (Value):", profileSetupVendor);
  console.log("Approve Vendor:", approveVendor);

  // Define route patterns
  const patterns = {
    vendor: new URLPattern({ pathname: "/vendor/:path*" }),
    client: new URLPattern({ pathname: "/client/:path*" }),
    requestService: new URLPattern({ pathname: "/request-service" }),
    auth: new URLPattern({ pathname: "/auth/:path*" }),
    profileSetupVendor: "/auth/profile-setup/vendor",
    dashboard: "/dashboard",
    profile: "/profile",
  };

  // Helper functions
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

  // Rules
  const rules = [
    {
      // Redirect to verification if vendor is not approved
      condition: () =>
        authToken &&
        approveVendor === "false" &&
        pathname !== patterns.profileSetupVendor,
      redirectTo: "/auth/verification",
    },
    {
      // Redirect to profile setup if profile is incomplete
      condition: () =>
        authToken &&
        profileSetupVendor === "false" &&
        pathname !== patterns.profileSetupVendor,
      redirectTo: "/auth/profile-setup/vendor",
    },
    {
      // Allow access to /auth/profile-setup/vendor even if authenticated
      condition: () =>
        authToken &&
        isRoute(patterns.auth) &&
        pathname === patterns.profileSetupVendor,
      action: () => NextResponse.next(),
    },
    {
      // Allow access to /auth routes if not authenticated
      condition: () => isRoute(patterns.auth) && !authToken,
      action: () => NextResponse.next(),
    },
    {
      // Redirect authenticated users trying to access /auth routes to the homepage
      condition: () =>
        authToken && isRoute(patterns.auth) && pathname !== patterns.profileSetupVendor,
      redirectTo: "/",
    },
    {
      // Redirect unauthenticated users from protected routes to /auth/sign-in/vendor
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
      console.log(`Redirecting to: ${rule.redirectTo || "NextResponse.next()"}`);
      return rule.redirectTo
        ? NextResponse.redirect(new URL(rule.redirectTo, request.url))
        : rule.action();
    }
  }

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
