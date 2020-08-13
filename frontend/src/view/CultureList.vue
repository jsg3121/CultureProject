<template>
  <div class="container">
    <vueHeader></vueHeader>
    <searchBox></searchBox>
    <p v-for="searchList in searchVal" :key="searchList.cultcode">
      {{ searchVal.title }}
    </p>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";

export default {
  created() {
    let search = this.$route.params.data;
    this.$http.get(`/culture/${search}`).then(response => {
      this.searchVal = response.data;
    });
  },
  data() {
    return {
      searchVal: []
    };
  },
  components: {
    vueHeader,
    slideVue,
    searchBox
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
