"use client";

import { useState } from "react";
import CompanyCard from "@/components/features/CompanyCard";
import { salaryData } from "@/lib/mock-data";

export default function CompaniesPage() {
  const [search, setSearch] = useState("");

  const companies = Array.from(
    new Map(
      salaryData.map((item) => [
        item.companySlug,
        item,
      ])
    ).values()
  );

  const filteredCompanies =
    companies.filter((company) =>
      company.company
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <main className="min-h-screen bg-[#f8f5f4] text-black">
      <section className="mx-auto max-w-7xl px-8 py-12">

        <div className="mb-10">
          <span className="rounded-full border border-sky-500 px-4 py-2 text-sm text-sky-400">
            Company Directory
          </span>

          <h1 className="mt-6 text-5xl font-bold text-black">
            Explore
            <span className="text-sky-600">
              {" "}Companies
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-600">
            Browse compensation insights,
            salary distributions, levels,
            headquarters and company information
            from leading technology companies.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm">
          <input
            type="text"
            placeholder="Search company..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-300 bg-white p-4 text-black outline-none focus:border-sky-500"
          />
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-zinc-300 bg-white p-6">
            <p className="text-zinc-500">
              Companies
            </p>

            <h2 className="mt-2 text-3xl font-bold text-black">
              {filteredCompanies.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-300 bg-white p-6">
            <p className="text-zinc-500">
              Salary Records
            </p>

            <h2 className="mt-2 text-3xl font-bold text-black">
              {salaryData.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-300 bg-white p-6">
            <p className="text-zinc-500">
              Industries
            </p>

            <h2 className="mt-2 text-3xl font-bold text-black">
              10+
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-300 bg-white p-6">
            <p className="text-zinc-500">
              Locations
            </p>

            <h2 className="mt-2 text-3xl font-bold text-black">
              15+
            </h2>
          </div>

        </div>

        {filteredCompanies.length === 0 ? (
          <div className="rounded-2xl border border-zinc-300 bg-white p-12 text-center text-black">
            No companies found.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map(
              (company) => {
                const records =
                  salaryData.filter(
                    (item) =>
                      item.companySlug ===
                      company.companySlug
                  ).length;

                return (
                  <CompanyCard
                    key={
                      company.companySlug
                    }
                    company={
                      company.company
                    }
                    companySlug={
                      company.companySlug
                    }
                    industry={
                      company.industry
                    }
                    founded={
                      company.founded
                    }
                    headquarters={
                      company.headquarters
                    }
                    records={records}
                  />
                );
              }
            )}
          </div>
        )}
      </section>
    </main>
  );
}