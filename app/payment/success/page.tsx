import { Suspense } from "react";
import PaymentSuccessContent from "./paymentsuccesscontent";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}