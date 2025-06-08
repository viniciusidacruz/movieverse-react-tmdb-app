import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { QueryClientProvider } from "@tanstack/react-query";

import { AppRoutes, queryClient } from "@shared/config";
import { FavoritesContextProvider } from "@shared/contexts";

export const App = () => (
  <NuqsAdapter>
    <QueryClientProvider client={queryClient}>
      <FavoritesContextProvider>
        <AppRoutes />
      </FavoritesContextProvider>
    </QueryClientProvider>
  </NuqsAdapter>
);
