import Link from "next/link";

type Props = {
  company: string;
  companySlug: string;
  industry: string;
  founded: number;
  headquarters: string;
  records: number;
};

export default function CompanyCard({
  company,
  companySlug,
  industry,
  founded,
  headquarters,
  records,
}: Props) {
  return (
    <div className="rounded-lg border p-6 shadow-sm transition hover:shadow-lg">
      <h2 className="mb-2 text-2xl font-bold">
        {company}
      </h2>

      <p>{industry}</p>

      <p>Founded: {founded}</p>

      <p>HQ: {headquarters}</p>

      <p>{records} Salary Records</p>

      <Link
        href={`/companies/${companySlug}`}
        className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
      >
        View Details
      </Link>
    </div>
  );
}