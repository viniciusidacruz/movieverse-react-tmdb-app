import { useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";

import { MovieService } from "@shared/services";

export function useFilteredMovies() {
  const [page] = useQueryState("page");
  const [query] = useQueryState("query");

  const { data, isLoading, isError } = useQuery({
    enabled: !!query,
    queryKey: ["filtered-movies", page, query],
    refetchOnWindowFocus: false,
    queryFn: () =>
      MovieService.create().getAllBySearch({
        page: page ?? "1",
        query: query ?? "",
      }),
  });

  const hasMovies = !!data?.results.length;
  const hasQuery = !!query?.length;

  return {
    data,
    query,
    isError,
    hasQuery,
    hasMovies,
    isLoading,
  };
}
