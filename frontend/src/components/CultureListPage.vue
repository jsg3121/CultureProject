<template>
  <div class="culture">
    <h1>문화</h1>
    <!-- <div class="container">
          <div class="outer">
              <div class="inner">
                  <div class="centered" v-for="culture in dataCulture" :key="culture.cultcode">
                      <img v-bind:src="culture.main_img" class = "poster">
                      <div>
                          <h2>{{culture.codename}}</h2>
                          <h3>{{culture.title}}</h3>
                          <router-link :to="{name: 'detailculture', params: {cultcode: culture.cultcode}}">상세보기</router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div> -->
  </div>
</template>

<script>
// /* eslint-disable */
import header from "./Header";
export default {
  components: {
    header
  }
  // created() {
  //     this.$http.get("/culture").then(response => {
  //         this.dataCulture = response.data;
  //     });
  // },
  // data() {
  //     return {
  //         dataCulture: []
  //     };
  // }
};
</script>

<style>
.outer {
  display: table;
  width: 100%;
  height: 100%;
}
.inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.centered {
  position: relative;
  display: inline-block;
  width: 50%;
  padding: 1em;
  font-size: 1.5rem; /* background: orange; */ /* color: white; */
}
.poster {
  width: 30%;
  height: 40%;
}
</style>
