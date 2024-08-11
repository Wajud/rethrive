"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchTherapist = ({ flag, criteria }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const filterTherapist = (e) => {
    console.log("filter therapist");
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      e.target.value.length >= 2 && params.set("q", e.target.value);

      console.log(e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={`SEARCH...`}
        className="block w-full px-2 py-[5px] rounded-full border border-green-200 placeholder:text-xs outline-none"
        name={criteria}
        onChange={filterTherapist}
      />
    </div>
  );
};

export default SearchTherapist;
