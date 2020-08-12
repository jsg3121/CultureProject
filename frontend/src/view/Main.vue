<template>
  <div class="container">
    <vueHeader></vueHeader>
    <div class="inner-slide">
      <slideVue></slideVue>
    </div>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";

export default {
  components: {
    vueHeader,
    slideVue
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .inner-slide {
    width: 100%;
    height: 400px;
    background-color: antiquewhite;
    margin-top: 80px;
    position: relative;
  }
}
</style>
