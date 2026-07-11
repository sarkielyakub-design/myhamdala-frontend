"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import CreatePackage from "@/components/admin/packages/CreatePackage";
import API from "@/lib/api";

export default function EditPackagePage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [packageData, setPackageData] = useState<any>(null);

  useEffect(() => {
    async function loadPackage() {
      try {
        const response = await API.get(
          `/admin/packages/${params.id}`
        );

        setPackageData(response.data.data);
      } catch (error) {
        console.error(error);
        alert("Failed to load package.");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadPackage();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-[#111827] p-10 text-center">
        <h2 className="text-3xl font-bold text-red-400">
          Package Not Found
        </h2>

        <p className="mt-3 text-slate-400">
          The requested package could not be found.
        </p>

        <button
          onClick={() => router.push("/admin/packages")}
          className="mt-6 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black"
        >
          Back to Packages
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h1 className="text-4xl font-black text-white">
          Edit Package
        </h1>

        <p className="mt-3 text-slate-400">
          Update package information.
        </p>

      </div>

      <CreatePackage
        packageData={packageData}
        onSuccess={() =>
          router.push("/admin/packages")
        }
      />

    </div>
  );
}