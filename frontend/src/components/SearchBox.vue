<template>
  <div class="search-container">
    <button @click="paramSearch()">검색</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    paramSearch() {
      this.$router.push({ name: "cultureList", params: { data: "asdfasdf" } });
    },
  },
};
</script>

<style>
.search-container {
  height: 10rem;
}
</style>
