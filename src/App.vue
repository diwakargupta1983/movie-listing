<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20">
        <div class="relative pt-6">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  />
                </a>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              Movie List
            </div>
            <div class="flex items-center flex-grow flex-shrink-0">
              <router-link to="/" v-if="this.$route.name === 'Favourites'"
                >Home</router-link
              >
              <router-link to="/favourites" v-if="this.$route.name === 'Home'"
                >Favourites</router-link
              >
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

<style lang="scss"></style>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
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
