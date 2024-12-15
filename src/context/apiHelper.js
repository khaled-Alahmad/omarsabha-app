import { getCookie as getClientCookie } from "cookies-next";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_URL;

async function apiRequest(endpoint, method = "GET", data = null, filters = {}, customHeaders = {}) {
  try {
    let token;

    if (typeof window === "undefined") {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      token = cookieStore.get("authToken")?.value || null;
    } else {
      token = getClientCookie("authToken");
    }

    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      ...customHeaders,
    };

    const url = new URL(`${API_BASE_URL}/${endpoint}`);

    if (method === "GET" && filters && Object.keys(filters).length > 0) {
      Object.entries(filters).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const options = {
      method,
      headers,
    };

    if (data) {
      if (data instanceof FormData) {
        options.body = data; 
      } else {
        headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
      }
    }

    if (process.env.NODE_ENV !== "production") {
      console.log(`Request: ${method} ${url}`);
      console.log("Options:", options);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({
        message: `Error: ${response.statusText}`,
      }));
      console.error("API Error Response:", errorResponse);
      throw new Error(errorResponse.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error;
  }
}

async function axiosRequest(endpoint, method = "GET", data = null, headers = {}) {
  try {
    const token = getClientCookie("authToken");
    const config = {
      method,
      url: `${API_BASE_URL}/${endpoint}`,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      },
    };

    if (data) {
      if (data instanceof FormData) {
        config.data = data;
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.data = data;
        config.headers["Content-Type"] = "application/json";
      }
    }

    if (process.env.NODE_ENV !== "production") {
      console.log(`Axios Request: ${method} ${config.url}`);
      console.log("Config:", config);
    }

    const response = await axios(config);
    return response.data; 
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "An unexpected error occurred.";
    console.error("Axios Request Error:", errorMessage);
    throw new Error(errorMessage);
  }
}

export async function fetchData(endpoint, filters = {}) {
  return await apiRequest(endpoint, "GET", null, filters);
}

export async function addData(endpoint, data, headers = {}, useAxios = false) {
  if (useAxios && typeof window !== "undefined") {
    return await axiosRequest(endpoint, "POST", data, headers);
  }
  return await apiRequest(endpoint, "POST", data, {}, headers);
}

export async function updateData(endpoint, data, useAxios = false) {
  if (useAxios && typeof window !== "undefined") {
    return await axiosRequest(endpoint, "PUT", data);
  }
  return await apiRequest(endpoint, "PUT", data);
}

export async function deleteData(endpoint, useAxios = false) {
  if (useAxios && typeof window !== "undefined") {
    return await axiosRequest(endpoint, "DELETE");
  }
  return await apiRequest(endpoint, "DELETE");
}
