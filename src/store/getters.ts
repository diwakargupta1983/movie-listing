import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  totalMovieCount(state: State): number;
  moviesList(state: State): any;
  pageNumberStart(state: State): number;
  pageNumberEnd(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  totalMovieCount(state) {
    return state.movies.length;
  },
  moviesList(state) {
    return state.movies;
  },
  pageNumberStart(state) {
    return state.page !== 1 ? (state.page - 1) * state.perPage + 1 : state.page;
  },
  pageNumberEnd(state) {
    return state.page !== state.totalPages
      ? state.page * state.perPage
      : state.totalResults;
  },
};
