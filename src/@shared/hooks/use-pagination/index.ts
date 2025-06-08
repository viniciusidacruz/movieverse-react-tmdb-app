import { useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";

import type { IUsePagination } from "./types";

export function usePagination({ page, total_pages }: IUsePagination) {
  const [_, setPage] = useQueryState("page", {
    defaultValue: "",
  });

  const selectPage = useCallback((newPage: number) => {
    setPage(newPage.toString());
  }, []);

  const delta = 2;

  const pagesToShow = useMemo(() => {
    const firstPage = 1;
    const lastPage = total_pages;

    const startPage = Math.max(firstPage, page - delta);
    const endPage = Math.min(lastPage, page + delta);

    const pages: number[] = [];

    for (let currentPage = startPage; currentPage <= endPage; currentPage++) {
      pages.push(currentPage);
    }

    return pages;
  }, [page, total_pages]);

  const isFirstPage = page === 1;
  const isLastPage = page === total_pages;

  return {
    selectPage,
    isLastPage,
    pagesToShow,
    isFirstPage,
  };
}
