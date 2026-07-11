import { Newspaper, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900 to-black" />

      <div className="absolute -top-52 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-52 -right-40 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="max-w-4xl">

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-6
              py-3
            "
          >

            <Newspaper
              size={20}
              className="text-yellow-400"
            />

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[3px]
                text-blue-200
              "
            >
              Travel News & Updates
            </span>

          </div>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >
            Stay Updated With

            <span className="block text-yellow-400">
              Travel News
            </span>

          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-300
            "
          >
            Get the latest information about Umrah,
            Hajj, visa requirements, airline updates,
            travel tips and important announcements
            from M.Y Hamdala Travel & Tour.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/packages"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-700
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-800
              "
            >
              Explore Packages

              <ArrowRight size={20} />

            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/20
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}