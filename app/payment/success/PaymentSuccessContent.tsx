"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function PaymentSuccessContent() {
  const params = useSearchParams();
  const reference = params.get("reference");

  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    if (!reference) return;

    const verifyPayment = async () => {
      try {
        await API.get(`/bookings/verify/${reference}`);
        setStatus("success");
      } catch {
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      {status === "verifying" && <p>🔄 Verifying payment...</p>}
      {status === "success" && <p>✅ Payment Successful</p>}
      {status === "failed" && <p>❌ Payment Failed</p>}
    </div>
  );
}