import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { ROUTES } from "@shared/constants";
import { useDebounce } from "@shared/hooks";

import type { TSearchField } from "./types";

export const SearchField = ({ ...props }: TSearchField) => {
  const [query, setQuery] = useQueryState("query", {
    defaultValue: "",
  });
  const [inputValue, setInputValue] = useState(query ?? "");

  const navigate = useNavigate();
  const debouncedValue = useDebounce(inputValue, 500);

  const pathname = useLocation().pathname;
  const isSearchPage = pathname === ROUTES.search.path;
  const isHomePage = pathname === ROUTES.home.path;

  useEffect(() => {
    const hasDebounceValue = !!debouncedValue.length;

    if (isHomePage) {
      setQuery("");
      setInputValue("");
    }

    if (isSearchPage && hasDebounceValue) {
      setQuery(debouncedValue);
      return;
    }

    if (hasDebounceValue) {
      navigate(`/search?query=${encodeURIComponent(debouncedValue)}`);
      return;
    }
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
