export default function SalarySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Software Engineer Salaries",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}