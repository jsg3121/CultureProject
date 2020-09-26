<template>
  <div class="search-container">
    <div class="inner-content">
      <h1>어떤 문화행사를 찾고계신가요?</h1>
      <div class="searchBox">
        <input
          type="text"
          class="input_text"
          :value="searchText"
          @input="inputSearch"
          @keyup.enter="submit"
          placeholder="검색어를 입력해주세요."
        />
        <figure>
          <img
            src="../assets/image/h-icon-search@2x.png"
            alt="search icon"
            @click="submit"
            draggable="false"
          />
        </figure>
      </div>
      <nav class="content_category">
        <ul class="category_list">
          <li
            class="list_item"
            v-for="item in categoryItem"
            :key="item.item_num"
          >
            <button
              class="categoryLink"
              @click="cultureCategory(item.item_num)"
            >
              {{ item.category }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryItem: [
        { item_num: 1, category: "문화교양, 강좌", searchCategory: "문화교양" },
        { item_num: 2, category: "독주, 독창회", searchCategory: "독주" },
        { item_num: 3, category: "영화", searchCategory: "영화" },
        { item_num: 4, category: "전시, 미술", searchCategory: "전시" },
        { item_num: 5, category: "무용", searchCategory: "무용" },
        { item_num: 6, category: "연극", searchCategory: "연극" },
        { item_num: 7, category: "뮤지컬, 오페라", searchCategory: "뮤지컬" },
        { item_num: 8, category: "콘서트", searchCategory: "콘서트" },
        { item_num: 9, category: "클래식", searchCategory: "클래식" },
        { item_num: 10, category: "국악", searchCategory: "국악" },
      ],
      searchText: "",
    };
  },
  methods: {
    inputSearch: function (event) {
      let text = event.target.value;
      this.searchText = text;
    },
    submit: function () {
      this.$router.push({
        name: "cultureList",
        params: { searchText: this.searchText },
      });
    },
    cultureCategory: function (index) {
      this.$router.push({
        name: "categoryList",
        params: { category: this.categoryItem[index - 1].searchCategory },
      });
      console.log(index);
      this.$store.commit(
        "cultureCategory",
        this.categoryItem[index - 1].category
      );
    },
  },
};
</script>

<style lang="scss">
.search-container {
  width: 100%;
  height: 30.5rem;
  background-color: #ebebeb;
  display: flex;

  .inner-content {
    width: 100%;
    max-width: 90rem;
    height: 100%;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-size: 2rem;
      color: #333333;
      font-weight: bold;
      margin-top: 5.4375rem;
      margin-bottom: 2.1875rem;
    }

    .searchBox {
      width: 36rem;
      height: 3.5rem;
      background-color: #ffffff;
      box-shadow: 0px 0.625rem 1.61875rem 0.06875rem rgba(0, 0, 0, 0.17);
      margin: 0 auto;
      display: flex;

      .input_text {
        width: calc(100% - 1.5rem);
        border: 0;
        padding-left: 1.5rem;
        font-family: "nanumSquare";
        font-size: 1.15625rem;
        text-align: left;
        color: #5d5d5d;
      }

      figure {
        height: calc(100% - 0.5rem);
        margin: 0.25rem 0.75rem 0.25rem 0;
        img {
          height: 100%;
          cursor: pointer;
        }
      }
    }

    .content_category {
      width: 44.25rem;
      height: 6.975rem;
      margin: 5.125rem auto 0;

      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          width: 19.8%;
          height: 3.375rem;
          border: solid 0.125rem #ffffff;
          background-color: #ffffff;
          cursor: pointer;

          &:hover {
            border: solid 0.125rem #ff8604;

            .categoryLink {
              color: #ff8604;
              line-height: 3;
            }
          }

          .categoryLink {
            width: 100%;
            height: 100%;
            font-size: 1.15625rem;
            font-weight: normal;
            line-height: 3;
            text-align: center;
            color: #333333;
            display: block;
            border: 0;
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
