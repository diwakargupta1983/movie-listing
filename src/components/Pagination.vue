<template>
  <div
    class="bg-white py-3 flex items-center justify-between border-t border-gray-200"
  >
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ pageNumberStart }}</span>
          to
          <span class="font-medium">{{ pageNumberEnd }}</span>
          of
          <span class="font-medium">{{ totalResults }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="javascript: void(0)"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            :class="[page <= 1 ? 'opacity-25 bg-gray-200' : '']"
            @click="page > 1 ? getNextOrPreviousPage('previous') : null"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="javascript: void(0)"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            :class="[page >= totalPages ? 'opacity-25 bg-gray-200' : '']"
            @click="page < totalPages ? getNextOrPreviousPage('next') : null"
          >
            <span class="sr-only">Next</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
export default defineComponent({
  setup() {
    const store = useStore();
    const totalPages = computed(() => store.state.totalPages);
    const totalResults = computed(() => store.state.totalResults);
    const pageNumberStart = computed(() => store.getters.pageNumberStart);
    const pageNumberEnd = computed(() => store.getters.pageNumberEnd);
    const page = computed(() => store.state.page);
    const getNextOrPreviousPage = (change: string) => {
      store.dispatch(ActionTypes.GetNextOrPreviousPage, change);
    };
    return {
      totalPages,
      totalResults,
      pageNumberStart,
      pageNumberEnd,
      getNextOrPreviousPage,
      page,
    };
  },
});
</script>
