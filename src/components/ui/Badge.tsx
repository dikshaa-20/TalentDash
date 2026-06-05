type BadgeProps = {
  level: string;
};

export default function Badge({
  level,
}: BadgeProps) {
  const colors: Record<string, string> = {
    L3: "bg-slate-200 text-slate-800",
    L4: "bg-blue-200 text-blue-800",
    L5: "bg-indigo-200 text-indigo-800",
    L6: "bg-purple-200 text-purple-800",
    Principal:
      "bg-slate-900 text-white",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        colors[level]
      }`}
    >
      {level}
    </span>
  );
}