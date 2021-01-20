import { GetterTree } from 'vuex'
import { State } from './state'
 
export type Getters = {
  totalMovieCount(state: State): number;
  moviesList(state: State): any;
}
 
export const getters: GetterTree<State, State> & Getters = {
  totalMovieCount(state) {
    return state.movies.length
  },
  moviesList(state) {
      return state.movies
  },
}