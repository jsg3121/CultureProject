<template>
  <div class="container">
    <searchBox></searchBox>
    <div v-if="searchResult.length == 0 ">'{{searchVal}}'과(와) 일치하는 결과가 없습니다</div>
    <div v-else>
      <article v-for="searchList in searchResult" :key="searchList.cultcode">
        <h1>{{searchList.title}}</h1>
        <h3>기간 : {{searchList.start_date}} ~ {{searchList.end_date}}</h3>
        <h3>장소 : {{searchList.place}}</h3>
        <h3>입장료 : {{searchList.use_fee}}</h3>
        <router-link :to="{name : 'detailculture', params: {detailcode : searchList.cultcode}}">상세보기</router-link>
        <br />
        <br />
      </article>
    </div>
    <router-link :to="{name: 'main'}">메인</router-link>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";
import searchBox from "../components/SearchBox";

export default {
  created() {
    let searchText = this.$route.params.searchText;
    this.searchVal = searchText;
    this.$http.get(`/culture/search/${searchText}`).then((response) => {
      this.searchResult = response.data;
    });
  },
  data() {
    return {
      searchVal: "",
      searchResult: [],
    };
  },
  components: {
    vueHeader,
    slideVue,
    searchBox,
  },
  methods: {
    inputSearch: function (event) {
      let text = event.target.value;
      this.searchVal = text;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>
