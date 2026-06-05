import { notFound } from "next/navigation";

import SalaryTable from "@/components/features/SalaryTable";
import LevelDistribution from "../../../components/features/LevelDistribution";

import { salaryData } from "@/lib/mock-data";
import { getMedian } from "@/lib/filters";

export async function generateStaticParams() {
  const slugs = [
    ...new Set(
      salaryData.map((item) => item.companySlug)
    ),
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const companyRecords = salaryData.filter(
    (item) => item.companySlug === slug
  );

  if (companyRecords.length === 0) {
    notFound();
  }

  const company = companyRecords[0];

  const totalComps = companyRecords.map(
    (item) => item.totalCompensation
  );

  const medianTC = getMedian(totalComps);

  const minTC = Math.min(...totalComps);

  const maxTC = Math.max(...totalComps);

  const recordCount = companyRecords.length;

  return (
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-6 text-4xl font-bold">
        {company.company}
      </h1>

      <div className="mb-6 rounded-lg border p-4">
        <p>
          <strong>Industry:</strong>{" "}
          {company.industry}
        </p>

        <p>
          <strong>Founded:</strong>{" "}
          {company.founded}
        </p>

        <p>
          <strong>Headquarters:</strong>{" "}
          {company.headquarters}
        </p>

        <p>
          <strong>Headcount:</strong>{" "}
          {company.headcount}
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-4">
          <h2 className="text-sm text-gray-500">
            Median TC
          </h2>

          <p className="text-2xl font-bold text-sky-700">
            ₹
            {medianTC.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-sm text-gray-500">
            Min TC
          </h2>

          <p className="text-2xl font-bold">
            ₹
            {minTC.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-sm text-gray-500">
            Max TC
          </h2>

          <p className="text-2xl font-bold">
            ₹
            {maxTC.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-sm text-gray-500">
            Records
          </h2>

          <p className="text-2xl font-bold">
            {recordCount}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">
          Level Distribution
        </h2>

        <LevelDistribution
          records={companyRecords}
        />
      </div>

      <div className="mb-4">
        <a
          href={`/compare?c1=${company.companySlug}`}
          className="inline-block rounded bg-sky-700 px-4 py-2 text-white"
        >
          Compare
        </a>
      </div>

      <SalaryTable
        data={companyRecords}
        currency="INR"
      />
    </main>
  );
}