<template>
  <div
    class="bg-yellow-200 my-2"
    v-for="favoriteMovie in favoriteMoviesList"
    :key="favoriteMovie.imdbID"
  >
    <h2>{{ favoriteMovie.Title }}</h2>
    <h3>{{ favoriteMovie.Year }}</h3>
    <h4>{{ favoriteMovie.imdbID }}</h4>
  </div>
  <div v-if="!favoriteMoviesList.length">No favourites added</div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  setup() {
    const store = useStore();
    const favoriteMoviesList = computed(() => store.state.favourites);
    return { favoriteMoviesList };
  },
});
</script>
