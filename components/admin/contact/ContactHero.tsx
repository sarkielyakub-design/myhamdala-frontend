import {
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactHero() {

  return (

    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B1220] via-[#111827] to-[#1E293B] p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">

            <Mail
              size={38}
              className="text-black"
            />

          </div>

          <h1 className="text-5xl font-black text-white">
            Contact Messages
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Manage customer enquiries, reply to messages,
            and track communication with clients.
          </p>

        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <MessageSquare className="text-blue-400"/>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Customer Messages
          </h3>

          <p className="mt-2 text-slate-400">
            View all enquiries.
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <Clock className="text-yellow-400"/>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Pending Replies
          </h3>

          <p className="mt-2 text-slate-400">
            Respond quickly to customers.
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <CheckCircle2 className="text-green-400"/>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Resolved
          </h3>

          <p className="mt-2 text-slate-400">
            Completed conversations.
          </p>

        </div>

      </div>

    </section>

  );

}