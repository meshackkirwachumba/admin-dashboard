"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="p-3 flex justify-between">
      <button
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
        className="py-1.5 px-3 disabled:cursor-not-allowed disabled:bg-gray-900 bg-gray-300 text-xs text-gray-500"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
        className="py-1.5 px-3 disabled:cursor-not-allowed disabled:bg-gray-900 bg-gray-300 text-xs text-gray-500"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
