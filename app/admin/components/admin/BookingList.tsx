"use client";

import { useMemo, useState } from "react";

import API from "@/lib/api";

import {
  Search,
  Eye,
  CheckCircle2,
  X,
  Phone,
  Mail,
  Globe,
  CreditCard,
  Plane,
  Hotel,
  CalendarDays,
  Users,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function BookingList({ bookings }: any) {

  const [selected, setSelected] = useState<any>(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  // 🔥 FILTERED BOOKINGS
  const filteredBookings = useMemo(() => {

    return bookings.filter((b: any) => {

      const fullName =
        `${b.first_name} ${b.surname}`.toLowerCase();

      const passport =
        b.passport_number?.toLowerCase() || "";

      const email =
        b.email?.toLowerCase() || "";

      const query = search.toLowerCase();

      const matchesSearch =
        fullName.includes(query) ||
        passport.includes(query) ||
        email.includes(query);

      const matchesFilter =
        filter === "all"
          ? true
          : b.status === filter;

      return matchesSearch && matchesFilter;
    });

  }, [bookings, search, filter]);

  // 🔥 MARK PAID
  const markPaid = async (id: number) => {

    try {

      await API.put(`/admin/bookings/${id}/pay`);

      alert("✅ Booking marked as paid");

      window.location.reload();

    } catch (err) {

      console.error(err);

      alert("Failed to update booking");

    }
  };

  return (
    <div className="space-y-8">

      {/* 🔥 TOP BAR */}
      <div className="flex flex-col lg:flex-row justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            Booking Management
          </h1>

          <p className="text-gray-400 mt-1">
            Manage all customer bookings & payments
          </p>

        </div>

        {/* SEARCH */}
        <div className="flex gap-3 flex-col sm:flex-row">

          <div className="relative">

            <Search
              className="absolute left-4 top-3.5 text-gray-500"
              size={18}
            />

            <input
              placeholder="Search bookings..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="bg-[#121826] border border-white/10 rounded-2xl pl-11 pr-4 py-3 w-full sm:w-80 focus:outline-none focus:border-yellow-500"
            />

          </div>

          {/* FILTER */}
          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="bg-[#121826] border border-white/10 rounded-2xl px-4 py-3"
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>

        </div>

      </div>

      {/* 🔥 STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-[#121826] border border-white/10 rounded-3xl p-6">

          <p className="text-gray-400 text-sm">
            Total Bookings
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {bookings.length}
          </h2>

        </div>

        <div className="bg-[#121826] border border-white/10 rounded-3xl p-6">

          <p className="text-gray-400 text-sm">
            Paid Bookings
          </p>

          <h2 className="text-4xl font-bold mt-2 text-green-400">
            {
              bookings.filter(
                (b: any) => b.status === "paid"
              ).length
            }
          </h2>

        </div>

        <div className="bg-[#121826] border border-white/10 rounded-3xl p-6">

          <p className="text-gray-400 text-sm">
            Pending Payments
          </p>

          <h2 className="text-4xl font-bold mt-2 text-yellow-400">
            {
              bookings.filter(
                (b: any) => b.status !== "paid"
              ).length
            }
          </h2>

        </div>

      </div>

      {/* 🔥 BOOKING CARDS */}
      <div className="grid xl:grid-cols-2 gap-6">

        {filteredBookings.map((b: any) => (

          <div
            key={b.id}
            className="bg-[#121826]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-yellow-500/30 transition-all duration-300"
          >

            {/* TOP */}
            <div className="flex justify-between items-start">

              <div className="flex gap-4">

                {/* AVATAR */}
                <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center font-bold text-2xl shadow-lg">
                  {b.first_name?.charAt(0)}
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {b.surname} {b.first_name}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    🪪 {b.passport_number}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">

                    <Globe size={14} />

                    {b.nationality}

                  </div>

                </div>

              </div>

              {/* STATUS */}
              <div
                className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                  b.status === "paid"
                    ? "bg-green-500/20 text-green-400 border border-green-500/20"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
                }`}
              >
                {b.status === "paid"
                  ? "PAID"
                  : "PENDING"}
              </div>

            </div>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="text-gray-500 text-xs">
                  Date of Birth
                </p>

                <p className="mt-1">
                  {b.date_of_birth}
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="text-gray-500 text-xs">
                  Payment Ref
                </p>

                <p className="mt-1 truncate">
                  {b.payment_reference || "N/A"}
                </p>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-6">

              {/* VIEW */}
              <button
                onClick={() => setSelected(b)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 transition py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                View Details
              </button>

              {/* PAID */}
              {b.status !== "paid" && (

                <button
                  onClick={() => markPaid(b.id)}
                  className="flex-1 bg-green-500 hover:bg-green-600 transition py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={18} />
                  Mark Paid
                </button>

              )}

            </div>

          </div>

        ))}

      </div>

      {/* 🔥 MODAL */}
      
      {selected && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 overflow-y-auto">

          <div className="bg-[#0B0F19] border border-white/10 rounded-[32px] max-w-5xl w-full overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="relative p-8 border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-transparent">

              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 transition p-3 rounded-2xl"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-5">

                <div className="w-24 h-24 rounded-3xl bg-yellow-500 text-black flex items-center justify-center text-4xl font-bold shadow-xl">
                  {selected.first_name?.charAt(0)}
                </div>

                <div>

                  <h2 className="text-4xl font-bold">
                    {selected.surname}{" "}
                    {selected.first_name}
                  </h2>

                  <div className="flex items-center gap-2 mt-3 text-gray-400">

                    <ShieldCheck
                      size={18}
                      className="text-green-400"
                    />

                    Verified Booking

                  </div>

                </div>

              </div>

            </div>

            {/* BODY */}
            <div className="p-8 grid lg:grid-cols-2 gap-8">

              {/* LEFT */}
              <div className="space-y-6">

                <div className="bg-[#121826] rounded-3xl p-6 border border-white/10">

                  <h3 className="text-yellow-400 font-bold mb-5">
                    Passenger Information
                  </h3>

                  <div className="space-y-4 text-sm">

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Full Name
                      </span>

                      <span>
                        {selected.surname}{" "}
                        {selected.first_name}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Nationality
                      </span>

                      <span>
                        {selected.nationality}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Date of Birth
                      </span>

                      <span>
                        {selected.date_of_birth}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Place of Birth
                      </span>

                      <span>
                        {selected.place_of_birth}
                      </span>
                    </div>

                  </div>

                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-5">

  <div className="glass-card">
    <h3 className="section-title">
      Passport Information
    </h3>

    <div className="space-y-2 text-sm">

      <p>
        <b>Passport Number:</b>{" "}
        {selected.passport_number}
      </p>

      <p>
        <b>Issue Date:</b>{" "}
        {selected.passport_issue}
      </p>

      <p>
        <b>Expiry Date:</b>{" "}
        {selected.passport_expiry}
      </p>

      <p>
        <b>Place of Issue:</b>{" "}
        {selected.passport_issue_place}
      </p>

    </div>
  </div>

  <div className="glass-card">
    <h3 className="section-title">
      Travel Information
    </h3>

    <div className="space-y-2 text-sm">

      <p>
        <b>Occupation:</b>{" "}
        {selected.occupation}
      </p>

      <p>
        <b>Gender:</b>{" "}
        {selected.gender}
      </p>

      <p>
        <b>Marital Status:</b>{" "}
        {selected.marital_status}
      </p>

      <p>
        <b>Address:</b>{" "}
        {selected.address}
      </p>

    </div>
  </div>

</div>

                {/* CONTACT */}
                <div className="bg-[#121826] rounded-3xl p-6 border border-white/10">

                  <h3 className="text-yellow-400 font-bold mb-5">
                    Contact Information
                  </h3>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3">

                      <Mail
                        size={18}
                        className="text-yellow-400"
                      />

                      <span>
                        {selected.email}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <Phone
                        size={18}
                        className="text-green-400"
                      />

                      <span>
                        {selected.phone}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-6">

                {/* PACKAGE */}
                {selected.package && (

                  <div className="bg-[#121826] rounded-3xl p-6 border border-white/10">

                    <h3 className="text-yellow-400 font-bold mb-5">
                      Package Details
                    </h3>

                    <div className="space-y-4">

                      <div>

                        <p className="text-2xl font-bold">
                          {selected.package.title}
                        </p>

                        <p className="text-yellow-400 mt-1">
                          ₦
                          {Number(
                            selected.package.price
                          ).toLocaleString()}
                        </p>

                      </div>

                      <div className="flex items-center gap-3">

                        <Plane
                          size={18}
                          className="text-blue-400"
                        />

                        <span>
                          {
                            selected.package.flight_from
                          }{" "}
                          →{" "}
                          {
                            selected.package.flight_to
                          }
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CalendarDays
                          size={18}
                          className="text-yellow-400"
                        />

                        <span>
                          {
                            selected.package
                              .departure_date
                          }{" "}
                          →{" "}
                          {
                            selected.package.return_date
                          }
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <Hotel
                          size={18}
                          className="text-green-400"
                        />

                        <span>
                          {
                            selected.package.hotel_name
                          }{" "}
                          ⭐
                          {
                            selected.package
                              .hotel_rating
                          }
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <Users
                          size={18}
                          className="text-purple-400"
                        />

                        <span>
                          {
                            selected.package
                              .total_slots
                          }{" "}
                          Total Slots
                        </span>

                      </div>

                    </div>

                  </div>

                )}

                {/* PAYMENT */}
                <div className="bg-[#121826] rounded-3xl p-6 border border-white/10">

                  <h3 className="text-yellow-400 font-bold mb-5">
                    Payment Information
                  </h3>

                  <div className="space-y-4">

                    <div className="flex justify-between">

                      <span className="text-gray-400">
                        Status
                      </span>

                      <span
                        className={`font-semibold ${
                          selected.status === "paid"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {selected.status}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-400">
                        Payment Reference
                      </span>

                      <span>
                        {
                          selected.payment_reference
                        }
                      </span>

                    </div>

                  </div>

                  {/* ACTION */}
                  {selected.status !== "paid" && (

                    <button
                      onClick={() =>
                        markPaid(selected.id)
                      }
                      className="w-full mt-6 bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                    >
                      <BadgeCheck size={20} />
                      Confirm Payment
                    </button>

                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}