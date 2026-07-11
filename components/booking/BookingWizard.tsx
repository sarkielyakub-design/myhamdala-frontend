"use client";

import BookingStepper from "./BookingStepper";
import PackageSummary from "./PackageSummary";
import PassengerForm from "./PassengerForm";
import PassportForm from "./PassportForm";
import EmergencyContact from "./EmergencyContact";
import ReviewBooking from "./ReviewBooking";
import BookingSidebar from "./BookingSidebar";

import { useBooking } from "./BookingContext";

interface Props {
  package: any;
}

export default function BookingWizard({
  package: pkg,
}: Props) {

  const {
    step,
    booking,
  } = useBooking();

  return (
    <>
      <BookingStepper />

      <div
        className="
          mt-12
          grid
          gap-10
          lg:grid-cols-3
        "
      >

        {/* Left Side */}

        <div className="space-y-8 lg:col-span-2">

          <PackageSummary package={pkg} />

          {step === 1 && (
            <PassengerForm />
          )}

          {step === 2 && (
            <PassportForm />
          )}

          {step === 3 && (
            <EmergencyContact />
          )}

          {step === 4 && (
            <ReviewBooking
              package={pkg}
              booking={booking}
            />
          )}

        </div>

        {/* Right Side */}

        <BookingSidebar package={pkg} />

      </div>
    </>
  );
}