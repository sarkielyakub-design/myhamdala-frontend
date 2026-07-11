import {
  Inbox,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {

  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-[#111827] py-20 text-center">

      <Inbox
        size={70}
        className="mx-auto text-slate-600"
      />

      <h2 className="mt-6 text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-slate-400">
        {description}
      </p>

    </div>
  );
}