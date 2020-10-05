<template>
  <div class="container">
    <vueHeader></vueHeader>
    <history></history>
    <div class="detail_search">
      <div class="searchResult">
        <!-- <h4>
          {{ this.$route.params.filter || this.$store.state.cultureCategory }}
        </h4> -->
        <p>&nbsp;에 관련된 문화행사를 찾았습니다.</p>
      </div>
      <div class="detail_filter">
        <div class="filter_item">
          <p class="item_title">분류</p>
          <dropdown :data="'category'"></dropdown>
        </div>
        <div class="filter_item">
          <p class="item_title">지역</p>
          <dropdown :data="'area'"></dropdown>
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
        <h3 class="list_length">[{{ this.searchResult.length }}]</h3>
      </div>
      <!-- <div class="select_box" @click="dropdown">
        <p>이름순으로 보기</p>
        <ul class="select_option" @click="selectSort">
          <li class="option">이름순으로 보기</li>
          <li class="option">장소순으로 보기</li>
          <li class="option">기간순으로 보기</li>
        </ul>
      </div> -->
    </div>
    <div v-if="searchResult.length != 0" class="culture_list">
      <article
        v-for="(searchList, index) in pageList"
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
    <!-- <pagination :resultLength="this.$store.state.cultureList"></pagination> -->
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";
import vueFooter from "../components/Footer";
import history from "../components/History";
import pagination from "../components/Pagination";
import dropdown from "../components/Dropdown";

export default {
  created() {
    // console.log("부모 1");
    let searchText = this.$route.params.searchText;
    let category = this.$route.params.category;
    if (searchText === undefined) {
      this.$http.get(`/culture/category/${category}`).then((response) => {
        this.$store.state.cultureList = response.data;
        // this.$store.commit("cultureList", response.data);
        // console.log("부모 2");

        this.searchResult = this.$store.state.cultureList;
        this.pageList = this.searchResult.slice(0, 9);
      });
    } else if (category === undefined) {
      this.searchVal = searchText;

      this.$http.get(`/culture/search/${searchText}`).then((response) => {
        this.$store.state.cultureList = response.data;
        this.searchResult = this.$store.state.cultureList;
        this.pageList = this.searchResult.slice(0, 9);
      });
    }
    // console.log("부모 3");
  },
  // beforeMount() {
  //   console.log("부모 4");
  // },
  // mounted() {
  //   console.log("부모 5");
  // },
  // updated() {
  //   console.log("부모 6");
  // },
  data() {
    return {
      searchVal: "",
      searchResult: [],
      pageList: [],
      pageIndex: 1,
      pageNumbering: 0,
      selectLocate: "전체",
      selectCategory: "전체",
    };
  },
  components: {
    vueHeader,
    slideVue,
    vueFooter,
    history,
    pagination,
    dropdown,
  },
  methods: {
    inputSearch: function (event) {
      let text = event.target.value;
      this.searchVal = text;
    },
    submit: function (index) {
      this.$router.push({
        name: "detailculture",
        params: { detailcode: this.pageList[index].cultcode },
      });
    },
    selectSort: function (event) {
      let sortList = document.querySelectorAll(
        ".search_list .select_box .select_option li"
      );

      let sortVal = document.querySelector(".search_list .select_box > p");
      sortVal.innerHTML = event.target.innerHTML;

      this.searchResult = this.searchResult.sort((a, b) => {
        if (a.place < b.place) {
          return -1;
        } else if (a.place > b.place) {
          return 1;
        } else {
          // 이름이 같을 경우
          return 0;
        }
      });

      console.log(this.searchResult);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 6.375rem;

  .detail_search {
    height: 14.125rem;
    border-bottom: 0.125rem solid #ebebeb;
    background-color: #f2f3f6;
    padding-top: 3.625rem;

    .searchResult {
      display: flex;
      align-items: center;
      max-width: 64.8125rem;
      margin: 0 auto;

      h4 {
        font-size: 1.71875rem;
        color: #ff8604;
        text-align: left;
      }

      p {
        font-size: 1.5rem;
        font-weight: normal;
        text-align: left;
        color: #333333;
      }
    }

    .detail_filter {
      display: flex;
      max-width: 64.8125rem;
      margin: 3.8125rem auto;

      .filter_item {
        display: flex;
        align-items: center;
        margin-right: 5.6875rem;

        &:last-child {
          margin-right: 0;
        }

        .item_title {
          font-size: 0.875rem;
          text-align: left;
          color: #333333;
        }

        .date_box {
          margin-left: 1rem;
          width: 13.5625rem;
          height: 2.1875rem;

          .input_date {
            width: calc(100% - 0.875rem);
            height: calc(100% - 0.25rem);
            border: solid 0.125rem #333333;
            padding: 0 0 0 0.625rem;
          }
        }
      }
    }
  }

  .search_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 64.8125rem;
    margin: 0 auto 7.0625rem;

    .list_title {
      display: flex;
      align-items: center;

      h3 {
        font-family: "Cocogoose";
        font-size: 1.65625rem;
        font-weight: 900;
        color: #333333;
        margin-top: 4.75rem;
        text-align: left;
      }

      .list_length {
        font-family: "nanumSquare";
        font-size: 1.65625rem;
        font-weight: 700;
        color: #ff8604;
        margin-top: 4.7rem;
        margin-left: 1.3125rem;
      }
    }

    .select_box {
      margin-top: 4.75rem;
    }
  }

  .culture_list {
    max-width: 64.8125rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: start;

    .culture_item {
      width: 18.5rem;
      margin-right: 4.625rem;
      margin-bottom: 7.6875rem;

      &:nth-child(3n) {
        margin-right: 0;
      }

      .culture_place {
        display: inline-block;
        max-width: 18rem;
        height: 1.625rem;
        background-color: #000000;
        font-size: 0.875rem;
        font-weight: normal;
        line-height: 1.95;
        text-align: left;
        color: #ffffff;
        padding: 0 0.5625rem 0 0.5625rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      figure {
        width: 100%;
        height: 23.5625rem;
        box-shadow: 0px 0.4375rem 1.8rem 0.2rem rgba(0, 0, 0, 0.33);
        margin-top: 0.875rem;
        margin-bottom: 1.625rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .culture_title {
        font-size: 1.25rem;
        font-weight: 700;
        text-align: left;
        color: #373232;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          margin-top: 0.3125rem;
          margin-bottom: 0.875rem;
          background-color: #000000;
        }
      }

      .culture_date {
        font-size: 0.96875rem;
        text-align: left;
        color: #373232;

        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          margin-top: 0.3125rem;
          background-color: #000000;
        }
      }
    }
  }
}
</style>
