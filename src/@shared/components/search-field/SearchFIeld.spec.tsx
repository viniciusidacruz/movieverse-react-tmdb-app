import { describe, it, expect } from "vitest";
import { NuqsAdapter } from "nuqs/adapters/react";
import { act, render, screen, fireEvent } from "@testing-library/react";

import { SearchField } from ".";
import { BrowserRouter } from "react-router-dom";

const sut = (
  <NuqsAdapter>
    <BrowserRouter>
      <SearchField />
    </BrowserRouter>
  </NuqsAdapter>
);

describe("SearchField", () => {
  it("should render the input with placeholder", () => {
    render(sut);
    const input = screen.getByPlaceholderText("Buscar filmes");
    expect(input).toBeInTheDocument();
  });

  it("should be update input values", () => {
    render(sut);

    const input = screen.getByPlaceholderText(
      "Buscar filmes"
    ) as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: "test" } });
    });

    expect(input.value).toBe("test");
  });
});
