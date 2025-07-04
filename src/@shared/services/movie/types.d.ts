import type { IMovieById, IPagination, IMovie } from "@shared/interfaces";

export type GetAllOutput = IPagination & {
  results: Movie[];
};

export interface GetAllInput {
  page: string;
}

export interface GetAllBySearchInput {
  page: string | undefined;
  query: string;
}

export type GetByIdOutput = IMovieById;
