<template>
  <div>
    <SearchBar />
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Year
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    IMDB ID
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Mark as favourite</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="movie in moviesList" :key="movie.imdbID">
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ movie.Title }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ movie.Year }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ movie.imdbID }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a
                      href="javascript:void(0)"
                      class="text-indigo-600 hover:text-indigo-900"
                      @click="toggleAsFavourite(movie)"
                      title="Mark as favourite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr v-if="!moviesList.length">
                  <td colspan="4" class="text-center">No data found !</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Pagination from "@/components/Pagination.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
import { Movie } from "@/store/state";

export default defineComponent({
  components: {
    Pagination,
    SearchBar,
  },
  setup() {
    const store = useStore();
    const moviesList = computed(() => store.getters.moviesList);
    const toggleAsFavourite = (favorite: Movie[]) =>
      store.dispatch(ActionTypes.ToggleMovieAsFavourite, favorite);

    return {
      moviesList,
      toggleAsFavourite,
    };
  },
});
</script>
