export type Movie = {
  title: string;
  year: number;
  imdbId: string;
};
export type State = {
  loading: boolean;
  movies: Movie[];
  perPage: number;
  page: number;
  totalResults: number;
  totalPages: number;
  favourites: any;
  searchString: string;
};
export const state: State = {
  loading: false,
  movies: [],
  totalResults: 0,
  totalPages: 0,
  perPage: 0,
  page: 0,
  favourites: [],
  searchString: "",
};
