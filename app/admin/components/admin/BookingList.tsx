"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function BookingList({ bookings }: any) {
  const [selected, setSelected] = useState<any>(null);

  const markPaid = async (id: number) => {
  await API.put(`/admin/bookings/${id}/pay`);
    window.location.reload(); // simple refresh (we can optimize later)
  };

  return (
    <div className="space-y-4">

      {/* 🔥 LIST */}
      {bookings.map((b: any) => (
        <div
          key={b.id}
          className="bg-[#121826] p-5 rounded-xl border border-white/10 flex justify-between items-center hover:shadow-lg transition"
        >

          {/* LEFT */}
          <div>
            <p className="font-bold text-lg">
              {b.surname} {b.first_name}
            </p>

            <p className="text-sm text-gray-400">
              🪪 {b.passport_number}
            </p>

            <p className="text-xs text-gray-500">
              🌍 {b.nationality} • 🎂 {b.date_of_birth}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* STATUS */}
            <span
              className={`px-3 py-1 text-xs rounded-full ${
                b.status === "paid"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {b.status}
            </span>

            {/* VIEW */}
            <button
              onClick={() => setSelected(b)}
              className="bg-blue-500 px-3 py-1 rounded text-sm hover:scale-105 transition"
            >
              View
            </button>

            {/* MARK PAID */}
            {b.status !== "paid" && (
              <button
                onClick={() => markPaid(b.id)}
                className="bg-green-600 px-3 py-1 rounded text-sm hover:scale-105 transition"
              >
                Mark Paid
              </button>
            )}

          </div>

        </div>
      ))}

     {/* 🔥 MODAL */}
{selected && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-[#121826] w-[550px] p-6 rounded-xl border border-white/10">

      <h2 className="text-xl font-bold mb-4 text-yellow-400">
        Booking Details
      </h2>

      {/* 👤 USER INFO */}
      <div className="space-y-2 text-sm">
        <p>
          <b>Name:</b> {selected.surname} {selected.first_name} {selected.given_names}
        </p>
        <p><b>Nationality:</b> {selected.nationality}</p>
        <p><b>Date of Birth:</b> {selected.date_of_birth}</p>
        <p><b>Place of Birth:</b> {selected.place_of_birth}</p>
        <div className="mt-3 border-t pt-3">
  <p className="text-sm text-gray-300">📧 {selected.email}</p>
  <p className="text-sm text-gray-300">📱 {selected.phone}</p>
</div>
        <hr className="my-3 border-white/10" />

        <p><b>Passport:</b> {selected.passport_number}</p>
        <p><b>Issue Date:</b> {selected.passport_issue}</p>
        <p><b>Expiry Date:</b> {selected.passport_expiry}</p>
      </div>

      {/* ✈️ PACKAGE INFO */}
      {selected.package && (
        <div className="mt-5 p-4 bg-black/30 rounded-lg border border-white/10">

          <h3 className="text-yellow-400 font-semibold mb-3">
            Package Details
          </h3>

          <div className="space-y-2 text-sm">

            <p>
              <b>Package:</b> {selected.package.title}
            </p>

            <p>
              <b>Price:</b> ₦{Number(selected.package.price).toLocaleString()}
            </p>

            <p>
              ✈️ {selected.package.flight_from} → {selected.package.flight_to}
            </p>

            <p>
              📅 {selected.package.departure_date} → {selected.package.return_date}
            </p>

            <p>
              🏨 {selected.package.hotel_name} ⭐{selected.package.hotel_rating}
            </p>

            <p className="text-xs text-gray-400">
              🪑 {selected.package.total_slots - selected.package.booked_slots} / {selected.package.total_slots} available
            </p>

          </div>

        </div>
      )}

      {/* 💳 PAYMENT */}
      <div className="mt-4 text-sm">
        <p>
          <b>Payment Ref:</b> {selected.payment_reference}
        </p>

        <p>
          <b>Status:</b>{" "}
          <span
            className={
              selected.status === "paid"
                ? "text-green-400"
                : "text-yellow-400"
            }
          >
            {selected.status}
          </span>
        </p>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between mt-6">

        {selected.status !== "paid" && (
          <button
            onClick={() => markPaid(selected.id)}
            className="bg-green-600 px-4 py-2 rounded"
          >
            Mark as Paid
          </button>
        )}

        <button
          onClick={() => setSelected(null)}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}