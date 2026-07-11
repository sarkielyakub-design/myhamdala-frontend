import Link from "next/link";

import {
  Mail,
  Download,
  Users,
  Send,
} from "lucide-react";

export default function NewsletterHero() {

  return (

    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B1220] via-[#111827] to-[#1E293B] border border-white/10 p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">

            <Mail
              size={38}
              className="text-black"
            />

          </div>

          <h1 className="text-5xl font-black text-white">
            Newsletter
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Manage newsletter subscribers,
            export emails and monitor
            subscription growth.
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black">

            <Download size={20} />

            Export CSV

          </button>

          <button className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white">

            <Send size={20} />

            Send Campaign

          </button>

        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">

          <Users className="text-green-400" />

          <h2 className="mt-4 text-4xl font-black text-white">
            Subscribers
          </h2>

          <p className="mt-2 text-slate-400">
            Total newsletter members.
          </p>

        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">

          <Mail className="text-blue-400" />

          <h2 className="mt-4 text-4xl font-black text-white">
            Email List
          </h2>

          <p className="mt-2 text-slate-400">
            Ready for marketing campaigns.
          </p>

        </div>

      </div>

    </section>

  );

}