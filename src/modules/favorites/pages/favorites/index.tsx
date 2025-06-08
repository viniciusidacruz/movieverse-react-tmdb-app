import { Fragment } from "react";
import { useQueryState } from "nuqs";

import { Select } from "@shared/components";
import { MovieListFavorites } from "@favorites_module/components";

export const FavoritesPage = () => {
  const [filter, setFilter] = useQueryState("filter", {
    defaultValue: "title_asc",
  });

  return (
    <Fragment>
      <div className="flex flex-col gap-8 border-b border-slate-700 py-8 mb-4">
        <h1 className="font-bold text-4xl text-slate-200">
          Meus Filmes Favoritos
        </h1>

        <div className="flex items-center gap-2">
          Ordenar por:
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { label: "Título (A-Z)", value: "title_asc" },
              { label: "Título (Z-A)", value: "title_desc" },
              { label: "Nota maior", value: "note_desc" },
              { label: "Nota menor", value: "note_asc" },
            ]}
          />
        </div>
      </div>

      <MovieListFavorites />
    </Fragment>
  );
};
