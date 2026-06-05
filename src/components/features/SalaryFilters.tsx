"use client";
import { salaryData } from "@/lib/mock-data";

const locations = [
  ...new Set(
    salaryData.map(
      (item) => item.location
    )
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
    <div className="grid gap-4 md:grid-cols-3">
      <input
        type="text"
        placeholder="Search company..."
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
        className="rounded border p-3"
      />

<select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="rounded border p-3"
>
  <option value="">All Roles</option>

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

      <select
   value={location}
  onChange={(e) =>
    setLocation(e.target.value)
  }
  className="rounded border p-3"
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
  );
}