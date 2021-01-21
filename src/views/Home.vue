<template>
  <div>
    <MovieList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieList from "@/components/MovieList.vue";

export default defineComponent({
  name: "Home",
  components: {
    MovieList,
  },
});
</script>
