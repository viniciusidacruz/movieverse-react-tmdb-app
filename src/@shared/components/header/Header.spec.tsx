import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("Header", () => {
  it("should render header with all components", () => {
    render(
      <NuqsAdapter>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </NuqsAdapter>
    );
    const input = screen.getByPlaceholderText("Buscar filmes");
    const logo = screen.getByRole("link", { name: "MovieVerse" });
    const linkHome = screen.getByRole("link", { name: "Home" });
    const linkFavorites = screen.getByRole("link", { name: "Favoritos" });

    expect(input).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(linkHome).toBeInTheDocument();
    expect(linkFavorites).toBeInTheDocument();
  });
});
