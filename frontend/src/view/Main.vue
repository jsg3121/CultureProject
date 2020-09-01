<template>
  <div class="container">
    <slideVue></slideVue>
    <searchBox></searchBox>
    <popular></popular>
  </div>
</template>

<script>
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";
import popular from "../components/PopularCulture";

export default {
  components: {
    slideVue,
    searchBox,
    popular,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
