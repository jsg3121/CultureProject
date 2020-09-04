<template>
  <div class="container">
    <vueHeader></vueHeader>
    <div class="detail_search">
      <div class="searchResult">
        <h4>{{ searchVal }}</h4>
        <p>&nbsp;에 관련된 문화행사를 찾았습니다.</p>
      </div>
      <div class="detail_filter">
        <div class="filter_item">
          <p class="item_title">지역</p>
          <div class="select_box" @click="dropdown">
            <p>전체</p>
            <ul class="select_option">
              <li class="option">강남구</li>
              <li class="option">금천구</li>
              <li class="option">강동구</li>
              <li class="option">광진구</li>
              <li class="option">강북구</li>
              <li class="option">강서구</li>
            </ul>
          </div>
        </div>
        <div class="filter_item">
          <p class="item_title">분류</p>
          <div class="select_box" @click="dropdown">
            <p>전체</p>
            <ul class="select_option">
              <li class="option">문화교양\/강좌</li>
              <li class="option">뮤지컬</li>
              <li class="option">국악</li>
              <li class="option">콘서트</li>
              <li class="option">전시회/미술</li>
            </ul>
          </div>
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
      <div class="select_box" @click="dropdown">
        <p>이름순으로 보기</p>
        <ul class="select_option">
          <li class="option">장소순으로 보기</li>
          <li class="option">기간순으로 보기</li>
        </ul>
      </div>
    </div>
    <div v-if="searchResult.length != 0" class="culture_list">
      <article v-for="searchList in searchResult" :key="searchList.cultcode" class="culture_item">
        <h3 class="culture_place">장소 : {{ searchList.place }}</h3>
        <figure>
          <img :src="searchList.org_img" alt />
        </figure>
        <h1 class="culture_title">{{ searchList.title }}</h1>
        <h3 class="culture_date">기간 : {{ searchList.start_date }} ~ {{ searchList.end_date }}</h3>
      </article>
    </div>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import slideVue from "../components/MainSlide";

export default {
  created() {
    let searchText = this.$route.params.searchText;
    let category = this.$route.params.category;

    console.log(searchText);
    console.log(category);

    if (searchText === undefined) {
      this.searchVal = category;

      this.$http.get(`/culture/category/${category}`).then((response) => {
        this.searchResult = response.data;
      });
    } else if (category === undefined) {
      this.searchVal = searchText;

      this.$http.get(`/culture/search/${searchText}`).then((response) => {
        this.searchResult = response.data;
      });
    }
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
  },
  methods: {
    inputSearch: function (event) {
      let text = event.target.value;
      this.searchVal = text;
    },
    dropdown: function (event) {
      let drop = event.target;
      let selectBox = document.querySelectorAll(".select_box");

      if (drop.classList.contains("select")) {
        drop.classList.remove("select");
      } else {
        for (let i = 0; i < selectBox.length; i++) {
          if (selectBox[i].classList.contains("select")) {
            selectBox[i].classList.remove("select");
          }
        }
        drop.classList.add("select");
      }
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
