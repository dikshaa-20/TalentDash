import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-4xl">
        <h1 className="mb-6 text-6xl font-bold tracking-tight">
          TalentDash
        </h1>

        <p className="mb-8 text-xl text-gray-400">
          Discover and compare software engineer compensation
          across top technology companies.
        </p>

        <p className="mx-auto mb-12 max-w-2xl text-gray-500">
          Explore salary data by company, level, location,
          and experience. Compare offers side-by-side and
          understand market compensation trends with
          structured salary intelligence.
        </p>

        <Link
          href="/salaries"
          className="rounded-lg bg-sky-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-sky-500"
        >
          View Salaries
        </Link>
      </div>
    </main>
  );
}