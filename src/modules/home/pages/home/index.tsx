import { usePopularMovies } from "@home_module/hooks";
import { MovieList } from "@home_module/components";

export const HomePage = () => {
  const { data, hasMovies, isError, isLoading } = usePopularMovies();

  return (
    <MovieList
      data={data}
      isError={isError}
      isLoading={isLoading}
      hasMovies={hasMovies}
    />
  );
};
