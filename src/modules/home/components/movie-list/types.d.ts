import type { GetAllOutput } from "@shared/services/movie/types";

export interface IMovieList {
  data: GetAllOutput | undefined;
  hasMovies: boolean;
  isLoading: boolean;
  isError: boolean;
}
