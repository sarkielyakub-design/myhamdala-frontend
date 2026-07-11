"use client";

import { useEffect, useState } from "react";

import BookingStats from "@/components/admin/bookings/BookingStats";
import BookingToolbar from "@/components/admin/bookings/BookingToolbar";
import BookingTable from "@/components/admin/bookings/BookingTable";

import { getBookings } from "@/lib/api";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      try {
        const data = await getBookings();
        setBookings(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <BookingStats bookings={bookings} />

      <BookingToolbar />

      <BookingTable bookings={bookings} />
    </div>
  );
}