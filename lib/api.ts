import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000/api/v1";

/* =====================================
   AXIOS INSTANCE
===================================== */

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/* =====================================
   REQUEST INTERCEPTOR
===================================== */

API.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* =====================================
   RESPONSE INTERCEPTOR
===================================== */

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API ERROR");
    console.error(error.response?.data ?? error.message);

    return Promise.reject(error);
  }
);

/* =====================================
   GENERIC HELPERS
===================================== */

export async function apiGet<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await API.get(url, config);
  return response.data;
}

export async function apiPost<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await API.post(
    url,
    body,
    config
  );

  return response.data;
}

export async function apiPut<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await API.put(
    url,
    body,
    config
  );

  return response.data;
}

export async function apiDelete<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await API.delete(
    url,
    config
  );

  return response.data;
}

/* =====================================
   FILE UPLOAD
===================================== */

export async function uploadFile<T>(
  url: string,
  formData: FormData
): Promise<T> {
  const response: AxiosResponse<T> = await API.put(
    url,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

/* =====================================
   HOME
===================================== */

export async function getHomeData() {
  console.log("==================================");
  console.log("BASE URL:", BASE_URL);

  const response = await API.get("/home/");

  console.log("STATUS:", response.status);

  console.log("RAW RESPONSE:");
  console.log(JSON.stringify(response.data, null, 2));

  console.log("RETURNING:");
  console.log(JSON.stringify(response.data.data, null, 2));

  console.log("==================================");

  return response.data.data;
}

/* =====================================
   HERO
===================================== */

export async function getHero() {
  const response = await API.get("/hero/");
  return response.data.data;
}

/* =====================================
   PACKAGES
===================================== */
export async function getPackages() {
  try {
    const response = await API.get("/packages/");

    console.log("PACKAGES:");
    console.log(response.data);

    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
/* =====================================
   NEWS
===================================== */


/* =====================================
   GALLERY
===================================== */
export async function createGallery(
  formData: FormData
) {
  const response = await API.post(
    "/gallery/",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
}
export async function updateGallery(
  id: number,
  formData: FormData
) {
  const response = await API.put(
    `/gallery/${id}`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
}
export async function deleteGallery(
  id: number
) {
  const response = await API.delete(
    `/gallery/${id}`
  );

  return response.data;
}
export async function getGalleryById(
  id: number
) {
  const response = await API.get(
    `/gallery/${id}`
  );

  return response.data.data;
}


/* =====================================
   SETTINGS
===================================== */

export async function getWebsiteSettings() {
  const response = await API.get("/settings/");
  return response.data.data;
}
export async function getPackage(id: string) {
  try {

    const response = await API.get(`/packages/${id}`);

    console.log("PACKAGE RESPONSE");
    console.log(response.data);

    return response.data.data;

  } catch (error) {

    console.error(error);

    return null;

  }
}
export async function getNews() {
  try {
    const response = await API.get("/admin/news/");

    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getNewsArticle(
  slug: string
) {
  try {

    const response = await API.get(
      `/news/${slug}`
    );

    return response.data.data;

  } catch (error) {

    console.error(error);

    return null;

  }
}
export async function getGallery() {
  try {

    const response = await API.get("/gallery/");

    return response.data.data;

  } catch (error) {

    console.error(error);

    return [];

  }
}
/* =====================================
   BOOKINGS
===================================== */

export async function getBookings() {
  try {
    const response = await API.get("/bookings/");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/* =====================================
   NEWSLETTER
===================================== */

export async function getNewsletterSubscribers() {
  try {
    const response = await API.get("/newsletter/");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/* =====================================
   CONTACT
===================================== */

export async function getContacts() {
  try {
    const response = await API.get("/contact/");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getUsers() {

  try {

    const response = await API.get(
      "/admin/users"
    );

    return response.data.data;

  } catch (error) {

    console.error(error);

    return [];

  }

}
export async function getBookingById(id: string) {
  try {
    const response = await API.get(`/bookings/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getNewsById(id: string) {
  try {
    const response = await API.get(`/admin/news/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getUser(
  id: string | number
) {
  try {
    const response = await API.get(`/admin/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export default API;