import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-pink-600">
          TalentDash
        </h1>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        <Link
          href="/"
          className="rounded-lg px-4 py-3 hover:bg-pink-100"
        >
          Home
        </Link>

        <Link
          href="/companies"
          className="rounded-lg px-4 py-3 hover:bg-pink-100"
        >
          Companies
        </Link>

        <Link
          href="/salaries"
          className="rounded-lg px-4 py-3 hover:bg-pink-100"
        >
          Salaries
        </Link>

        <Link
          href="/compare"
          className="rounded-lg px-4 py-3 hover:bg-pink-100"
        >
          Compare
        </Link>
      </nav>
    </aside>
  );
}