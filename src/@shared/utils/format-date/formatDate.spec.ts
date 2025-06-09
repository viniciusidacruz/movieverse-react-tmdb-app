import { formatDate } from ".";

describe("formatDate", () => {
  it("Should be return empty string", () => {
    const result = formatDate("");

    expect(result).toBeUndefined();
  });

  it("Should be return date formatted", () => {
    const result = formatDate("2025-06-08");

    expect(result).toBe("08 de junho de 2025");
  });
});
