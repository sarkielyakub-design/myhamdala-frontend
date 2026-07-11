import { Plane, ShieldCheck, Hotel, BadgeDollarSign } from "lucide-react";

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900 to-black" />

      <div className="absolute -top-52 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-52 -right-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="mx-auto max-w-4xl text-center">

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
            <Plane
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
              Explore Our Packages
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
            Choose Your Perfect

            <span className="block text-yellow-400">
              Umrah Journey
            </span>

          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-300
            "
          >
            Discover carefully selected Umrah packages designed to
            provide comfort, convenience and a spiritually fulfilling
            experience with trusted accommodation, flights and
            professional support.
          </p>

        </div>        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Plane
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              100+
            </h3>

            <p className="mt-2 text-slate-300">
              Successful Trips
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Hotel
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              4★ & 5★
            </h3>

            <p className="mt-2 text-slate-300">
              Premium Hotels
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <ShieldCheck
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              100%
            </h3>

            <p className="mt-2 text-slate-300">
              Trusted Service
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <BadgeDollarSign
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              Best
            </h3>

            <p className="mt-2 text-slate-300">
              Competitive Prices
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}