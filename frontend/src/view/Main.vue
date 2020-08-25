<template>
  <div class="container">
    <vueHeader></vueHeader>
    <div class="inner-slide">
      <slideVue></slideVue>
    </div>
    <searchBox></searchBox>
    <helloWorld></helloWorld>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";
import helloWorld from "../components/HelloWorld";

export default {
  components: {
    vueHeader,
    slideVue,
    searchBox,
    helloWorld,
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
