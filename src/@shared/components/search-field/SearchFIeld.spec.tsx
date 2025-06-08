import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act, render, screen, fireEvent } from "@testing-library/react";

import { SearchField } from ".";
import { NuqsAdapter } from "nuqs/adapters/react";

const sut = (
  <NuqsAdapter>
    <SearchField />
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
