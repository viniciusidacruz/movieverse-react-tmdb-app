import { Route, Routes } from "react-router";

import { ROUTES } from "@shared/constants";
import { LayoutNotFound, LayoutPage } from "@shared/components";
import { DetailsPage } from "@movie_module/pages";
import { FavoritesPage } from "@favorites_module/pages";
import { SearchPage, HomePage } from "@home_module/pages";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LayoutPage />}>
      <Route path={ROUTES.home.path} element={<HomePage />} />
      <Route path={ROUTES.favorites.path} element={<FavoritesPage />} />
      <Route path={ROUTES.search.path} element={<SearchPage />} />
      <Route path="*" element={<LayoutNotFound />} />

      <Route
        path={`${ROUTES.details.path}/:movieId`}
        element={<DetailsPage />}
      />
    </Route>
  </Routes>
);
