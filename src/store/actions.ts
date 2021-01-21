import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { Movie, State } from "./state";

export enum ActionTypes {
  GetALLMovies = "GET_ALL_MOVIES",
  GetNextOrPreviousPage = "GET_NEXT_OR_PREVIOUS_PAGE",
  SearchMovieByTitle = "SEARCH_MOVIE_BY_TITLE",
  ToggleMovieAsFavourite = "TOGGLE_MOVIE_AS_FAVOURITE",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetALLMovies](context: ActionAugments): void;
  [ActionTypes.GetNextOrPreviousPage](
    context: ActionAugments,
    payload: any
  ): void;
  [ActionTypes.SearchMovieByTitle](
    context: ActionAugments,
    payload: string
  ): void;
  [ActionTypes.ToggleMovieAsFavourite](
    context: ActionAugments,
    payload: Movie[]
  ): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetALLMovies]({ commit }) {
    commit(MutationType.SetLoading, true);
    await fetch("https://jsonmock.hackerrank.com/api/movies/search")
      .then((response) => response.json())
      .then((result) => {
        commit(MutationType.SetMovies, result.data);
        commit(MutationType.SetTotalResults, result.total);
        commit(MutationType.SetTotalPages, result.total_pages);
        commit(MutationType.SetPerPage, result.per_page);
        commit(MutationType.SetPage, parseInt(result.page));
      });
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.GetNextOrPreviousPage]({ commit, state }, change) {
    commit(MutationType.SetLoading, true);
    commit(MutationType.SetPageNumber, change);
    await fetch(
      `https://jsonmock.hackerrank.com/api/movies/search/?Title=${state.searchString}&page=${state.page}`
    )
      .then((response) => response.json())
      .then((result) => {
        commit(MutationType.SetMovies, result.data);
        commit(MutationType.SetTotalResults, result.total);
        commit(MutationType.SetTotalPages, result.total_pages);
        commit(MutationType.SetPerPage, result.per_page);
        commit(MutationType.SetPage, parseInt(result.page));
      });
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.SearchMovieByTitle]({ commit, state }) {
    commit(MutationType.SetLoading, true);
    await fetch(
      `https://jsonmock.hackerrank.com/api/movies/search/?Title=${state.searchString}`
    )
      .then((response) => response.json())
      .then((result) => {
        commit(MutationType.SetMovies, result.data);
        commit(MutationType.SetTotalResults, result.total);
        commit(MutationType.SetTotalPages, result.total_pages);
        commit(MutationType.SetPerPage, result.per_page);
        commit(MutationType.SetPage, parseInt(result.page));
      });
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.ToggleMovieAsFavourite]({ commit }, payload) {
    commit(MutationType.SetFavorites, payload);
  },
};
