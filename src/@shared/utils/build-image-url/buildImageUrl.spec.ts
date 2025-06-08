import { buildImageURL } from ".";

describe("buildImageURL", () => {
  it("Should be concat url with pathname", () => {
    const result = buildImageURL("image-path");

    expect(result).toBe("https://image.tmdb.org/t/p/original/image-path");
  });

  it("Should be return empty string when is missing path", () => {
    const result = buildImageURL(undefined);

    expect(result).toBe("");
  });
});
