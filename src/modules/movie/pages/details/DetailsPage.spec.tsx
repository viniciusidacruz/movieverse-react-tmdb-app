import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import * as hooks from "@movie_module/hooks";

import { DetailsPage } from ".";

const sut = (
  <BrowserRouter>
    <DetailsPage />
  </BrowserRouter>
);

describe("DetailsPage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("Should be return loading state", () => {
    vi.spyOn(hooks, "useMovieById").mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(sut);

    expect(screen.getByText("Aguarde um momento!")).toBeInTheDocument();
    expect(
      screen.getByText("Estamos buscando os detalhes do filme para você.")
    ).toBeInTheDocument();
  });

  it("Should be return list of movies", () => {
    vi.spyOn(hooks, "useMovieById").mockReturnValue({
      data: {
        adult: false,
        backdrop_path: "string",
        budget: 0,
        genres: [
          {
            id: 2,
            name: "Genre",
          },
        ],
        homepage: "string",
        id: 0,
        imdb_id: "string",
        origin_country: [],
        original_language: "string",
        original_title: "string",
        overview: "Description",
        popularity: 0,
        poster_path: "string",
        production_companies: [],
        production_countries: [],
        release_date: "2025-06-08",
        revenue: 0,
        runtime: 0,
        status: "string",
        tagline: "string",
        title: "Title",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      isLoading: false,
    });

    render(sut);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Genre")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });
});
