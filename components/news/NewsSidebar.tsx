import Link from "next/link";

import {
  User,
  Calendar,
  Clock3,
  Tag,
  Phone,
  Mail,
  MapPin,
  Newspaper,
} from "lucide-react";

interface Props {
  article: any;
}

export default function NewsSidebar({
  article,
}: Props) {

  if (!article) return null;

  return (
    <aside className="space-y-8 lg:sticky lg:top-24">

      {/* Article Information */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h3 className="text-2xl font-bold text-slate-900">
          Article Information
        </h3>

        <div className="mt-8 space-y-6">

          <div className="flex items-center gap-4">

            <User
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Author
              </p>

              <p className="font-semibold">
                {article.author}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Calendar
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Published
              </p>

              <p className="font-semibold">
                {article.published_at}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Clock3
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Reading Time
              </p>

              <p className="font-semibold">
                {article.read_time || 5} min
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Tag
              size={20}
              className="text-blue-700"
            />

            <div>

              <p className="text-sm text-slate-500">
                Category
              </p>

              <p className="font-semibold">
                {article.category}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Contact Card */}

      <div className="rounded-3xl bg-blue-700 p-8 text-white">

        <Newspaper
          size={40}
          className="text-yellow-400"
        />

        <h3 className="mt-6 text-2xl font-bold">
          Need Travel Assistance?
        </h3>

        <p className="mt-4 leading-8 text-blue-100">
          Contact M.Y Hamdala Travel & Tour for Umrah,
          Hajj, visa processing and international travel
          services.
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3">

            <Phone size={18} />

            <span>08034454580</span>

          </div>

          <div className="flex items-center gap-3">

            <Phone size={18} />

            <span>07030777053</span>

          </div>

          <div className="flex items-center gap-3">

            <Mail size={18} />

            <span className="break-all">
              myhamdala2020@gmail.com
            </span>

          </div>

          <div className="flex items-start gap-3">

            <MapPin
              size={18}
              className="mt-1"
            />

            <span>
              No. 26 Block A,
              Railway Lagos Street,
              Civic Center
            </span>

          </div>

        </div>

        <Link
          href="/contact"
          className="
            mt-8
            inline-flex
            w-full
            justify-center
            rounded-xl
            bg-white
            py-4
            font-semibold
            text-blue-700
            transition
            hover:bg-slate-100
          "
        >
          Contact Us
        </Link>

      </div>

      {/* Newsletter */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h3 className="text-2xl font-bold text-slate-900">
          Stay Updated
        </h3>

        <p className="mt-3 text-slate-600">
          Subscribe to receive the latest travel
          updates, visa information and special offers.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="
            mt-6
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            focus:border-blue-700
          "
        />

        <button
          className="
            mt-4
            w-full
            rounded-xl
            bg-blue-700
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-800
          "
        >
          Subscribe
        </button>

      </div>

    </aside>
  );
}