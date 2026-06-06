"use client";

import { salaryData } from "@/lib/mock-data";

const locations = [
  ...new Set(
    salaryData.map((item) => item.location)
  ),
];

type Props = {
  company: string;
  setCompany: (value: string) => void;

  role: string;
  setRole: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;
};

export default function SalaryFilters({
  company,
  setCompany,
  role,
  setRole,
  location,
  setLocation,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Filter Salaries
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Company Search */}
        <input
          type="text"
          placeholder="Search company..."
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          className="rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-pink-500"
        />

        {/* Role Filter */}
        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-pink-500"
        >
          <option value="">
            All Roles
          </option>

          <option value="Software Engineer">
            Software Engineer
          </option>

          <option value="Frontend Engineer">
            Frontend Engineer
          </option>

          <option value="Backend Engineer">
            Backend Engineer
          </option>
        </select>

        {/* Location Filter */}
        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-pink-500"
        >
          <option value="">
            All Locations
          </option>

          {locations.map((loc) => (
            <option
              key={loc}
              value={loc}
            >
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}