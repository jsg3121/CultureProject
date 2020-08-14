<template>
  <div class="search-container">
    <!-- <input v-model="searchText" /> -->
    <input type="text" :value="searchText" @input="inputSearch" />
    <p>{{ searchText }}</p>
    <router-link :to="{name: 'cultureList', params: {searchText: searchText}}">다음</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    inputSearch: function (event) {
      let text = event.target.value;
      this.searchText = text;
    },
  },
};
</script>

<style>
.search-container {
  height: 10rem;
}
</style>
