import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const userRole = request.cookies.get("userRole")?.value;

  console.log("Middleware Triggered for URL:", request.url);
  console.log("Auth Token:", authToken);

  const pathname = request.nextUrl.pathname;

  const authPattern = new URLPattern({ pathname: "/auth/:path*" });
  const vendorPattern = new URLPattern({ pathname: "/vendor/:path*" });
  const clientPattern = new URLPattern({ pathname: "/client/:path*" });

  if (authToken && authPattern.test(request.url)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const isProtectedRoute =
    vendorPattern.test(request.url) ||
    clientPattern.test(request.url) ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile");

  if (!authToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (vendorPattern.test(request.url) && userRole !== "vendor") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (clientPattern.test(request.url) && userRole !== "client") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
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
    "/auth/:path*", // Include auth routes
  ],
};
