import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5f4]">
      <section className="mx-auto max-w-7xl px-10 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              Salary Intelligence Platform
            </span>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-gray-900">
              Explore.
              <br />
              Compare.
              <br />
              <span className="text-pink-500">
                Grow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Discover software engineer salaries,
              compare compensation packages,
              explore company insights, and make
              informed career decisions.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/salaries"
                className="rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
              >
                View Salaries
              </Link>

              <Link
                href="/compare"
                className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 hover:border-pink-500"
              >
                Compare Offers
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Salary Overview
              </h2>

              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                Live Data
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-gray-500">
                  Companies
                </p>
                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  20+
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-gray-500">
                  Salary Records
                </p>
                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  60+
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-gray-500">
                  Highest TC
                </p>
                <h3 className="mt-2 text-3xl font-bold text-green-600">
                  ₹1.2 Cr
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-gray-500">
                  Locations
                </p>
                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  10+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-10 pb-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Why Use TalentDash?
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Salary Search
            </h3>

            <p className="text-gray-600">
              Search compensation across top
              technology companies.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Compare Offers
            </h3>

            <p className="text-gray-600">
              Compare two salary packages
              side-by-side.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Company Insights
            </h3>

            <p className="text-gray-600">
              View compensation trends and
              salary distributions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Analytics
            </h3>

            <p className="text-gray-600">
              Understand market compensation
              benchmarks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}