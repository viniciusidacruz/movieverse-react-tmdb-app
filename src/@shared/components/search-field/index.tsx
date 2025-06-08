import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";

import { useDebounce } from "@shared/hooks";

import type { TSearchField } from "./types";

export const SearchField = ({ ...props }: TSearchField) => {
  const [query, setQuery] = useQueryState("query", {
    defaultValue: "",
  });
  const [inputValue, setInputValue] = useState(query ?? "");

  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setQuery(debouncedValue);
  }, [debouncedValue, setQuery]);

  return (
    <div
      className="flex items-center gap-2 h-14 px-4 bg-slate-700 rounded-full w-full md:max-w-1/3"
      {...props}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar filmes"
        className="border-none outline-none w-full"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
