import { useQuery } from "@tanstack/react-query";

import { MovieService } from "@shared/services";

export function useMovieById(movieId: string | undefined) {
  const { data, isLoading } = useQuery({
    enabled: !!movieId,
    queryKey: ["popular-movies", movieId],
    refetchOnWindowFocus: false,
    queryFn: () => MovieService.create().getById(movieId!),
  });

  return {
    data,
    isLoading,
  };
}
