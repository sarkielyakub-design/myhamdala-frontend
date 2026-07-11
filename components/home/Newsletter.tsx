"use client";

import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-blue-700
            via-blue-800
            to-slate-900
            px-8
            py-16
            text-white
            lg:px-16
          "
        >

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-white/10
                backdrop-blur
              "
            >
              <Mail size={36} />
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                lg:text-5xl
              "
            >
              Stay Updated With
              <span className="block text-yellow-400">
                M.Y Hamdala Travel
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-blue-100
              "
            >
              Subscribe to receive the latest Umrah packages,
              Hajj updates, travel offers, visa information
              and exclusive promotions delivered directly
              to your inbox.
            </p>

          </div>

          {/* Newsletter Form */}

          <div className="mx-auto mt-12 max-w-3xl">            <form
              className="
                flex
                flex-col
                gap-5
                rounded-3xl
                bg-white/10
                p-4
                backdrop-blur
                sm:flex-row
              "
            >

              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-white/20
                  bg-white
                  px-6
                  py-4
                  text-slate-900
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-yellow-400
                  focus:ring-4
                  focus:ring-yellow-400/30
                "
              />

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-yellow-400
                  px-8
                  py-4
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-yellow-300
                "
              >

                Subscribe

                <Send size={20} />

              </button>

            </form>

            <p
              className="
                mt-6
                text-center
                text-sm
                text-blue-100
              "
            >
              We respect your privacy. No spam, only travel updates,
              special offers and important announcements.
            </p>

          </div>          {/* ===========================
                TRUST INDICATORS
          =========================== */}

          <div
            className="
              mt-14
              grid
              gap-8
              border-t
              border-white/10
              pt-10
              text-center
              md:grid-cols-3
            "
          >

            <div>

              <h3 className="text-4xl font-black text-yellow-400">
                5K+
              </h3>

              <p className="mt-2 text-blue-100">
                Happy Travellers
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-yellow-400">
                25+
              </h3>

              <p className="mt-2 text-blue-100">
                Destinations Worldwide
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-yellow-400">
                24/7
              </h3>

              <p className="mt-2 text-blue-100">
                Customer Support
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}