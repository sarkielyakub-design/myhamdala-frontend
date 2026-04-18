"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function Page() {
  const params = useSearchParams();
  const reference = params.get("reference");

  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");

  useEffect(() => {
    if (!reference) {
      setStatus("failed");
      return;
    }

    const verifyPayment = async () => {
      try {
        await API.get(`/bookings/verify/${reference}`);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white px-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 text-center">

        {status === "loading" && (
          <>
            <h1 className="text-2xl mb-4">🔄 Verifying Payment...</h1>
            <p className="text-gray-400">Please wait</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-3xl font-bold text-green-400 mb-4">
              ✅ Payment Successful
            </h1>

            <p className="text-gray-300 mb-6">
              Your booking has been confirmed.
            </p>

            <a
              href="/"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Go Home
            </a>
          </>
        )}

        {status === "failed" && (
          <>
            <h1 className="text-3xl font-bold text-red-400 mb-4">
              ❌ Payment Failed
            </h1>

            <p className="text-gray-300 mb-6">
              Invalid or missing payment reference.
            </p>

            <a
              href="/"
              className="bg-red-500 px-6 py-3 rounded-lg font-semibold"
            >
              Try Again
            </a>
          </>
        )}

      </div>
    </div>
  );
}