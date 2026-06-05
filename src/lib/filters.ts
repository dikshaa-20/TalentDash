export function getMedian(values: number[]) {
  const sorted = [...values].sort(
    (a, b) => a - b
  );

  const middle = Math.floor(
    sorted.length / 2
  );

  return sorted[middle];
}