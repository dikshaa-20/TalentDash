import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full border border-sky-500 px-4 py-2 text-sm text-sky-400">
              Salary Intelligence Platform
            </div>

            <h1 className="mb-6 text-6xl font-bold leading-tight">
              Explore.
              <br />
              Compare.
              <br />
              <span className="text-sky-500">
                Grow.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-zinc-400">
              Discover software engineer salaries,
              compare compensation packages,
              explore company insights and make
              informed career decisions.
            </p>

            <div className="flex gap-4">
              <Link
                href="/salaries"
                className="rounded-xl bg-sky-600 px-8 py-4 font-semibold transition hover:bg-sky-500"
              >
                View Salaries
              </Link>

              <Link
                href="/compare"
                className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold hover:border-sky-500"
              >
                Compare Offers
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Salary Overview
              </h2>

              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm text-sky-400">
                Live Data
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-black p-6">
                <p className="text-zinc-500">
                  Companies
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  20+
                </h3>
              </div>

              <div className="rounded-xl bg-black p-6">
                <p className="text-zinc-500">
                  Salary Records
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  60+
                </h3>
              </div>

              <div className="rounded-xl bg-black p-6">
                <p className="text-zinc-500">
                  Highest TC
                </p>

                <h3 className="mt-2 text-3xl font-bold text-green-400">
                  ₹1.2Cr
                </h3>
              </div>

              <div className="rounded-xl bg-black p-6">
                <p className="text-zinc-500">
                  Locations
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  10+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-bold">
              Salary Search
            </h3>

            <p className="text-zinc-400">
              Search salaries across top
              technology companies.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-bold">
              Compare Offers
            </h3>

            <p className="text-zinc-400">
              Compare compensation packages
              side-by-side.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-bold">
              Company Insights
            </h3>

            <p className="text-zinc-400">
              Explore company compensation
              trends and levels.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-bold">
              Salary Analytics
            </h3>

            <p className="text-zinc-400">
              Understand compensation across
              roles and locations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}