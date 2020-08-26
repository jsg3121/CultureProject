<template>
  <div>
    <h1>문화 상세</h1>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <div class="centered">
            <img :src="culture.org_img" class="poster" />
            <div>
              <h2>{{ culture.codename }}</h2>
              <h3>{{ culture.title }}</h3>
              <h3>{{ culture.dateTime }}</h3>
              <h3>{{ culture.place }}</h3>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <history></history>
  </div>
</template>

<script>
/* eslint-disable */
import history from "../components/History";

export default {
  created() {
    let detailcode = this.$route.params.detailcode;

    this.$http.get(`/culture/${detailcode}`).then(response => {
      this.culture = response.data[0];
      this.$store.commit("history", response.data[0]);
    });
  },
  data() {
    return {
      culture: {}
    };
  },
  methods: {},
  components: {
    history
  }
};
</script>

<style></style>
