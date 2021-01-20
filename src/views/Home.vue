<template>
  <div>
    <MovieList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieList from "@/components/MovieList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    MovieList,
  },
});
</script>
