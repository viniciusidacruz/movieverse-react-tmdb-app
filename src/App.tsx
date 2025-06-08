import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { QueryClientProvider } from "@tanstack/react-query";

import { AppRoutes, queryClient } from "@shared/config";

export const App = () => (
  <NuqsAdapter>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </NuqsAdapter>
);
