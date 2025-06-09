import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";

import { FavoritesContextProvider } from "@shared/contexts";

import { MovieListFavorites } from ".";
import { NuqsAdapter } from "nuqs/adapters/react";

const sut = (
  <BrowserRouter>
    <NuqsAdapter>
      <FavoritesContextProvider>
        <MovieListFavorites />
      </FavoritesContextProvider>
    </NuqsAdapter>
  </BrowserRouter>
);

describe("MovieListFavorites", () => {
  it("Should render empty state", () => {
    render(sut);

    expect(
      screen.getByText("Nenhum filme favorito ainda.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Comece explorando filmes populares e adicione seus favoritos!"
      )
    ).toBeInTheDocument();
  });
});
