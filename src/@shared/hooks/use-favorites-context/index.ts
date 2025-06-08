import { useContext } from "react";

import { FavoritesContext } from "@shared/contexts";

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);

  if (!context) throw new Error("useFavoritesContext need of FavoriteProvider");

  return context;
}
