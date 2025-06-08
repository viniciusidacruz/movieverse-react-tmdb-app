import { Fragment } from "react";
import { Trash } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { ROUTES } from "@shared/constants";
import { buildImageURL } from "@shared/utils";
import { useFavoritesContext } from "@shared/hooks";
import { Badge, Button, Card, State } from "@shared/components";

export const MovieListFavorites = () => {
  const navigate = useNavigate();

  const { favorites, hasFavorites, removeFavorite } = useFavoritesContext();

  if (!hasFavorites) {
    return (
      <State.Root className="mt-10 max-w-96 text-center mx-auto">
        <State.Title>Nenhum filme favorito ainda.</State.Title>
        <State.Text>
          Comece explorando filmes populares e adicione seus favoritos!
        </State.Text>
        <Button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-blue-500 w-full mt-6"
        >
          Voltar para tela anterior
        </Button>
      </State.Root>
    );
  }

  return (
    <Fragment>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {favorites.map((movie) => {
          return (
            <Card.Root className="pb-4" key={movie.id}>
              <Card.Icon onClick={() => removeFavorite(movie.id)}>
                <Trash className="text-white" size={14} />
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
    </Fragment>
  );
};
