import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-pink-600"
        >
          TalentDash
        </Link>

        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/salaries">Salaries</Link>
          <Link href="/compare">Compare</Link>
        </div>
      </div>
    </nav>
  );
}