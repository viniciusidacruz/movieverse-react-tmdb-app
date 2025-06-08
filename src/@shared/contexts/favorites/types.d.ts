import type { Movie } from "@/@shared/interfaces";
import type { ReactNode } from "react";

export interface IFavoritesContextProvider {
  children: ReactNode;
}

export interface IFavoritesContext {
  favorites: Movie[];
  hasFavorites: boolean;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
}
