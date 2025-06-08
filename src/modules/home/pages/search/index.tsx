import { Fragment } from "react";

import { MovieList } from "@home_module/components";
import { useFilteredMovies } from "@home_module/hooks";

export const SearchPage = () => {
  const { data, hasMovies, isError, isLoading, query, hasQuery } =
    useFilteredMovies();

  return (
    <Fragment>
      {hasQuery && (
        <div className="flex flex-col mb-8">
          <h2 className="font-bold text-3xl">
            Resultados para: <span className="text-yellow-500">"{query}"</span>
          </h2>

          <p>Encontrados {data?.total_results ?? 0} filmes</p>
        </div>
      )}

      <MovieList
        data={data}
        isError={isError}
        isLoading={isLoading}
        hasMovies={hasMovies}
      />
    </Fragment>
  );
};
