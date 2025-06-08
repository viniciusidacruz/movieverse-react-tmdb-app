import { usePagination } from "@shared/hooks";
import { cn, formatToNumber } from "@shared/utils";

import type { IPagination } from "./types";

export const Pagination = ({
  page = 1,
  total_pages = 1,
  total_results = 0,
}: IPagination) => {
  const { pagesToShow, selectPage, isFirstPage, isLastPage } = usePagination({
    page,
    total_pages,
  });

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <p className="text-sm text-gray-400">
        Página {page} de {formatToNumber(total_pages)} —{" "}
        {formatToNumber(total_results)} resultados
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => selectPage(1)}
          disabled={isFirstPage}
          className={cn(
            "px-3 py-1 rounded-md text-sm text-white bg-blue-500 cursor-pointer",
            isFirstPage
              ? "opacity-50 cursor-not-allowed"
              : "hover:brightness-75"
          )}
        >
          Primeira
        </button>

        <button
          onClick={() => selectPage(page - 1)}
          disabled={isFirstPage}
          className={cn(
            "px-3 py-1 rounded-md text-sm text-white bg-blue-500 cursor-pointer",
            isFirstPage
              ? "opacity-50 cursor-not-allowed"
              : "hover:brightness-75"
          )}
        >
          Anterior
        </button>

        {pagesToShow.map((p) => (
          <button
            key={p}
            onClick={() => selectPage(p)}
            className={cn(
              "px-3 py-1 rounded-md text-sm cursor-pointer",
              p === page
                ? "bg-blue-500 text-white"
                : "text-white hover:bg-gray-100 hover:text-gray-700"
            )}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => selectPage(page + 1)}
          disabled={isLastPage}
          className={cn(
            "px-3 py-1 rounded-md text-sm border cursor-pointer",
            isLastPage
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "hover:bg-blue-500 border-none"
          )}
        >
          Próxima
        </button>

        <button
          onClick={() => selectPage(total_pages)}
          disabled={isLastPage}
          className={cn(
            "px-3 py-1 rounded-md text-sm border cursor-pointer",
            isLastPage
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "hover:bg-blue-500 border-none"
          )}
        >
          Última
        </button>
      </div>
    </div>
  );
};
