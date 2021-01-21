<template>
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
              <tr v-for="movie in favoriteMoviesList" :key="movie.imdbID">
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
                    title="Remove from favourite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr v-if="!favoriteMoviesList.length">
                <td colspan="4" class="text-center">No favourites added !</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
import { Movie } from "@/store/state";
export default defineComponent({
  setup() {
    const store = useStore();
    const favoriteMoviesList = computed(() => store.state.favourites);
    const toggleAsFavourite = (favorite: Movie[]) =>
      store.dispatch(ActionTypes.ToggleMovieAsFavourite, favorite);
    return { favoriteMoviesList, toggleAsFavourite };
  },
});
</script>
