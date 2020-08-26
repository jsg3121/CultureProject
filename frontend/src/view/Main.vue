<template>
  <div class="container">
    <div class="inner-slide">
      <slideVue></slideVue>
    </div>
    <searchBox></searchBox>
  </div>
</template>

<script>
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";

export default {
  components: {
    slideVue,
    searchBox
  }
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
