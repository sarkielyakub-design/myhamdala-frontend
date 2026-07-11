import BookingDetails from "@/components/admin/bookings/BookingDetails";
import { getBookingById } from "@/lib/api";

interface Props {
  params: {
    id: string;
  };
}

export default async function BookingDetailsPage({
  params,
}: Props) {

  const booking = await getBookingById(params.id);

  return (
    <BookingDetails
      booking={booking}
    />
  );
}