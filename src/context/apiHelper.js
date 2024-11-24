import { getCookie as getClientCookie } from "cookies-next";

const API_BASE_URL = process.env.NEXT_PUBLIC_URL;

async function apiRequest(endpoint, method = "GET", data = null, filters = {}) {
  try {
    let token;

    if (typeof window === "undefined") {
      // نحن على الخادم
      const { cookies } = await import("next/headers");
      token = cookies().get("authToken")?.value;
    } else {
      // نحن على العميل
      token = getClientCookie("authToken");
    }
    const headers = {
      "Content-Type": "application/json",
    };
    console.log("Token:", token);

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    if (method === "GET" && filters && Object.keys(filters).length > 0) {
      Object.entries(filters).forEach(([key, value]) =>
        url.searchParams.append(key, value)
      );
    }

    const options = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    console.log(response);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error;
  }
}

export async function fetchData(endpoint, filters = {}) {
  return await apiRequest(endpoint, "GET", null, filters);
}

export async function addData(endpoint, data) {
  return await apiRequest(endpoint, "POST", data);
}

export async function updateData(endpoint, data) {
  return await apiRequest(endpoint, "PUT", data);
}

export async function deleteData(endpoint) {
  return await apiRequest(endpoint, "DELETE");
}
