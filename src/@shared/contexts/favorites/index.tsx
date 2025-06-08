import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";

import type { Movie } from "@shared/interfaces";

import type { IFavoritesContext, IFavoritesContextProvider } from "./types";

export const FavoritesContext = createContext<IFavoritesContext | null>(null);

export const FavoritesContextProvider = ({
  children,
}: IFavoritesContextProvider) => {
  const loadStorageFavorites = () => {
    const storageFavorites = localStorage.getItem("favorites");
    return storageFavorites ? JSON.parse(storageFavorites) : [];
  };

  const [favorites, setFavorites] = useState<Movie[]>(() =>
    loadStorageFavorites()
  );

  const addFavorite = useCallback(
    (movie: Movie) => {
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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const values = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};
