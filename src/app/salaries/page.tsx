"use client";

import {
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";

import {
  Suspense,
  useEffect,
  useState,
} from "react";

import SalarySchema from "@/components/seo/SalarySchema";
import SalaryTable from "@/components/features/SalaryTable";
import SalaryFilters from "@/components/features/SalaryFilters";
import Pagination from "@/components/features/Pagination";

import { salaryData } from "@/lib/mock-data";

const PAGE_SIZE = 25;

function SalariesContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("company") || ""
  );

  const [role, setRole] = useState(
    searchParams.get("role") || ""
  );

  const [location, setLocation] =
    useState(
      searchParams.get("location") || ""
    );

  const [currency, setCurrency] =
    useState<"INR" | "USD">(
      (searchParams.get(
        "currency"
      ) as "INR" | "USD") || "INR"
    );

  const [selectedLevels, setSelectedLevels] =
    useState<string[]>(
      searchParams.get("level")
        ? [searchParams.get("level")!]
        : []
    );

  const [currentPage, setCurrentPage] =
    useState(
      Number(searchParams.get("page")) ||
        1
    );

  useEffect(() => {
    const params =
      new URLSearchParams();

    if (search)
      params.set("company", search);

    if (role)
      params.set("role", role);

    if (location)
      params.set(
        "location",
        location
      );

    if (currency)
      params.set(
        "currency",
        currency
      );

    if (selectedLevels.length > 0)
      params.set(
        "level",
        selectedLevels.join(",")
      );

    params.set(
      "page",
      String(currentPage)
    );

    router.replace(
      `${pathname}?${params.toString()}`
    );
  }, [
    search,
    role,
    location,
    currency,
    selectedLevels,
    currentPage,
    pathname,
    router,
  ]);

  const toggleLevel = (
    level: string
  ) => {
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter(
            (l) => l !== level
          )
        : [...prev, level]
    );
  };

  const filteredData =
    salaryData.filter((item) => {
      const companyMatch =
        item.company
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const roleMatch =
        role === "" ||
        item.role === role;

      const locationMatch =
        location === "" ||
        item.location === location;

      const levelMatch =
        selectedLevels.length === 0 ||
        selectedLevels.includes(
          item.level
        );

      return (
        companyMatch &&
        roleMatch &&
        locationMatch &&
        levelMatch
      );
    });

  const sortedData =
    [...filteredData].sort(
      (a, b) =>
        b.totalCompensation -
        a.totalCompensation
    );

  const start =
    (currentPage - 1) * PAGE_SIZE;

  const paginatedData =
    sortedData.slice(
      start,
      start + PAGE_SIZE
    );

  const totalPages = Math.ceil(
    sortedData.length / PAGE_SIZE
  );

  return (
    <main className="mx-auto max-w-7xl p-8">
      <SalarySchema />

      <h1 className="mb-6 text-4xl font-bold">
        Software Engineer Salaries
      </h1>

      <SalaryFilters
        company={search}
        setCompany={setSearch}
        role={role}
        setRole={setRole}
        location={location}
        setLocation={setLocation}
      />

      <div className="mt-6">
        <h2 className="mb-2 font-semibold">
          Levels
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "L3",
            "L4",
            "L5",
            "L6",
            "Principal",
          ].map((level) => (
            <label
              key={level}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedLevels.includes(
                  level
                )}
                onChange={() =>
                  toggleLevel(level)
                }
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          onClick={() =>
            setCurrency("INR")
          }
          className={`rounded border px-4 py-2 ${
            currency === "INR"
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          INR
        </button>

        <button
          onClick={() =>
            setCurrency("USD")
          }
          className={`rounded border px-4 py-2 ${
            currency === "USD"
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          USD
        </button>
      </div>

      <div className="mt-6">
        <p className="mb-4 text-sm text-gray-500">
          Showing{" "}
          {sortedData.length === 0
            ? 0
            : start + 1}
          –
          {Math.min(
            start + PAGE_SIZE,
            sortedData.length
          )}{" "}
          of {sortedData.length} records
        </p>

        <SalaryTable
          data={paginatedData}
          currency={currency}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={
            setCurrentPage
          }
        />
      </div>
    </main>
  );
}

export default function SalariesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SalariesContent />
    </Suspense>
  );
}