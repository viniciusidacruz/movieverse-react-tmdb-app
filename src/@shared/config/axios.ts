import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "pt-BR",
  },
  headers: {
    Accept: "application/json",
  },
});
