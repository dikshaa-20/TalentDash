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
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-6 text-4xl font-bold">
        Companies
      </h1>
      <p className="mb-4 text-zinc-400">
  Browse compensation data from top
  technology companies.
</p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-sky-500"
        />
      </div>

      {filteredCompanies.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          No companies found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}