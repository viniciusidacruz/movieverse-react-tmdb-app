import { useParams } from "react-router";

import { Badge, State } from "@shared/components";
import { useMovieById } from "@movie_module/hooks";
import { buildImageURL, formatDate } from "@shared/utils";

export const DetailsPage = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useMovieById(movieId);

  if (isLoading) {
    return (
      <State.Root className="mt-10">
        <State.Title>Aguarde um momento!</State.Title>
        <State.Text>
          Estamos buscando os detalhes do filme para você.
        </State.Text>
      </State.Root>
    );
  }

  return (
    <div className="mt-10 gap-8 flex flex-col md:flex-row">
      <img
        className="w-full md:w-1/2 rounded-xl"
        src={buildImageURL(data?.backdrop_path)}
        loading="lazy"
      />

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-slate-200">
          {data?.title ?? "Desconhecido"}
        </h1>

        <div className="flex items-center gap-4 flex-wrap">
          {data?.genres.map((genre) => (
            <Badge className="bg-blue-500" key={genre.id}>
              {genre.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-bold text-slate-500">
            Data de lançamento: {formatDate(data?.release_date)}
          </span>
          <span className="font-bold text-slate-500 flex items-center gap-1">
            Nota TMDB:{" "}
            <Badge className="bg-amber-500 text-slate-950">
              {data?.vote_average}
            </Badge>
          </span>

          <div className="mt-4">
            <h2 className="font-bold text-slate-300 text-lg mb-1">Sinopse</h2>
            <p>{data?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
