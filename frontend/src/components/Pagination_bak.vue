<template>
  <div class="pagination">
    <figure>
      <img src="../assets/image/icon-page-1@2x.png" @click="prev10" alt />
    </figure>
    <figure>
      <img src="../assets/image/icon-page-2@2x.png" @click="prevPage" alt />
    </figure>
    <ul class="pageNum">
      <li
        @click="pageMove(index)"
        v-for="index in parseInt(searchResult.length / 9) + 1 > 10
          ? pageing()
          : parseInt(searchResult.length / 9) + 1"
        :key="index"
      >
        {{ numbering(index) }}
      </li>
    </ul>
    <figure>
      <img src="../assets/image/icon-page-3@2x.png" @click="nextPage" alt />
    </figure>
    <figure>
      <img src="../assets/image/icon-page-4@2x.png" @click="next10" alt />
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: [],
    };
  },
  methods: {
    pageMove: function (index) {
      this.pageIndex = index + this.pageNumbering;

      this.pageList.splice(0);
      this.pageList = this.searchResult.slice(
        (this.pageIndex - 1) * 9,
        (this.pageIndex - 1) * 9 + 9
      );

      let list = document.querySelectorAll(".pageNum li");
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
      }

      list[index - 1].classList.add("active");
    },
    nextPage: function () {
      if (this.pageIndex < parseInt(this.searchResult.length / 9) + 1) {
        if (this.pageIndex % 10 == 0) {
          this.pageNumbering += 10;
        }

        let list = document.querySelectorAll(".pageNum li");
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("active");
        }

        list[this.pageIndex % 10].classList.add("active");

        let index = this.pageIndex;

        this.pageList.splice(0);
        this.pageList = this.searchResult.slice(index * 9, index * 9 + 9);
        this.pageIndex++;
      }
    },
    prevPage: function () {
      if (this.pageIndex > 1) {
        if (this.pageIndex % 10 == 1) {
          this.pageNumbering -= 10;
        }

        let index = this.pageIndex;

        this.pageList.splice(0);
        this.pageList = this.searchResult.slice(
          (index - 2) * 9,
          (index - 2) * 9 + 9
        );
        this.pageIndex--;

        let list = document.querySelectorAll(".pageNum li");
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("active");
        }
        if (this.pageIndex % 10 == 0) {
          list[list.length - 1].classList.add("active");
        } else {
          list[(this.pageIndex % 10) - 1].classList.add("active");
        }
      }
    },
    next10: function () {
      if (
        parseInt(this.searchResult.length / 9) + 1 > 10 &&
        this.pageNumbering <
          (Math.ceil(this.searchResult.length / 100) - 1) * 10
      ) {
        this.pageNumbering = this.pageNumbering + 10;
        this.pageIndex = this.pageNumbering + 1;

        let index = this.pageIndex;

        this.pageList.splice(0);
        this.pageList = this.searchResult.slice(
          (index - 1) * 9,
          (index - 1) * 9 + 9
        );

        let list = document.querySelectorAll(".pageNum li");
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("active");
        }
        list[0].classList.add("active");
      }
    },
    prev10: function () {
      if (this.pageNumbering > 0) {
        this.pageNumbering = this.pageNumbering - 10;
        this.pageIndex = this.pageNumbering + 1;

        let index = this.pageIndex;

        this.pageList.splice(0);
        this.pageList = this.searchResult.slice(
          (index - 1) * 9,
          (index - 1) * 9 + 9
        );

        let list = document.querySelectorAll(".pageNum li");
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("active");
        }
        list[0].classList.add("active");
      }
    },
    numbering: function (index) {
      return index + this.pageNumbering;
    },
    pageing: function () {
      if (
        this.pageNumbering <
        (Math.ceil(this.searchResult.length / 100) - 1) * 10
      ) {
        return 10;
      } else if (
        this.pageNumbering ==
        (Math.ceil(this.searchResult.length / 100) - 1) * 10
      ) {
        return (
          10 -
          (Math.ceil(this.searchResult.length / 100) * 10 -
            (parseInt(this.searchResult.length / 9) + 1))
        );
      }
    },
  },
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