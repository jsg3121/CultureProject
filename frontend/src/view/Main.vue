<template>
  <div class="container">
    <vueHeader></vueHeader>
    <div class="inner-slide">
      <slideVue></slideVue>
    </div>
    <searchBox></searchBox>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";

export default {
  components: {
    vueHeader,
    slideVue,
    searchBox,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .inner-slide {
    width: 100%;
    height: 25rem;
    background-color: antiquewhite;
    position: relative;
  }
}
</style>
