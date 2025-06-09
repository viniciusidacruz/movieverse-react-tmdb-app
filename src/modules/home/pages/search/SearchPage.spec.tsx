import { BrowserRouter } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, it, expect, vi, beforeEach } from "vitest";

import * as hooks from "@home_module/hooks";
import { FavoritesContextProvider } from "@shared/contexts";

import { SearchPage } from ".";

const queryClient = new QueryClient();

const sut = (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <FavoritesContextProvider>
          <SearchPage />
        </FavoritesContextProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  </BrowserRouter>
);

describe("SearchPage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("Should be return loading state", () => {
    vi.spyOn(hooks, "useFilteredMovies").mockReturnValue({
      data: undefined,
      hasMovies: false,
      isLoading: true,
      isError: false,
      hasQuery: false,
      query: "",
    });

    render(sut);

    expect(screen.getByText("Aguarde um momento!")).toBeInTheDocument();
    expect(
      screen.getByText("Estamos buscando os filmes populares para você.")
    ).toBeInTheDocument();
  });

  it("Should be return empty state", () => {
    vi.spyOn(hooks, "useFilteredMovies").mockReturnValue({
      data: {
        results: [],
        page: 1,
        total_pages: 1,
        total_results: 0,
      },
      hasMovies: false,
      isLoading: false,
      isError: false,
      hasQuery: false,
      query: "",
    });

    render(sut);

    expect(screen.getByText("Ops! essa lista está vazia.")).toBeInTheDocument();
    expect(
      screen.getByText("Parece que nada foi encontrado, faça outra pesquisa.")
    ).toBeInTheDocument();
  });

  it("Should be return error state", () => {
    vi.spyOn(hooks, "useFilteredMovies").mockReturnValue({
      data: undefined,
      hasMovies: false,
      isLoading: false,
      isError: true,
      hasQuery: false,
      query: "",
    });

    render(sut);

    expect(screen.getByText("Ops! algo deu erro.")).toBeInTheDocument();
    expect(
      screen.getByText("Houve algum problema no servidor.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Tente novamente" })
    ).toBeInTheDocument();
  });

  it("Should be return list of movies", () => {
    vi.spyOn(hooks, "useFilteredMovies").mockReturnValue({
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
              "This original animated anthology follows three of the fiercest warriors in human history: a Viking raider guiding her young son on a bloody quest for revenge, a ninja in feudal Japan who turns against his Samurai brother in a brutal battle for succession, and a WWII pilot who takes to the sky to investigate an otherworldly threat to the Allied cause.",
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
        total_results: 0,
      },
      hasMovies: true,
      isLoading: false,
      isError: false,
      hasQuery: false,
      query: "",
    });

    render(sut);

    expect(screen.getByText("Predator: Killer of Killers")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
  });

  it("Should be return header when has query", () => {
    vi.spyOn(hooks, "useFilteredMovies").mockReturnValue({
      data: {
        results: [],
        page: 1,
        total_pages: 1,
        total_results: 0,
      },
      hasMovies: true,
      isLoading: false,
      isError: false,
      hasQuery: true,
      query: "",
    });

    render(sut);

    expect(screen.getByText("Resultados para:")).toBeInTheDocument();
  });
});
