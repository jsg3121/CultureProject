<template>
  <div class="container">
    <slideVue></slideVue>
    <searchBox></searchBox>
    <popular></popular>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";
import popular from "../components/PopularCulture";
import vueFooter from "../components/Footer";

export default {
  components: {
    slideVue,
    searchBox,
    popular,
    vueFooter,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
