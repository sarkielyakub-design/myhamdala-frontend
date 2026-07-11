"use client";

interface Props {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  onConfirm,
  onCancel,
}: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-full max-w-md rounded-3xl bg-[#111827] p-8">

        <h2 className="text-2xl font-black text-white">
          {title}
        </h2>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-white/10 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
}