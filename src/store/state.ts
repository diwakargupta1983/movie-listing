export type Movie = {
    title: string;
    year: number;
    imdbId: string;
  };
  export type State = {
    loading: boolean;
    movies: Movie[];
    pageNumber: number;
    totalPages: number;
    favourites: any;
  };
  export const state: State = {
    loading: false,
    movies: [],
    pageNumber: 1,
    totalPages: 0,
    favourites: []
  };