"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/lib/api"; // ✅ IMPORTANT

export default function SuccessClient() {
  const params = useSearchParams();

  // ✅ Paystack uses trxref (fallback to reference just in case)
  const reference =
    params.get("trxref") || params.get("reference");

  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");

  useEffect(() => {
    if (!reference) return;

    console.log("REFERENCE:", reference);

    const verifyPayment = async () => {
      try {
        const res = await API.get(`/verify/${reference}`);

        console.log("✅ VERIFY:", res.data);

        setStatus("success");
      } catch (err: any) {
        console.error("❌ VERIFY ERROR:", err?.response?.data || err);

        setStatus("failed");
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="text-center">

        {status === "loading" && (
          <>
            <h1 className="text-3xl font-bold text-green-400">
              Payment Successful ✅
            </h1>
            <p className="mt-4 text-gray-300">
              Verifying your booking...
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-3xl font-bold text-green-400">
              Booking Confirmed 🎉
            </h1>
            <p className="mt-4 text-gray-300">
              Your payment has been verified successfully.
            </p>
          </>
        )}

        {status === "failed" && (
          <>
            <h1 className="text-3xl font-bold text-red-400">
              Verification Failed ❌
            </h1>
            <p className="mt-4 text-gray-300">
              Something went wrong. Please contact support.
            </p>
          </>
        )}

      </div>
    </div>
  );
}