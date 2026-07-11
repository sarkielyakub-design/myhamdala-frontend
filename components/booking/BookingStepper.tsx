"use client";

import {
  CheckCircle2,
  User,
  IdCard,
  ShieldCheck,
  FileCheck,
  CreditCard,
  Circle,
} from "lucide-react";

import { useBooking } from "./BookingContext";

const steps = [
  {
    title: "Passenger",
    icon: User,
  },
  {
    title: "Passport",
    icon: IdCard,
  },
  {
    title: "Emergency",
    icon: ShieldCheck,
  },
  {
    title: "Review",
    icon: FileCheck,
  },
  {
    title: "Payment",
    icon: CreditCard,
  },
  {
    title: "Complete",
    icon: Circle,
  },
];

export default function BookingStepper() {
  const { step } = useBooking();

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-6">

        {steps.map((item, index) => {

          const Icon = item.icon;

          const current = index + 1;

          const completed = current < step;

          const active = current === step;

          return (

            <div
              key={item.title}
              className="flex items-center"
            >

              <div className="flex flex-col items-center">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-4 transition-all duration-300
                  ${
                    completed
                      ? "border-green-600 bg-green-600 text-white"
                      : active
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-300 bg-white text-slate-500"
                  }`}
                >

                  {completed ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Icon size={22} />
                  )}

                </div>

                <span
                  className={`mt-3 text-sm font-semibold
                  ${
                    completed
                      ? "text-green-600"
                      : active
                      ? "text-blue-700"
                      : "text-slate-500"
                  }`}
                >
                  {item.title}
                </span>

              </div>

              {index !== steps.length - 1 && (

                <div
                  className={`mx-4 hidden h-1 w-16 rounded-full lg:block
                  ${
                    completed
                      ? "bg-green-600"
                      : "bg-slate-200"
                  }`}
                />

              )}

            </div>

          );

        })}

      </div>
    </section>
  );
}