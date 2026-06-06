type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className={`rounded-xl px-5 py-2 font-medium shadow transition ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "bg-white text-gray-800 hover:bg-pink-50"
        }`}
      >
        ← Previous
      </button>

      <div className="rounded-xl bg-white px-6 py-2 shadow">
        <span className="font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <button
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={
          currentPage === totalPages
        }
        className={`rounded-xl px-5 py-2 font-medium shadow transition ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "bg-white text-gray-800 hover:bg-pink-50"
        }`}
      >
        Next →
      </button>
    </div>
  );
}