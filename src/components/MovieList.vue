<template>
  <div>
    <input type="text" v-model="state.searchString" class="border" />
    <button class="border" @click="searchMovieByTitle">Search</button>
    <button class="border" @click="clearSearch">Clear search</button>
    <br />
    ::{{ pageNumber }} ::{{ totalPages }}
    <button
      :disabled="pageNumber <= 1"
      @click="getNextOrPreviousPage('previous')"
      class="border"
    >
      Previous
    </button>
    ||
    <button
      :disabled="pageNumber >= totalPages"
      @click="getNextOrPreviousPage('next')"
      class="border"
    >
      Next
    </button>
    <br />
    {{ loading }}
    {{ totalMovieCount }}
    {{ moviesList }}
    <div
      class="bg-yellow-200 my-2"
      v-for="movie in moviesList"
      :key="movie.imdbID"
    >
      <h2>{{ movie.Title }}</h2>
      <h3>{{ movie.Year }}</h3>
      <h4>{{ movie.imdbID }}</h4>
      <p @click="markAsFavourite(movie)">Star</p>
    </div>
    <div v-if="!moviesList.length">No data found</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
import { Movie } from "@/store/state";

export default defineComponent({
  setup() {
    const state = reactive({
      searchString: "",
    });
    const store = useStore();
    const pageNumber = computed(() => store.state.pageNumber);
    const totalPages = computed(() => store.state.totalPages);
    const loading = computed(() => store.state.loading);
    const totalMovieCount = computed(() => store.getters.totalMovieCount);
    const moviesList = computed(() => store.getters.moviesList);
    const getNextOrPreviousPage = (change: string) => {
      const nextPageData = { change, searchString: state.searchString };
      store.dispatch(ActionTypes.GetNextOrPreviousPage, nextPageData);
    };
    const searchMovieByTitle = () =>
      store.dispatch(ActionTypes.SearchMovieByTitle, state.searchString);
    const clearSearch = () => {
      state.searchString = "";
      store.dispatch(ActionTypes.GetALLMovies);
    };
    const markAsFavourite = (favorite: Movie[]) =>
      store.dispatch(ActionTypes.ToggleMovieAsFavourite, favorite);

    return {
      loading,
      totalMovieCount,
      moviesList,
      getNextOrPreviousPage,
      pageNumber,
      searchMovieByTitle,
      state,
      totalPages,
      clearSearch,
      markAsFavourite,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
