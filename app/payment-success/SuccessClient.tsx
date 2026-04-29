"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SuccessClient() {
  const params = useSearchParams();
  const reference = params.get("reference");

  useEffect(() => {
  if (reference) {
    console.log("REFERENCE:", reference);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookings/verify/${reference}`)
      .then(res => res.json())
      .then(data => console.log("VERIFY:", data))
      .catch(err => console.error("VERIFY ERROR:", err));
  }
}, [reference]);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-400">
          Payment Successful ✅
        </h1>
        <p className="mt-4 text-gray-300">
          Verifying your booking...
        </p>
      </div>
    </div>
  );
}