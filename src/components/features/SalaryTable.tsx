import { SalaryRecord } from "@/types/salary";
import { formatINR, formatUSD } from "@/lib/formatters";
import Badge from "../ui/Badge";

type SalaryTableProps = {
  data: SalaryRecord[];
  currency: "INR" | "USD";
};

export default function SalaryTable({
  data,
  currency,
}: SalaryTableProps) {
  const convert = (value: number) => {
    if (currency === "USD") {
      return formatUSD(value * 0.012);
    }

    return formatINR(value);
  };

  if (data.length === 0) {
    return (
      <div className="rounded-lg border p-10 text-center">
        <h2 className="mb-2 text-xl font-semibold">
          No records found
        </h2>

        <p>
          Try removing some filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse">
        <thead className="sticky top-16 bg-slate-100">
          <tr className="bg-slate-100 text-left">
            <th className="p-4">Company</th>
            <th className="p-4">Role</th>
            <th className="p-4">Level</th>
            <th className="p-4">Location</th>
            <th className="p-4">Experience</th>
            <th className="p-4">Base Salary</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Total Comp</th>
          </tr>
        </thead>

        <tbody>
          {data.map((salary) => (
            <tr
              key={salary.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4 font-medium">
                {salary.company}
              </td>

              <td className="p-4">
                {salary.role}
              </td>

              <td className="p-4">
                <Badge level={salary.level} />
              </td>

              <td className="p-4">
                {salary.location}
              </td>

              <td className="p-4">
                {salary.experience} yrs
              </td>

              <td className="p-4">
                {convert(salary.baseSalary)}
              </td>

              <td className="p-4">
                {salary.stock
                  ? convert(salary.stock)
                  : "—"}
              </td>

              <td className="p-4 text-lg font-bold text-sky-700">
                {convert(
                  salary.totalCompensation
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}