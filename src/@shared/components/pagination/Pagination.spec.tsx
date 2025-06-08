import { BrowserRouter } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import * as hooks from "@shared/hooks";

import { Pagination } from ".";

const mockSelectPage = vi.fn();

const sut = (
  <BrowserRouter>
    <NuqsAdapter>
      <Pagination page={1} total_pages={1} total_results={10} />
    </NuqsAdapter>
  </BrowserRouter>
);

describe("Pagination", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("Should be disabled first and previous button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: true,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: false,
    });

    render(sut);

    expect(screen.getByRole("button", { name: "Primeira" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Anterior" })).toBeDisabled();
  });

  it("Should be enabled first and previous button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: false,
    });

    render(sut);

    expect(screen.getByRole("button", { name: "Primeira" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Anterior" })).toBeEnabled();
  });

  it("Should be render pages to show", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [1, 2, 3, 4],
      selectPage: mockSelectPage,
      isLastPage: false,
    });

    render(sut);

    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
  });

  it("Should be enabled last and next button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: false,
    });

    render(sut);

    expect(screen.getByRole("button", { name: "Próxima" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Última" })).toBeEnabled();
  });

  it("Should be disabled last and next button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: true,
    });

    render(sut);

    expect(screen.getByRole("button", { name: "Próxima" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Última" })).toBeDisabled();
  });

  it("Should be called select page when is click in first button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: true,
    });

    render(sut);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Primeira" }));
    });

    expect(mockSelectPage).toBeCalled();
  });

  it("Should be called select page when is click in previous button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: true,
    });

    render(sut);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
    });

    expect(mockSelectPage).toBeCalled();
  });

  it("Should be called select page when is click in pages visible", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [1],
      selectPage: mockSelectPage,
      isLastPage: true,
    });

    render(sut);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
    });

    expect(mockSelectPage).toBeCalled();
  });

  it("Should be called select page when is click in next button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: false,
    });

    render(sut);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Próxima" }));
    });

    expect(mockSelectPage).toBeCalled();
  });

  it("Should be called select page when is click in last button", () => {
    vi.spyOn(hooks, "usePagination").mockReturnValue({
      isFirstPage: false,
      pagesToShow: [],
      selectPage: mockSelectPage,
      isLastPage: false,
    });

    render(sut);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Última" }));
    });

    expect(mockSelectPage).toBeCalled();
  });
});
