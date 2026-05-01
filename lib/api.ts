import axios from "axios";

// 🔥 BASE CONFIG
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://travel-backend-oo52.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // change to true only if using cookies
});

// 🔐 REQUEST INTERCEPTOR (Attach Token)
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

// 🎯 RESPONSE INTERCEPTOR (SMART HANDLING)
API.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message;

    console.error("❌ API ERROR:", {
      status,
      message,
      url: error.config?.url,
    });

    // 🔐 AUTO LOGOUT ONLY IF TOKEN INVALID
    if (status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");

        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

export default API;