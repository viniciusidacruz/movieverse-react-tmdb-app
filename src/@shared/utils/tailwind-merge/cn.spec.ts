import { cn } from ".";

describe("Cn", () => {
  it("Should be concat two className", () => {
    const result = cn("first-class", "second-class");

    expect(result).toBe("first-class second-class");
  });
});
