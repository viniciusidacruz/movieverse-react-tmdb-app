import { MemoryRouter } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { FavoritesContextProvider } from "@shared/contexts";

import { MovieList } from ".";
import type { IMovieList } from "./types";

const renderWithProviders = (props: IMovieList) => {
  return render(
    <MemoryRouter>
      <NuqsAdapter>
        <FavoritesContextProvider>
          <MovieList {...props} />
        </FavoritesContextProvider>
      </NuqsAdapter>
    </MemoryRouter>
  );
};

describe("MovieList", () => {
  it("Should render loading state", () => {
    renderWithProviders({
      data: undefined,
      hasMovies: false,
      isLoading: true,
      isError: false,
    });

    expect(screen.getByText("Aguarde um momento!")).toBeInTheDocument();
    expect(
      screen.getByText("Estamos buscando os filmes populares para você.")
    ).toBeInTheDocument();
  });

  it("Should render empty state", () => {
    renderWithProviders({
      data: {
        results: [],
        page: 1,
        total_pages: 1,
        total_results: 0,
      },
      hasMovies: false,
      isLoading: false,
      isError: false,
    });

    expect(screen.getByText("Ops! essa lista está vazia.")).toBeInTheDocument();
    expect(
      screen.getByText("Parece que nada foi encontrado, faça outra pesquisa.")
    ).toBeInTheDocument();
  });

  it("Should render error state", () => {
    renderWithProviders({
      data: undefined,
      hasMovies: false,
      isLoading: false,
      isError: true,
    });

    expect(screen.getByText("Ops! algo deu erro.")).toBeInTheDocument();
    expect(
      screen.getByText("Houve algum problema no servidor.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Tente novamente" })
    ).toBeInTheDocument();
  });

  it("Should render list of movies", () => {
    renderWithProviders({
      data: {
        results: [
          {
            adult: false,
            backdrop_path: "/a3F9cXjRH488qcOqFmFZwqawBMU.jpg",
            genre_ids: [16, 878, 28],
            id: 1376434,
            original_language: "en",
            original_title: "Predator: Killer of Killers",
            overview:
              "This original animated anthology follows three of the fiercest warriors in human history...",
            popularity: 708.7155,
            poster_path: "/lIBtgpfiB92xNoB3Wa2ZtRtcyYP.jpg",
            release_date: "2025-06-05",
            title: "Predator: Killer of Killers",
            video: false,
            vote_average: 8,
            vote_count: 143,
          },
        ],
        page: 1,
        total_pages: 1,
        total_results: 1,
      },
      hasMovies: true,
      isLoading: false,
      isError: false,
    });

    expect(screen.getByText("Predator: Killer of Killers")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
  });
});
