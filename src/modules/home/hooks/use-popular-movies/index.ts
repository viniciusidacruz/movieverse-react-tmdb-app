import { useQuery } from "@tanstack/react-query";

import { MovieService } from "@shared/services";

export function usePopularMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-movies"],
    refetchOnWindowFocus: false,
    queryFn: () => MovieService.create().getAll({ page: "1" }),
  });

  const hasMovies = !!data?.results.length;

  return {
    data,
    isError,
    hasMovies,
    isLoading,
  };
}
