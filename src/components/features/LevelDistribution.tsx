type Props = {
  records: {
    level: string;
  }[];
};

export default function LevelDistribution({
  records,
}: Props) {
  const counts: Record<string, number> = {};

  records.forEach((item) => {
    counts[item.level] =
      (counts[item.level] || 0) + 1;
  });

  const total = records.length;

  return (
    <div className="space-y-4">
      {Object.entries(counts).map(
        ([level, count]) => {
          const percentage =
            (count / total) * 100;

          return (
            <div key={level}>
              <div className="mb-1 flex justify-between">
                <span>{level}</span>

                <span>
                  {percentage.toFixed(0)}%
                </span>
              </div>

              <div className="h-3 rounded bg-gray-200">
                <div
                  className="h-3 rounded bg-blue-600"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}