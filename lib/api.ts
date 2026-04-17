import axios from "axios";

const API = axios.create({
  baseURL: "https://travel-backend-oo52.onrender.com/api/v1",
});

// 🔐 Attach token automatically
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

// 🔥 RESPONSE HANDLER (FIXED)
API.interceptors.response.use(
  (response) => {
    return response; // ✅ keep raw response
  },

  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.detail;

    console.error("API ERROR:", status, message);

    // ✅ ONLY logout on 401 (invalid token)
    if (status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");

        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }
      }
    }

    // 🚫 DO NOT auto-logout on 403
    // 403 can mean:
    // - not verified
    // - not admin
    // - forbidden route

    return Promise.reject(error);
  }
);

export default API;