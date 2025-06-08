import { useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";

import { MovieService } from "@shared/services";

export function usePopularMovies() {
  const [page] = useQueryState("page");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-movies", page],
    refetchOnWindowFocus: false,
    queryFn: () => MovieService.create().getAll({ page: page ?? "1" }),
  });

  const hasMovies = !!data?.results.length;

  return {
    data,
    isError,
    hasMovies,
    isLoading,
  };
}
