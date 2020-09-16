<template>
  <div class="history-container">
    <h4>최근 본 게시물</h4>
    <ul>
      <li v-for="(idx, i) in history" :key="i" @click="submit(idx.cultcode)">
        <figure>
          <img :src="idx.org_img" alt />
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.history = this.$store.state.history;
    window.addEventListener("scroll", this.moveHistory);
  },
  data() {
    return {
      history: [],
    };
  },
  methods: {
    moveHistory: function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 226) {
        document.querySelector(".history-container").style.top =
          scrollTop / 16 + 8 + "rem";
      }
    },
    submit: function (cultcode) {
      this.$router.push({
        name: "detailculture",
        params: { detailcode: cultcode },
      });
    },
  },
};
</script>

<style lang="scss">
.history-container {
  width: 8.75rem;
  box-shadow: 0px 0.3125rem 0.3125rem 0.01875rem rgba(0, 0, 0, 0.18);
  background-color: #ffffff;
  position: absolute;
  z-index: 50;
  right: 15%;
  top: 21.375rem;
  padding-bottom: 0.625rem;
  transition: 0.3s;

  h4 {
    font-size: 0.875rem;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
    margin-top: 0.75rem;
  }

  ul {
    width: 8rem;
    background-color: #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0.8125rem auto 0;
    padding: 0.625rem 0;

    li {
      margin-bottom: 0.625rem;

      &:last-child {
        margin-bottom: 0;
      }

      figure {
        width: 6.875rem;
        height: 8.75rem;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-color: #ffffff;
        }
      }
    }
  }
}

@media screen and (max-width: 1880px) {
  .history-container {
    right: 3%;
  }
}

@media screen and (max-width: 1140px) {
  .history-container {
    display: none !important;
  }
}
</style>
