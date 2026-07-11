interface Props {
  status:
    | "active"
    | "inactive"
    | "paid"
    | "pending"
    | "approved"
    | "cancelled"
    | "published"
    | "draft";
}

export default function StatusBadge({
  status,
}: Props) {

  const styles = {
    active:
      "bg-green-500/20 text-green-400",

    inactive:
      "bg-red-500/20 text-red-400",

    paid:
      "bg-green-500/20 text-green-400",

    pending:
      "bg-yellow-500/20 text-yellow-400",

    approved:
      "bg-blue-500/20 text-blue-400",

    cancelled:
      "bg-red-500/20 text-red-400",

    published:
      "bg-emerald-500/20 text-emerald-400",

    draft:
      "bg-gray-500/20 text-gray-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-2 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}