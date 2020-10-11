<template>
  <div class="pagination">
    <figure>
      <img src="../assets/image/icon-page-1@2x.png" alt />
    </figure>
    <figure>
      <img src="../assets/image/icon-page-2@2x.png" alt />
    </figure>
    <ul class="pageNum">
      <li v-for="list in pagination" :key="list">
        <p>{{ list }}</p>
      </li>
    </ul>
    <figure>
      <img src="../assets/image/icon-page-3@2x.png" alt />
    </figure>
    <figure>
      <img src="../assets/image/icon-page-4@2x.png" alt />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["paginationLength"],
  created() {
    this.pagination = this.paginationLength;
    console.log(this.pagination);
  },
  mounted() {},
  data() {
    return {
      pagination: 10,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  margin-bottom: 16.625rem;

  figure {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
    cursor: pointer;

    &:nth-child(2n) {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  ul {
    height: 100%;
    margin: 0 0.25rem;
    display: flex;
    align-items: center;

    li {
      height: 100%;
      min-width: 1.5625rem;
      margin: 0 0.5rem;
      cursor: pointer;
      font-size: 0.96875rem;
      line-height: 1.6;
      font-weight: 800;
      text-align: center;
      color: #373232;

      &.active {
        color: #ff8604;
      }
    }
  }
}
</style>