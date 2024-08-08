"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Pagination = ({ numberOfTherapists }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 4;

  const prevBtnActive = parseInt(page) > 1 ? true : false;
  const nextBtnActive =
    ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE >= numberOfTherapists
      ? true
      : false;
  const handleChangePage = (type) => {
    if (type === "prev") {
      console.log("Previous button clicked");
      params.set("page", parseInt(page) - 1);
    } else {
      console.log("NumberOfTherapists: ", numberOfTherapists);
      console.log("Next button clicked");
      params.set("page", parseInt(page) + 1);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex gap-4">
      <button
        className={`w-24 py-1 hover:bg-gray-50  text-center rounded-sm bg-white border border-green-600 text-green-600 ${
          prevBtnActive ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!prevBtnActive}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={`w-24 py-1 hover:bg-gray-50 text-center rounded-sm bg-white border border-green-600 text-green-600 ${
          nextBtnActive ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={nextBtnActive}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
