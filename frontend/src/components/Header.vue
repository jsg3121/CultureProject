<template>
  <header class="header">
    <div class="header_container">
      <figure class="logo" @click="goMain">
        <img src="../assets/image/h-main-logo@2x.png" alt />
      </figure>
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
    </div>
  </header>
</template>

<script>
/* eslint-disable */
export default {
  created() {},
  data() {
    return {
      searchText: this.$route.params.searchText,
    };
  },
  methods: {
    inputSearch: function (event) {
      let text = event.target.value;
      this.searchText = text;
    },
    submit: function () {
      if (this.searchText == "") {
        alert("검색어를 입력해주세요.");
      } else {
        this.$store.state.selectCategory = "전체";
        this.$router.push({
          name: "cultureList",
          params: { searchText: this.searchText },
        });
      }
    },
    goMain: function () {
      this.$router.push({
        name: "main",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 6.375rem;
  box-shadow: 0px 5px 14.4px 0.6px rgba(0, 0, 0, 0.17);
  background-color: #ebebeb;
  position: fixed;
  top: 0;
  z-index: 100;

  .header_container {
    height: 100%;
    width: 100%;
    max-width: 64.8125rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .logo {
      width: 8.25rem;
      height: 3.625rem;
      cursor: pointer;

      img {
        height: 100%;
        width: auto;
      }
    }

    .searchBox {
      width: 33.8125rem;
      height: 2.75rem;
      background-color: #ffffff;
      box-shadow: 0px 0.625rem 1.61875rem 0.06875rem rgba(0, 0, 0, 0.17);
      margin: 0 auto;
      display: flex;

      .input_text {
        width: calc(100% - 0.9375rem);
        border: 0;
        padding-left: 0.9375rem;
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
  }
}
</style>
