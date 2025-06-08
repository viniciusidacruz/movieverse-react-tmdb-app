import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { AppRoutes } from "@shared/config";

export const App = () => (
  <NuqsAdapter>
    <AppRoutes />
  </NuqsAdapter>
);
