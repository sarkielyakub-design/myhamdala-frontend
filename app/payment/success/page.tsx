"use client";

import { Suspense } from "react";
import PaymentSuccessContent from "./PaymentSuccessContent";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-20 text-white">Loading payment...</p>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}