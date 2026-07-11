import API from "@/lib/api";

export async function getHero() {
  const { data } = await API.get("/hero");
  return data.data;
}

export async function updateHero(formData: FormData) {
  const { data } = await API.put(
    "/admin/hero",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}