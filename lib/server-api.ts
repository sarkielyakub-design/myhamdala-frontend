import axios from "axios";
import { cookies } from "next/headers";

const serverAPI = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://travel-backend-production-f6ae.up.railway.app/api/v1",
});

serverAPI.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default serverAPI;