import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const userRole = request.cookies.get("userRole")?.value;

  console.log("Middleware Triggered for URL:", request.url);
  console.log("Auth Token:", authToken);

  const pathname = new URL(request.url).pathname;

  const authPattern = new URLPattern({ pathname: "/auth/:path*" });
  const vendorPattern = new URLPattern({ pathname: "/vendor/:path*" });
  const requestServicePattern = new URLPattern({
    pathname: "/request-service",
  });
  const clientPattern = new URLPattern({ pathname: "/client/:path*" });

  const isVendorRoute =
    vendorPattern.test(request.url) || requestServicePattern.test(request.url);

  if (authToken && authPattern.test(request.url)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const isProtectedRoute =
    isVendorRoute ||
    clientPattern.test(request.url) ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile");

  if (!authToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/sign-in/vendor", request.url));
  }

  if (isVendorRoute && userRole !== "vendor") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (clientPattern.test(request.url) && userRole !== "client") {
    return NextResponse.redirect(new URL("/", request.url));
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
