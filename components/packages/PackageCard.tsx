import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  Plane,
  Hotel,
  Users,
  ArrowRight,
} from "lucide-react";

interface Package {
  id: number;
  title: string;
  description: string;
  image_url: string;
  hotel_name: string;
  hotel_rating: string;
  category: string;
  price: number;
  flight_from: string;
  flight_to: string;
  duration_days: number;
  departure_date: string;
  return_date: string;
  total_slots: number;
  booked_slots: number;
}
interface Props {
  pkg: Package;
}

export default function PackageCard({
  pkg,
}: Props) {

  const availableSlots =
    pkg.total_slots - pkg.booked_slots;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >

      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={pkg.image_url}
          alt={pkg.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Category */}

        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-blue-700
            px-4
            py-2
            text-sm
            font-bold
            text-white
          "
        >
          {pkg.category.toUpperCase()}
        </span>

        {/* Available */}

        <span
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-green-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          {availableSlots} Slots Left
        </span>

      </div>

      {/* Body */}

      <div className="p-7">

        {/* Stars */}

        <div className="flex text-yellow-500">

          {"★".repeat(Number(pkg.hotel_rating || 5))}

        </div>

        {/* Title */}

        <h2
          className="
            mt-4
            line-clamp-2
            text-2xl
            font-bold
            text-slate-900
          "
        >
          {pkg.title}
        </h2>

        {/* Description */}

        <p
          className="
            mt-4
            line-clamp-3
            leading-7
            text-slate-600
          "
        >
          {pkg.description}
        </p>

        {/* Information */}

        <div className="mt-6 space-y-4">

          <div className="flex items-center gap-3">

            <Hotel
              size={18}
              className="text-blue-700"
            />

            <span className="text-slate-700">

              {pkg.hotel_name}

            </span>

          </div>

          <div className="flex items-center gap-3">

            <Plane
              size={18}
              className="text-blue-700"
            />

            <span className="text-slate-700">

              {pkg.flight_from} → {pkg.flight_to}

            </span>

          </div>

          <div className="flex items-center gap-3">

            <Calendar
              size={18}
              className="text-blue-700"
            />

            <span className="text-slate-700">

              {pkg.duration_days} Days

            </span>

          </div>

          <div className="flex items-center gap-3">

            <Users
              size={18}
              className="text-blue-700"
            />

            <span className="text-slate-700">

              {availableSlots} Seats Available

            </span>

          </div>

        </div>

        {/* Price */}

        <div
          className="
            mt-8
            flex
            items-end
            justify-between
          "
        >

          <div>

            <p className="text-sm text-slate-500">

              Starting From

            </p>

            <h3
              className="
                mt-1
                text-4xl
                font-black
                text-blue-700
              "
            >
              ₦{Number(pkg.price).toLocaleString()}
            </h3>

          </div>

        </div>

        {/* Buttons */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-4
          "
        >

          
           <Link
  href={`/packages/${pkg.id}`}
            className="
              flex
              items-center
              justify-center
              rounded-xl
              border-2
              border-blue-700
              py-3
              font-semibold
              text-blue-700
              transition
              hover:bg-blue-50
            "
          >
            View Details
          </Link>

          <Link
            href={`/booking?package=${pkg.id}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-700
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-800
            "
          >
            Book Now

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </article>
  );
}