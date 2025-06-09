import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";
import { useQueryState } from "nuqs";

import type { IMovie } from "@shared/interfaces";

import type { IFavoritesContext, IFavoritesContextProvider } from "./types";

export const FavoritesContext = createContext<IFavoritesContext | null>(null);

export const FavoritesContextProvider = ({
  children,
}: IFavoritesContextProvider) => {
  const loadStorageFavorites = () => {
    const storageFavorites = localStorage.getItem("favorites");
    return storageFavorites ? JSON.parse(storageFavorites) : [];
  };

  const [favorites, setFavorites] = useState<IMovie[]>(() =>
    loadStorageFavorites()
  );

  const [filter] = useQueryState("filter", {
    defaultValue: "title_asc",
  });

  const hasFavorites = !!favorites.length;

  const addFavorite = useCallback(
    (movie: IMovie) => {
      setFavorites((previousFavorites) => {
        const isAlreadyFavorite = previousFavorites.some(
          (fav) => fav.id === movie.id
        );

        if (isAlreadyFavorite) {
          return previousFavorites.filter((fav) => fav.id !== movie.id);
        }

        return [...previousFavorites, movie];
      });
    },
    [favorites]
  );

  const removeFavorite = useCallback(
    (id: number) => {
      setFavorites((previousFavorites) =>
        previousFavorites.filter((movie) => movie.id !== id)
      );
    },
    [favorites]
  );

  const getFilteredMovies = () => {
    switch (filter) {
      case "title_asc":
        return [...favorites].sort((a, b) => a.title.localeCompare(b.title));
      case "title_desc":
        return [...favorites].sort((a, b) => b.title.localeCompare(a.title));
      case "note_asc":
        return [...favorites].sort((a, b) => a.vote_average - b.vote_average);
      case "note_desc":
        return [...favorites].sort((a, b) => b.vote_average - a.vote_average);
      default:
        return favorites;
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const values = useMemo(
    () => ({
      favorites: getFilteredMovies(),
      addFavorite,
      hasFavorites,
      removeFavorite,
    }),
    [favorites, filter]
  );

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};
