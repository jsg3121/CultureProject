<template>
  <div class="history-container">
    <h4>최근 본 게시물</h4>
    <ul>
      <li v-for="(idx, i) in history" :key="i">
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
  },
  data() {
    return {
      history: [],
    };
  },
};
</script>

<style lang="scss">
.history-container {
  width: 8.75rem;
  height: 32.375rem;
  box-shadow: 0px 5px 12.7px 0.3px rgba(0, 0, 0, 0.18);
  background-color: #ffffff;
  position: fixed;
  z-index: 100;
  right: 15%;
  top: 21.375rem;

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
    height: 29.5rem;
    background-color: #f3f2f2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.8125rem auto 0;

    li {
      figure {
        width: 6.875rem;
        height: 8.75rem;
        img {
          width: 100%;
          height: 100%;
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
</style>
