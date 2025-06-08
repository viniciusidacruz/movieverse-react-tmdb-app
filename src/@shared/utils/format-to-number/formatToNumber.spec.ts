import { formatToNumber } from ".";

describe("formatToNumber", () => {
  it("Should be concat url with pathname", () => {
    const result = formatToNumber(100000);

    expect(result).toBe("100.000");
  });

  it("Should be return empty string when is missing bigNumber", () => {
    const result = formatToNumber(undefined);

    expect(result).toBe("");
  });
});
