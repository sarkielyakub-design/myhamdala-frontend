"use client";

import Image from "next/image";
import {
  Download,
  ZoomIn,
  FileText,
  User,
  Calendar,
  Globe,
  ShieldCheck,
} from "lucide-react";

interface Props {
  booking: any;
}

export default function PassportViewer({
  booking,
}: Props) {

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black text-white">
            Passport Information
          </h2>

          <p className="mt-2 text-slate-400">
            Review customer passport before approval.
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-yellow-400
            px-5
            py-3
            font-semibold
            text-black
          "
        >
          <Download size={18} />

          Download
        </button>

      </div>

      <div className="grid gap-8 xl:grid-cols-2">

        {/* Passport Image */}

        <div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10">

            <Image
              src={
                booking.passport_image ||
                "/images/passport-placeholder.jpg"
              }
              alt="Passport"
              fill
              className="object-contain bg-black"
            />

          </div>

          <button
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-blue-600
              py-4
              font-semibold
              text-white
            "
          >
            <ZoomIn size={18} />

            View Full Size

          </button>

        </div>

        {/* Passport Details */}

        <div className="space-y-5">

          <InfoCard
            icon={<User size={18} />}
            title="Full Name"
            value={`${booking.first_name} ${booking.surname}`}
          />

          <InfoCard
            icon={<FileText size={18} />}
            title="Passport Number"
            value={booking.passport_number}
          />

          <InfoCard
            icon={<Globe size={18} />}
            title="Nationality"
            value={booking.nationality}
          />

          <InfoCard
            icon={<Calendar size={18} />}
            title="Expiry Date"
            value={booking.passport_expiry}
          />

          <InfoCard
            icon={<ShieldCheck size={18} />}
            title="Verification"
            value="Pending Review"
          />

        </div>

      </div>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: any;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-black/20 p-5">

      <div className="text-yellow-400">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-400">
          {title}
        </p>

        <h3 className="font-semibold text-white">
          {value || "--"}
        </h3>

      </div>

    </div>
  );
}