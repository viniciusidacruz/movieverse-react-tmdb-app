import { BASE_URL } from "@shared/config";

import type {
  GetAllBySearchInput,
  GetAllInput,
  GetAllOutput,
  GetByIdOutput,
} from "./types";

export class MovieService {
  static create(): MovieService {
    return new MovieService();
  }

  async getAll({ page }: GetAllInput): Promise<GetAllOutput> {
    try {
      const { data } = await BASE_URL.get<GetAllOutput>(
        `/movie/popular?&page=${page}&include_adult=false`
      );

      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw err;
    }
  }

  async getById(id: string): Promise<GetByIdOutput> {
    try {
      const { data } = await BASE_URL.get<GetByIdOutput>(`/movie/${id}`);

      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw err;
    }
  }

  async getAllBySearch({
    page,
    query,
  }: GetAllBySearchInput): Promise<GetAllOutput> {
    try {
      const { data } = await BASE_URL.get<GetAllOutput>(
        `/search/movie?query=${query}&include_adult=false&page=${page}`
      );

      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw err;
    }
  }
}
