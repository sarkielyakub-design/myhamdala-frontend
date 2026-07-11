"use client";

import {
  User,
  Phone,
  Mail,
  MapPin,
  IdCard,
  Plane,
  Calendar,
  CreditCard,
  CheckCircle2,
  Clock3,
  Printer,
  MessageCircle,
  MailCheck,
  Download,
} from "lucide-react";

interface Props {
  booking: any;
}

export default function BookingDetails({
  booking,
}: Props) {

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-black text-white">
              Booking Details
            </h1>

            <p className="mt-2 text-slate-400">
              Booking Reference:
              {" "}
              <span className="font-mono text-yellow-400">
                {booking.reference}
              </span>
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <button className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white">
              Approve
            </button>

            <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white">
              Reject
            </button>

            <button className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black">
              Print
            </button>

          </div>

        </div>

      </div>

      {/* Customer + Travel */}

      <div className="grid gap-8 xl:grid-cols-2">

        {/* Customer */}

        <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Customer Information
          </h2>

          <div className="space-y-5">

            <InfoRow icon={<User size={18} />} label="Full Name" value={`${booking.first_name} ${booking.surname}`} />

            <InfoRow icon={<Phone size={18} />} label="Phone" value={booking.phone} />

            <InfoRow icon={<Mail size={18} />} label="Email" value={booking.email} />

            <InfoRow icon={<IdCard size={18} />} label="ID Card" value={booking.id_card_number} />

            <InfoRow icon={<MapPin size={18} />} label="Nationality" value={booking.nationality} />

          </div>

        </div>

        {/* Package */}

        <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Travel Information
          </h2>

          <div className="space-y-5">

            <InfoRow icon={<Plane size={18} />} label="Package" value={booking.package_title} />

            <InfoRow icon={<Calendar size={18} />} label="Departure" value={booking.departure_date} />

            <InfoRow icon={<Calendar size={18} />} label="Return" value={booking.return_date} />

            <InfoRow icon={<CreditCard size={18} />} label="Amount" value={`₦${Number(booking.amount).toLocaleString()}`} />

            <InfoRow
              icon={
                booking.payment_status === "paid"
                  ? <CheckCircle2 size={18}/>
                  : <Clock3 size={18}/>
              }
              label="Payment"
              value={booking.payment_status}
            />

          </div>

        </div>

      </div>

      {/* Documents */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-2xl font-bold text-white">
          Documents
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          <button className="rounded-2xl bg-blue-600 p-5 text-white">
            View Passport
          </button>

          <button className="rounded-2xl bg-green-600 p-5 text-white">
            Download PDF
          </button>

          <button className="rounded-2xl bg-yellow-400 p-5 font-semibold text-black">
            Print Booking
          </button>

        </div>

      </div>

      {/* Communication */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-2xl font-bold text-white">
          Communication
        </h2>

        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-3 rounded-xl bg-purple-600 px-6 py-4 text-white">

            <MailCheck size={20} />

            Send Email

          </button>

          <button className="flex items-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-white">

            <MessageCircle size={20} />

            WhatsApp

          </button>

          <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-white">

            <Download size={20} />

            Download Invoice

          </button>

          <button className="flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-black">

            <Printer size={20} />

            Print Receipt

          </button>

        </div>

      </div>

    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: any;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-black/20 p-4">

      <div className="text-yellow-400">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-400">
          {label}
        </p>

        <p className="font-semibold text-white">
          {value || "--"}
        </p>

      </div>

    </div>
  );
}