import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { Movie, State } from './state'
 
export enum ActionTypes {
  GetALLMovies = 'GET_ALL_MOVIES',
  GetNextOrPreviousPage = 'GET_NEXT_OR_PREVIOUS_PAGE',
  SearchMovieByTitle = 'SEARCH_MOVIE_BY_TITLE',
  ToggleMovieAsFavourite = 'TOGGLE_MOVIE_AS_FAVOURITE',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
  }

  export type Actions = {
    [ActionTypes.GetALLMovies](context: ActionAugments): void;
    [ActionTypes.GetNextOrPreviousPage](context: ActionAugments, payload: any): void;
    [ActionTypes.SearchMovieByTitle](context: ActionAugments, payload: string): void;
    [ActionTypes.ToggleMovieAsFavourite](context: ActionAugments, payload: Movie[]): void;
  }

  export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GetALLMovies]({ commit, state }) {
      commit(MutationType.SetLoading, true)
      state.pageNumber = 1;
      await fetch('https://jsonmock.hackerrank.com/api/movies/search')
      .then(response => response.json())
      .then(result => {
        console.log(result);
        commit(MutationType.SetMovies, result.data)
        commit(MutationType.SetTotalPages, result.total_pages)
      })
      commit(MutationType.SetLoading, false)
      
    },
    async [ActionTypes.GetNextOrPreviousPage]({ commit, state }, nextPageData) {
        console.log(nextPageData)
        commit(MutationType.SetLoading, true)
        commit(MutationType.SetPageNumber, nextPageData.change)
        await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${nextPageData.searchString}&page=${state.pageNumber}`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          commit(MutationType.SetMovies, result.data)
        })
        commit(MutationType.SetLoading, false)
      },
    async [ActionTypes.SearchMovieByTitle]({ commit, state }, payload) {
        console.log(payload)
        commit(MutationType.SetLoading, true)
        state.pageNumber = 1;
        await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${payload}`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          commit(MutationType.SetMovies, result.data)
          commit(MutationType.SetTotalPages, result.total_pages)
        })
        commit(MutationType.SetLoading, false)
      },
      async [ActionTypes.ToggleMovieAsFavourite]({ commit }, payload) {
        console.log(payload)
        commit(MutationType.SetLoading, true)
        commit(MutationType.SetFavorites, payload)
        // state.pageNumber = 1;
        // await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${payload}`)
        // .then(response => response.json())
        // .then(result => {
        //   console.log(result);
        //   commit(MutationType.SetMovies, result.data)
        //   commit(MutationType.SetTotalPages, result.total_pages)
        // })
        // commit(MutationType.SetLoading, false)
      },
  }