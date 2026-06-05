import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-sky-500">
          TalentDash
        </h1>

        <div className="flex gap-8">
          <Link
            href="/"
            className="text-zinc-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/salaries"
            className="text-zinc-300 hover:text-white"
          >
            Salaries
          </Link>

          <Link
            href="/companies"
            className="text-zinc-300 hover:text-white"
          >
            Companies
          </Link>

          <Link
            href="/compare"
            className="text-zinc-300 hover:text-white"
          >
            Compare
          </Link>
        </div>
      </div>
    </nav>
  );
}