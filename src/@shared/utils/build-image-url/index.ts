export function buildImageURL(path: string | null | undefined): string {
  if (!path) return "";

  return `https://image.tmdb.org/t/p/original/${path}`;
}
