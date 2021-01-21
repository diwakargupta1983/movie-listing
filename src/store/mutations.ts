import { MutationTree } from "vuex";
import { State, Movie } from "./state";

export enum MutationType {
  SetMovies = "SET_MOVIES",
  SetLoading = "SET_LOADING",
  SetPageNumber = "SET_PAGE_NUMBER",
  SetPerPage = "SET_PER_PAGE",
  SetPage = "SET_PAGE",
  SetTotalResults = "SET_TOTAL_RESULTS",
  SetTotalPages = "SET_TOTAL_PAGES",
  SetFavorites = "SET_FAVOURITES",
}

export type Mutations = {
  [MutationType.SetMovies](state: State, movies: Movie[]): void;
  [MutationType.SetLoading](state: State, value: boolean): void;
  [MutationType.SetPageNumber](state: State, value: string): void;
  [MutationType.SetPerPage](state: State, value: number): void;
  [MutationType.SetPage](state: State, value: number): void;
  [MutationType.SetTotalResults](state: State, value: number): void;
  [MutationType.SetTotalPages](state: State, value: number): void;
  [MutationType.SetFavorites](state: State, movies: any): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetMovies](state, movies) {
    state.movies = movies;
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value;
  },
  [MutationType.SetPageNumber](state, value) {
    state.page = value === "next" ? ++state.page : --state.page;
  },
  [MutationType.SetPerPage](state, value) {
    state.perPage = value;
  },
  [MutationType.SetPage](state, value) {
    state.page = value;
  },
  [MutationType.SetTotalResults](state, value) {
    state.totalResults = value;
  },
  [MutationType.SetTotalPages](state, value) {
    state.totalPages = value;
  },
  [MutationType.SetFavorites](state, movies: any) {
    if (!state.favourites.length || state.favourites.indexOf(movies) <= -1) {
      state.favourites.push(movies);
    } else {
      const filteredFavouritesList = state.favourites.filter((movie: any) => {
        return movie.imdbID !== movies.imdbID;
      });
      state.favourites = filteredFavouritesList;
    }
  },
};
