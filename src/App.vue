<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-10">
        <div class="relative pt-6">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="javascript:void(0)">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  />
                </a>
              </div>
            </div>
            <div
              class="hidden md:block md:ml-10 md:pr-4 md:space-x-8 text-pink-900 text-xl font-black ml-0"
            >
              <span class="text-purple-800 text-4xl font-black">IMDB</span>
              Movies
            </div>
            <div
              class="flex flex-row-reverse items-center flex-grow flex-shrink-0"
            >
              <router-link to="/" v-if="this.$route.name === 'Favourites'"
                >Home</router-link
              >
              <router-link
                to="/favourites"
                v-if="this.$route.name === 'Home'"
                class="flex items-center p-2 bg-blue-200 rounded-md shadow-xs cursor-pointer hover:bg-blue-700 border border-blue-800 border-solid bg-blue-600 text-white hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 text-yellow-400"
                >
                  <title>Favourites icon</title>
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <div>
                  <p class=" text-xs font-medium ml-2 ">
                    Favourites
                  </p>
                </div>
              </router-link>
            </div>
          </nav>
        </div>
      </div>
      <main class="px-4 py-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/store";
import { ActionTypes } from "./store/actions";
export default defineComponent({
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch(ActionTypes.GetALLMovies));
    return {};
  },
});
</script>
