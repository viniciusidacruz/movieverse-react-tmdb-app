import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";

import { FavoritesContextProvider } from "@shared/contexts";

import { MovieListFavorites } from ".";

const sut = (
  <BrowserRouter>
    <FavoritesContextProvider>
      <MovieListFavorites />
    </FavoritesContextProvider>
  </BrowserRouter>
);

describe("MovieListFavorites", () => {
  it("Should render empty state", () => {
    render(sut);

    expect(screen.getByText("Ops! a lista está vazia.")).toBeInTheDocument();
    expect(
      screen.getByText("Não tem nenhum filme adicionado como favorito.")
    ).toBeInTheDocument();
  });
});
