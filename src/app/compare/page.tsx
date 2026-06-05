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

  if (!recordA || !recordB) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">
          Compare Salaries
        </h1>
      </main>
    );
  }

  const delta =
    recordA.totalCompensation -
    recordB.totalCompensation;

  const winner =
    delta >= 0
      ? recordA.company
      : recordB.company;

  return (
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Compare Salaries
      </h1>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">
            Company A
          </label>

          <select
            value={companyA}
            onChange={(e) =>
              setCompanyA(
                e.target.value
              )
            }
            className="mb-3 w-full rounded border p-3"
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
            className="w-full rounded border p-3"
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

        <div>
          <label className="mb-2 block font-semibold">
            Company B
          </label>

          <select
            value={companyB}
            onChange={(e) =>
              setCompanyB(
                e.target.value
              )
            }
            className="mb-3 w-full rounded border p-3"
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
            className="w-full rounded border p-3"
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

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full">
          <tbody>
            <tr className="border-b bg-slate-100">
              <td className="p-4 font-bold">
                Field
              </td>

              <td className="p-4 font-bold">
                {recordA.company}
              </td>

              <td className="p-4 font-bold">
                {recordB.company}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Role
              </td>

              <td className="p-4">
                {recordA.role}
              </td>

              <td className="p-4">
                {recordB.role}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Level
              </td>

              <td className="p-4">
                {recordA.level}
              </td>

              <td className="p-4">
                {recordB.level}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Location
              </td>

              <td className="p-4">
                {recordA.location}
              </td>

              <td className="p-4">
                {recordB.location}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Experience
              </td>

              <td className="p-4">
                {recordA.experience} yrs
              </td>

              <td className="p-4">
                {recordB.experience} yrs
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Base Salary
              </td>

              <td className="p-4">
                ₹
                {recordA.baseSalary.toLocaleString(
                  "en-IN"
                )}
              </td>

              <td className="p-4">
                ₹
                {recordB.baseSalary.toLocaleString(
                  "en-IN"
                )}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Bonus
              </td>

              <td className="p-4">
                {recordA.bonus === 0
                  ? "—"
                  : `₹${recordA.bonus.toLocaleString(
                      "en-IN"
                    )}`}
              </td>

              <td className="p-4">
                {recordB.bonus === 0
                  ? "—"
                  : `₹${recordB.bonus.toLocaleString(
                      "en-IN"
                    )}`}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Stock
              </td>

              <td className="p-4">
                {recordA.stock === 0
                  ? "—"
                  : `₹${recordA.stock.toLocaleString(
                      "en-IN"
                    )}`}
              </td>

              <td className="p-4">
                {recordB.stock === 0
                  ? "—"
                  : `₹${recordB.stock.toLocaleString(
                      "en-IN"
                    )}`}
              </td>
            </tr>

            <tr className="bg-slate-50">
              <td className="p-4 font-bold">
                Total Compensation
              </td>

              <td className="p-4 text-lg font-bold text-sky-700">
                ₹
                {recordA.totalCompensation.toLocaleString(
                  "en-IN"
                )}
              </td>

              <td className="p-4 text-lg font-bold text-sky-700">
                ₹
                {recordB.totalCompensation.toLocaleString(
                  "en-IN"
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-lg border p-6">
        <h2 className="mb-3 text-xl font-bold">
          Comparison Result
        </h2>

        <p
          className={`text-xl font-bold ${
            delta >= 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          Delta: ₹
          {Math.abs(delta).toLocaleString(
            "en-IN"
          )}
        </p>

        <div className="mt-4 inline-block rounded bg-sky-700 px-4 py-2 text-white">
          Higher TC: {winner}
        </div>
      </div>
    </main>
  );
}