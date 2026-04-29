"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const params = useSearchParams();
  const router = useRouter();

  const reference = params.get("reference");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!reference) return;

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookings/verify/${reference}`
        );

        if (!res.ok) throw new Error();

        setStatus("success");

        // ⏳ redirect after 4 seconds
        setTimeout(() => {
          router.push("/booking"); // change if needed
        }, 4000);

      } catch (err) {
        setStatus("error");
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl text-center">

        {/* 🔄 LOADING */}
        {status === "loading" && (
          <>
            <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h2 className="text-xl font-semibold">Verifying Payment...</h2>
            <p className="text-gray-400 mt-2">
              Please wait while we confirm your booking
            </p>
          </>
        )}

        {/* ✅ SUCCESS */}
        {status === "success" && (
          <>
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-400 text-3xl">✔</span>
            </div>

            <h1 className="text-2xl font-bold text-green-400">
              Payment Successful
            </h1>

            <p className="text-gray-400 mt-3">
              Your booking has been confirmed 🎉
            </p>

            <div className="mt-6 bg-black/40 rounded-lg p-4 text-left">
              <p className="text-sm text-gray-400">Reference</p>
              <p className="text-green-400 font-mono break-all">
                {reference}
              </p>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Redirecting to your bookings...
            </p>
          </>
        )}

        {/* ❌ ERROR */}
        {status === "error" && (
          <>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-400 text-3xl">✖</span>
            </div>

            <h1 className="text-2xl font-bold text-red-400">
              Verification Failed
            </h1>

            <p className="text-gray-400 mt-3">
              We couldn't verify your payment.
            </p>

            <button
              onClick={() => router.push("/")}
              className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
              Go Home
            </button>
          </>
        )}
      </div>
    </div>
  );
}