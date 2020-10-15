<template>
  <div class="container">
    <vueHeader></vueHeader>
    <history></history>
    <div class="detail_search">
      <div class="searchResult">
        <h4>
          {{
            this.$route.params.searchText || this.$store.state.selectCategory
          }}
        </h4>
        <p>&nbsp;에 관련된 문화행사를 찾았습니다.</p>
      </div>
      <div class="detail_filter">
        <div class="filter_item">
          <p class="item_title">분류</p>
          <dropdown
            :data="'category'"
            @selectCategory="selectCategory"
          ></dropdown>
        </div>
        <div class="filter_item">
          <p class="item_title">지역</p>
          <dropdown :data="'area'" @selectArea="selectArea"></dropdown>
        </div>
        <div class="filter_item">
          <p class="item_title">날짜</p>
          <div class="date_box">
            <input type="text" class="input_date" />
          </div>
        </div>
      </div>
    </div>
    <div class="search_list">
      <div class="list_title">
        <h3>[ PROGRAM ]</h3>
        <h3 class="list_length">
          [{{ this.$store.state.cultureList.length }}]
        </h3>
      </div>
    </div>
    <div v-if="searchResult.length != 0" class="culture_list">
      <article
        v-for="(searchList, index) in searchResult"
        :key="searchList.cultcode"
        class="culture_item"
        @click="submit(index)"
      >
        <h3 class="culture_place">장소 : {{ searchList.place }}</h3>
        <figure>
          <img :src="searchList.org_img" alt />
        </figure>
        <h1 class="culture_title">{{ searchList.title }}</h1>
        <h3 class="culture_date">
          기간 : {{ searchList.start_date }} ~ {{ searchList.end_date }}
        </h3>
      </article>
    </div>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";
import vueFooter from "../components/Footer";
import history from "../components/History";
import dropdown from "../components/Dropdown";

export default {
  created() {
    let searchText = this.$route.params.searchText;
    let category = this.$route.params.category;
    if (searchText === undefined) {
      this.$http.get(`/culture/category/${category}`).then(response => {
        this.searchVal = category;
        this.$store.commit("cultureList", response.data);
        this.searchResult = this.$store.state.cultureList.slice(0, 9);
      });
    } else if (category === undefined) {
      this.searchVal = searchText;

      this.$http.get(`/culture/search/${searchText}`).then(response => {
        this.$store.commit("cultureList", response.data);
        this.searchResult = this.$store.state.cultureList.slice(0, 9);
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollList);
  },
  data() {
    return {
      searchVal: "",
      searchResult: [],
      page: 1
    };
  },
  components: {
    vueHeader,
    slideVue,
    vueFooter,
    history,
    dropdown
  },
  computed: {
    sendData: function() {
      return this.searchResult.length;
    }
  },
  methods: {
    inputSearch: function(event) {
      let text = event.target.value;
      this.searchVal = text;
    },
    submit: function(index) {
      this.$router.push({
        name: "detailculture",
        params: { detailcode: this.pageList[index].cultcode }
      });
    },
    selectArea: function(area) {
      if (area === "전체") {
        this.searchResult = this.$store.state.cultureList;
      } else {
        this.searchResult = this.$store.state.cultureList.filter(item => {
          return item.borough === area;
        });
      }
    },
    selectCategory: function(category) {
      let data = category.listCategory;
      this.$http.get(`/culture/category/${data}`).then(response => {
        this.$store.state.cultureList = response.data;
        this.searchResult = this.$store.state.cultureList;
      });
      this.$router.push({
        name: "categoryList",
        params: {
          category: category.listCategory,
          searchName: category.name
        }
      });
    },
    scrollList: function() {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 300
      ) {
        console.log("asdf!!!!");
        let listArr = new Array();
        listArr = this.$store.state.cultureList.slice(
          this.page * 9,
          (this.page + 1) * 9
        );
        this.searchResult = this.searchResult.concat(listArr);
        this.page++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/CultureList.scss";
</style>
