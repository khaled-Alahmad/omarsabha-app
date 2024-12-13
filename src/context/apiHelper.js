import { getCookie as getClientCookie } from "cookies-next";

const API_BASE_URL = process.env.NEXT_PUBLIC_URL;

async function apiRequest(endpoint, method = "GET", data = null, filters = {}, headers = {}) {
  try {
    let token;

    if (typeof window === "undefined") {
      // Running on the server
      const { cookies } = await import("next/headers");
      token = cookies().get("authToken")?.value;
    } else {
      // Running on the client
      token = getClientCookie("authToken");
    }

    console.log("Token:", token);

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    if (method === "GET" && filters && Object.keys(filters).length > 0) {
      Object.entries(filters).forEach(([key, value]) => url.searchParams.append(key, value));
    }

    const options = {
      method,
      headers,
    };

    // Handle FormData or JSON data
    if (data) {
      if (data instanceof FormData) {
        // Do not set Content-Type for FormData; fetch handles it automatically
        options.body = data;
      } else {
        headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
      }
    }

    console.log(`Requesting ${method} ${url} with options:`, options);

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("API Error Response:", errorResponse);
      throw new Error(errorResponse.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error;
  }
}

// Optimized functions
export async function fetchData(endpoint, filters = {}) {
  return await apiRequest(endpoint, "GET", null, filters);
}

export async function addData(endpoint, data, headers = {}) {
  try {
    return await apiRequest(endpoint, "POST", data, {}, headers);
  } catch (error) {
    console.error("Submission Error:", error);
    throw error;
  }
}

export async function updateData(endpoint, data) {
  return await apiRequest(endpoint, "POST", data);
}

export async function deleteData(endpoint) {
  return await apiRequest(endpoint, "DELETE");
}
