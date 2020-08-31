<template>
  <div class="container">
    <slideVue></slideVue>
    <searchBox></searchBox>
  </div>
</template>

<script>
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";

export default {
  components: {
    slideVue,
    searchBox,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
