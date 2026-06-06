"use client";

import { useEffect, useState } from "react";
import { salaryData } from "@/lib/mock-data";

export default function ComparePage() {
  const companies = [
    ...new Set(
      salaryData.map((item) => item.company)
    ),
  ];

  const [companyA, setCompanyA] =
    useState(companies[0]);

  const [companyB, setCompanyB] =
    useState(companies[1]);

  const levelsA = salaryData.filter(
    (item) => item.company === companyA
  );

  const levelsB = salaryData.filter(
    (item) => item.company === companyB
  );

  const [levelAId, setLevelAId] =
    useState(levelsA[0]?.id || "");

  const [levelBId, setLevelBId] =
    useState(levelsB[0]?.id || "");

  useEffect(() => {
    setLevelAId(levelsA[0]?.id || "");
  }, [companyA]);

  useEffect(() => {
    setLevelBId(levelsB[0]?.id || "");
  }, [companyB]);

  const recordA = salaryData.find(
    (item) => item.id === levelAId
  );

  const recordB = salaryData.find(
    (item) => item.id === levelBId
  );

  if (!recordA || !recordB) return null;

  const delta =
    recordA.totalCompensation -
    recordB.totalCompensation;

  const winner =
    delta >= 0
      ? recordA.company
      : recordB.company;

  return (
    <main className="min-h-screen bg-[#f8f5f4] px-4 py-8 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-5xl font-bold text-gray-900">
          Compare Salaries
        </h1>

        <p className="mb-8 text-gray-600">
          Compare compensation packages
          across companies and levels.
        </p>

        {/* Selectors */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold">
              Company A
            </h2>

            <select
              value={companyA}
              onChange={(e) =>
                setCompanyA(
                  e.target.value
                )
              }
              className="mb-4 w-full rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              {companies.map(
                (company) => (
                  <option
                    key={company}
                    value={company}
                  >
                    {company}
                  </option>
                )
              )}
            </select>

            <select
              value={levelAId}
              onChange={(e) =>
                setLevelAId(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              {levelsA.map(
                (record) => (
                  <option
                    key={record.id}
                    value={record.id}
                  >
                    {record.level} •{" "}
                    {record.role}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold">
              Company B
            </h2>

            <select
              value={companyB}
              onChange={(e) =>
                setCompanyB(
                  e.target.value
                )
              }
              className="mb-4 w-full rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              {companies.map(
                (company) => (
                  <option
                    key={company}
                    value={company}
                  >
                    {company}
                  </option>
                )
              )}
            </select>

            <select
              value={levelBId}
              onChange={(e) =>
                setLevelBId(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              {levelsB.map(
                (record) => (
                  <option
                    key={record.id}
                    value={record.id}
                  >
                    {record.level} •{" "}
                    {record.role}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Winner Card */}
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-bold">
            Comparison Result
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">
                Difference
              </p>

              <p
                className={`text-3xl font-bold ${
                  delta >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₹
                {Math.abs(
                  delta
                ).toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Winner
              </p>

              <span className="inline-block rounded-full bg-pink-500 px-5 py-2 font-semibold text-white">
                🏆 {winner}
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-md">
          <table className="w-full">
            <tbody>
              <tr className="bg-gray-100 font-semibold">
                <td className="p-4">
                  Field
                </td>
                <td className="p-4">
                  {recordA.company}
                </td>
                <td className="p-4">
                  {recordB.company}
                </td>
              </tr>

              {[
                [
                  "Role",
                  recordA.role,
                  recordB.role,
                ],
                [
                  "Level",
                  recordA.level,
                  recordB.level,
                ],
                [
                  "Location",
                  recordA.location,
                  recordB.location,
                ],
                [
                  "Experience",
                  `${recordA.experience} yrs`,
                  `${recordB.experience} yrs`,
                ],
                [
                  "Base Salary",
                  `₹${recordA.baseSalary.toLocaleString(
                    "en-IN"
                  )}`,
                  `₹${recordB.baseSalary.toLocaleString(
                    "en-IN"
                  )}`,
                ],
                [
                  "Bonus",
                  recordA.bonus
                    ? `₹${recordA.bonus.toLocaleString(
                        "en-IN"
                      )}`
                    : "—",
                  recordB.bonus
                    ? `₹${recordB.bonus.toLocaleString(
                        "en-IN"
                      )}`
                    : "—",
                ],
                [
                  "Stock",
                  recordA.stock
                    ? `₹${recordA.stock.toLocaleString(
                        "en-IN"
                      )}`
                    : "—",
                  recordB.stock
                    ? `₹${recordB.stock.toLocaleString(
                        "en-IN"
                      )}`
                    : "—",
                ],
              ].map((row) => (
                <tr
                  key={row[0]}
                  className="border-t hover:bg-pink-50"
                >
                  <td className="p-4 font-medium">
                    {row[0]}
                  </td>

                  <td className="p-4">
                    {row[1]}
                  </td>

                  <td className="p-4">
                    {row[2]}
                  </td>
                </tr>
              ))}

              <tr className="border-t bg-pink-50">
                <td className="p-4 font-bold">
                  Total Compensation
                </td>

                <td className="p-4 text-xl font-bold text-pink-600">
                  ₹
                  {recordA.totalCompensation.toLocaleString(
                    "en-IN"
                  )}
                </td>

                <td className="p-4 text-xl font-bold text-pink-600">
                  ₹
                  {recordB.totalCompensation.toLocaleString(
                    "en-IN"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}