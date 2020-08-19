<template>
  <div>
    <h1>문화 상세</h1>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <div class="centered">
            <img v-bind:src="culture.main_img" class="poster" />
            <div>
              <h2>{{ culture.codename }}</h2>
              <h3>{{ culture.title }}</h3>
              <h3>{{ culture.time }}</h3>
              <h3>{{ culture.place }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created() {
    let detailcode = this.$route.params.detailcode;
    this.$http.get(`/culture/${detailcode}`).then((response) => {
      this.culture = response.data[0];
    });
  },
  data() {
    return {
      culture: {},
    };
  },
};
</script>

<style></style>
