import { Fragment } from "react";
import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { ROUTES } from "@shared/constants";
import { buildImageURL } from "@shared/utils";
import { useFavoritesContext } from "@shared/hooks";
import { Badge, Button, Card, Pagination, State } from "@shared/components";

import type { IMovieList } from "./types";

export const MovieList = ({
  data,
  hasMovies,
  isError,
  isLoading,
}: IMovieList) => {
  const navigate = useNavigate();

  const { favorites, addFavorite } = useFavoritesContext();

  if (isLoading) {
    return (
      <State.Root className="mt-10">
        <State.Title>Aguarde um momento!</State.Title>
        <State.Text>Estamos buscando os filmes populares para você.</State.Text>
      </State.Root>
    );
  }

  if (!isLoading && !hasMovies && !isError) {
    return (
      <State.Root className="mt-10">
        <State.Title>Ops! essa lista está vazia.</State.Title>
        <State.Text>
          Parece que nada foi encontrado, faça outra pesquisa.
        </State.Text>
      </State.Root>
    );
  }

  if (isError) {
    return (
      <State.Root className="mt-10 max-w-96 text-center mx-auto">
        <State.Title>Ops! algo deu erro.</State.Title>
        <State.Text>Houve algum problema no servidor.</State.Text>
        <Button
          type="button"
          onClick={() => navigate(0)}
          className="bg-blue-500 w-full mt-6"
        >
          Tente novamente
        </Button>
      </State.Root>
    );
  }

  return (
    <Fragment>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.results.map((movie) => {
          const isFavorite = favorites.find(
            (favorite) => favorite.id === movie.id
          );

          return (
            <Card.Root className="pb-4" key={movie.id}>
              <Card.Icon onClick={() => addFavorite(movie)}>
                <Heart
                  fill={isFavorite ? "red" : ""}
                  className="text-red-600"
                  size={14}
                />
              </Card.Icon>
              <Card.Image src={buildImageURL(movie.poster_path)} />

              <div className="px-4 flex flex-col gap-4">
                <Link to={`${ROUTES.details.path}/${movie.id}`}>
                  <Card.Title className="line-clamp-1">
                    {movie.title}
                  </Card.Title>
                </Link>

                <Badge className="bg-amber-500 text-slate-950">
                  {movie.vote_average}
                </Badge>
              </div>
            </Card.Root>
          );
        })}
      </div>

      <Pagination
        page={data?.page || 1}
        total_pages={data?.total_pages || 1}
        total_results={data?.total_results || 0}
      />
    </Fragment>
  );
};
