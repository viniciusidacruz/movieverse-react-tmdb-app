// usePagination.test.tsx
import { useQueryState } from "nuqs";
import { vi } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { usePagination } from ".";

vi.mock("nuqs", () => ({
  useQueryState: vi.fn(),
}));

describe("usePagination", () => {
  const setPageMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (useQueryState as any).mockReturnValue(["", setPageMock]);
  });

  it("deve retornar as páginas corretas com base no delta", () => {
    const { result } = renderHook(() =>
      usePagination({ page: 5, total_pages: 10 })
    );

    expect(result.current.pagesToShow).toEqual([3, 4, 5, 6, 7]);
  });

  it("deve limitar corretamente no início do range", () => {
    const { result } = renderHook(() =>
      usePagination({ page: 1, total_pages: 10 })
    );

    expect(result.current.pagesToShow).toEqual([1, 2, 3]);
  });

  it("deve limitar corretamente no fim do range", () => {
    const { result } = renderHook(() =>
      usePagination({ page: 10, total_pages: 10 })
    );

    expect(result.current.pagesToShow).toEqual([8, 9, 10]);
  });

  it("deve chamar setPage com o valor correto ao selecionar uma nova página", () => {
    const { result } = renderHook(() =>
      usePagination({ page: 5, total_pages: 10 })
    );

    act(() => {
      result.current.selectPage(7);
    });

    expect(setPageMock).toHaveBeenCalledWith("7");
  });
});
