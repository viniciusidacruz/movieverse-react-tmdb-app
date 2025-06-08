import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { ROUTES } from "@shared/constants";
import { buildImageURL } from "@shared/utils";
import { usePopularMovies } from "@home_module/hooks";
import { Badge, Button, Card, State } from "@shared/components";

export const ListDefault = () => {
  const navigate = useNavigate();

  const { data, hasMovies, isLoading, isError } = usePopularMovies();

  if (isLoading) {
    return (
      <State.Root className="mt-10">
        <State.Title>Aguarde um momento!</State.Title>
        <State.Text>Estamos buscando os filmes populares para você.</State.Text>
      </State.Root>
    );
  }

  if (!isLoading && !hasMovies) {
    return (
      <State.Root className="mt-10">
        <State.Title>Ops! filmes populares em falta.</State.Title>
        <State.Text>Não foi encontrado filmes populares no momento</State.Text>
      </State.Root>
    );
  }

  if (isError) {
    return (
      <State.Root className="mt-10 max-w-96 text-center mx-auto">
        <State.Title>Ops! filmes populares em falta.</State.Title>
        <State.Text>Não foi encontrado filmes populares no momento</State.Text>
        <Button
          type="button"
          onClick={() => navigate(0)}
          className="bg-blue-500 w-full mt-6"
        >
          Tentar novamente
        </Button>
      </State.Root>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.results.map((movie) => (
        <Card.Root className="pb-4" key={movie.id}>
          <Card.Icon>
            <Heart fill="" className="text-red-600" size={14} />
          </Card.Icon>
          <Card.Image src={buildImageURL(movie.poster_path)} />

          <div className="px-4 flex flex-col gap-4">
            <Link to={`${ROUTES.details.path}/${movie.id}`}>
              <Card.Title className="line-clamp-1">{movie.title}</Card.Title>
            </Link>

            <Badge className="bg-amber-500 text-slate-950">
              {movie.vote_average}
            </Badge>
          </div>
        </Card.Root>
      ))}
    </div>
  );
};
