"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

function SearchInput({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex items-center shadow-xl gap-4 p-4 rounded-lg max-w-[500px]">
      <MdSearch />
      <input
        type="text"
        onChange={handleSearch}
        placeholder={placeholder}
        className="outline-none border-none text-[var(--textSoft)] bg-transparent placeholder:text-xs"
      />
    </div>
  );
}

export default SearchInput;
