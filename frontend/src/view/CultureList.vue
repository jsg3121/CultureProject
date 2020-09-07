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
          <p class="item_title">분류</p>
          <div class="select_box" @click="dropdown">
            <p>{{selectCategory}}</p>
            <ul class="select_option">
              <li
                class="option"
                v-for="(item, index) in category"
                :key="item.id"
                @click="selectCulture(index)"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="filter_item">
          <p class="item_title">지역</p>
          <div class="select_box" @click="dropdown">
            <p>{{selectLocate}}</p>
            <ul class="select_option">
              <li
                class="option"
                v-for="(item, index) in area"
                :key="item.id"
                @click="selectArea(index)"
              >{{item.name}}</li>
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

    if (searchText === undefined) {
      this.searchVal = category;

      this.$http.get(`/culture/category/${category}`).then((response) => {
        this.$store.state.cultureList = response.data;
        this.searchResult = this.$store.state.cultureList.slice();
      });
    } else if (category === undefined) {
      this.searchVal = searchText;

      this.$http.get(`/culture/search/${searchText}`).then((response) => {
        this.$store.state.cultureList = response.data;
        this.searchResult = this.$store.state.cultureList.slice();
      });
    }
  },
  data() {
    return {
      searchVal: "",
      searchResult: [],
      area: [
        { id: 1, name: "전체" },
        { id: 2, name: "강남구" },
        { id: 3, name: "강동구" },
        { id: 4, name: "강북구" },
        { id: 5, name: "강서구" },
        { id: 6, name: "관악구" },
        { id: 7, name: "광진구" },
        { id: 8, name: "구로구" },
        { id: 9, name: "금천구" },
        { id: 10, name: "노원구" },
        { id: 11, name: "도봉구" },
        { id: 12, name: "동대문구" },
        { id: 13, name: "동작구" },
        { id: 14, name: "마포구" },
        { id: 15, name: "서대문구" },
        { id: 16, name: "서초구" },
        { id: 17, name: "성동구" },
        { id: 18, name: "성북구" },
        { id: 19, name: "송파구" },
        { id: 20, name: "양천구" },
        { id: 21, name: "영등포구" },
        { id: 22, name: "용산구" },
        { id: 23, name: "은평구" },
        { id: 24, name: "종로구" },
        { id: 25, name: "중구" },
        { id: 26, name: "중랑구" },
      ],
      selectLocate: "전체",
      category: [
        { id: 1, name: "전체", listCategory: "" },
        { id: 2, name: "문화교양, 강좌", listCategory: "문화교양" },
        { id: 3, name: "영화", listCategory: "영화" },
        { id: 4, name: "전시, 미술", listCategory: "전시" },
        { id: 5, name: "무용", listCategory: "무용" },
        { id: 6, name: "연극", listCategory: "연극" },
        { id: 7, name: "뮤지컬, 오페라", listCategory: "뮤지컬" },
        { id: 8, name: "콘서트", listCategory: "콘서트" },
        { id: 9, name: "독주 독창회", listCategory: "독주" },
        { id: 10, name: "클래식", listCategory: "클래식" },
        { id: 11, name: "국악", listCategory: "국악" },
      ],
      selectCategory: "전체",
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
    submit: function (index) {
      this.$router.push({
        name: "detailculture",
        params: { detailcode: this.searchResult[index].cultcode },
      });
    },
    selectArea: function (index) {
      this.searchResult.splice(0);
      let data = this.$store.state.cultureList;

      if (index == 0) {
        this.searchResult = this.$store.state.cultureList.slice();
      } else {
        for (let i = 0; i < data.length; i++) {
          if (
            this.$store.state.cultureList[i].borough == this.area[index].name
          ) {
            this.searchResult.push(this.$store.state.cultureList[i]);
          }
        }
      }

      this.selectLocate = this.area[index].name;
    },
    selectCulture: function (index) {
      let category = this.category[index].listCategory;

      this.$http.get(`/culture/category/${category}`).then((response) => {
        this.$store.state.cultureList = response.data;
        this.searchResult = this.$store.state.cultureList.slice();
      });

      this.$router.push({
        name: "categoryList",
        params: { category: this.category[index].listCategory },
      });
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
