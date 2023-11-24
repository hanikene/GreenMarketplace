import { useMemo } from "react";
import useSearchParams from "../hooks/useSearchParams";
import { SortTypes } from "../types";
import { sortScheme } from "../validator";

const SortButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParamVal = searchParams.get("sort");

  const sortParam = useMemo(() => {
    const parsedValue = sortScheme.safeParse(sortParamVal);
    if (parsedValue.success) return parsedValue.data;
    return "NONE" as SortTypes;
  }, [sortParamVal]);

  const handleClick = () => {
    if (sortParam === "NONE") {
      searchParams.set("sort", "ASC" as SortTypes);
      setSearchParams(searchParams);
    } else if (sortParam === "ASC") {
      searchParams.set("sort", "DESC" as SortTypes);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("sort");
      setSearchParams(searchParams);
    }
  };

  return (
    <button
      className="pr-5 pl-3 h-full flex items-center cursor-pointer max-w-xs"
      onClick={handleClick}
    >
      {sortParam} {/* should be replaced with icons */}
    </button>
  );
};

export default SortButton;
