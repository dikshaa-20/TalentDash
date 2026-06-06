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
      <div className="rounded-3xl bg-white p-12 text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          No Records Found
        </h2>

        <p className="text-gray-500">
          Try changing your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-sm uppercase tracking-wide text-gray-600">
              <th className="p-4">
                Company
              </th>

              <th className="p-4">
                Role
              </th>

              <th className="p-4">
                Level
              </th>

              <th className="p-4">
                Location
              </th>

              <th className="p-4">
                Experience
              </th>

              <th className="p-4">
                Base Salary
              </th>

              <th className="p-4">
                Stock
              </th>

              <th className="p-4">
                Total Comp
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((salary) => (
              <tr
                key={salary.id}
                className="border-t transition hover:bg-pink-50"
              >
                <td className="p-4 font-semibold text-gray-900">
                  {salary.company}
                </td>

                <td className="p-4 text-gray-700">
                  {salary.role}
                </td>

                <td className="p-4">
                  <Badge level={salary.level} />
                </td>

                <td className="p-4 text-gray-700">
                  {salary.location}
                </td>

                <td className="p-4 text-gray-700">
                  {salary.experience} yrs
                </td>

                <td className="p-4 font-medium">
                  {convert(
                    salary.baseSalary
                  )}
                </td>

                <td className="p-4 font-medium">
                  {salary.stock
                    ? convert(
                        salary.stock
                      )
                    : "—"}
                </td>

                <td className="p-4 text-lg font-bold text-pink-600">
                  {convert(
                    salary.totalCompensation
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}