import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  action?: ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  action,
}: Props) {

  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#111827] p-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-4xl font-black text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {subtitle}
        </p>

      </div>

      {action}

    </div>
  );
}