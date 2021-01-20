import { MutationTree } from 'vuex'
import { State, Movie } from './state'
 
export enum MutationType {
    SetMovies = 'SET_MOVIES',
  UpdatePage = 'UPDATE_PAGE',
  SearchByTitle = 'SEARCH_BY_TITLE',
  SetLoading = 'SET_LOADING',
  SetPageNumber = 'SET_PAGE_NUMBER',
  SetTotalPages = 'SET_TOTAL_PAGES',
  SetFavorites = 'SET_FAVOURITES',
}

export type Mutations = {
    [MutationType.SetMovies](state: State, movies: Movie[]): void;
    [MutationType.SetLoading](state: State, value: boolean): void;
    [MutationType.SetPageNumber](state: State, value: string): void;
    [MutationType.SetTotalPages](state: State, value: number): void;
    [MutationType.SetFavorites](state: State, movies: Movie[]): void;
  }

  export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetMovies](state, movies) {
      state.movies = movies
    },
    [MutationType.SetLoading](state, value) {
        state.loading = value
        console.log("I am loading...")
      },
      [MutationType.SetPageNumber](state, value) {
        state.pageNumber = value === "next" ? ++state.pageNumber : --state.pageNumber;
      },
      [MutationType.SetTotalPages](state, value) {
        state.totalPages = value ;
      },
      [MutationType.SetFavorites](state, movies: any) {
        if(!state.favourites.length || state.favourites.indexOf(movies) <= -1){
            state.favourites.push(movies);
        }else{
            
            const filteredFavouritesList = state.favourites.filter((movie: any) => {
                return movie.imdbID !== movies.imdbID
            })
            state.favourites = filteredFavouritesList;
        }
      },
  }