<template>
  <div class="slide-container">
    <div class="slide-item">
      <ul class="inner-slide-container" :style="{ transform: 'translateX(' + slideEl.move + '%)' }">
        <li v-for="(item, index) in slideItem" :key="item.item_num">
          <figure>
            <img :src="item.src" alt="image" draggable="false" />
          </figure>
          <h2 @click="submit(index)">{{item.title}} 문화 바로가기</h2>
          <h4 v-html="item.coment" @click="submit(index)"></h4>
        </li>
      </ul>
    </div>
    <div class="move-slide">
      <button v-for="idx in 5" :key="idx" @click="moveSlide(`${idx - 1}`)" :value="idx - 1"></button>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      slideItem: [
        {
          item_num: 1,
          src: require("../assets/image/main-slide-classic.png"),
          title: "클래식",
          coment: "힘들고 지친 일상 속에서<br>마음의 안식을 채워줍니다",
          category_name: "클래식",
        },
        {
          item_num: 2,
          src: require("../assets/image/main-slide-concert.png"),
          title: "콘서트",
          coment: "신나게 즐기다보면<br>모든 사람들과 친해진 나를 볼 수 있어요",
          category_name: "콘서트",
        },
        {
          item_num: 3,
          src: require("../assets/image/main-slide-exhibition.png"),
          title: "전시회",
          coment: "조용한 곳에서 눈으로 보는<br>마음의 평화를 얻어가세요",
          category_name: "전시",
        },
        {
          item_num: 4,
          src: require("../assets/image/main-slide-musical.png"),
          title: "뮤지컬",
          coment: "신나는 노래와 함께<br>한 편의 이야기를 즐겨보세요",
          category_name: "뮤지컬",
        },
        {
          item_num: 5,
          src: require("../assets/image/main-slide-traditional_music.png"),
          title: "국악",
          coment: "역사화 함께 전해내려온<br>우리들의 전통 음악 한마당",
          category_name: "국악",
        },
      ],
      slideEl: {
        move: 0,
      },
      slideTimeSet: 0,
    };
  },
  mounted() {
    this.slideTime();
  },
  methods: {
    moveSlide: function (itemNumber) {
      this.slideEl.move = -100 * itemNumber;
      this.slideTimeSet = itemNumber;

      let noSelect = document.querySelectorAll(".move-slide button");

      for (let i = 0; i < noSelect.length; i++) {
        noSelect[i].style.backgroundColor = "#ffffff";
      }

      noSelect[itemNumber].style.backgroundColor = "#ff8604";
    },
    slideTime: function () {
      let noSelect = document.querySelectorAll(".move-slide button");
      noSelect[0].style.backgroundColor = "#ff8604";

      setInterval(() => {
        if (this.slideTimeSet < 4) this.slideTimeSet++;
        else this.slideTimeSet = 0;

        this.slideEl.move = -100 * this.slideTimeSet;

        for (let i = 0; i < noSelect.length; i++) {
          noSelect[i].style.backgroundColor = "#ffffff";
        }

        noSelect[this.slideTimeSet].style.backgroundColor = "#ff8604";
      }, 5000);
    },
    submit: function (index) {
      this.$router.push({
        name: "categoryList",
        params: { category: this.slideItem[index].category_name },
      });
    },
  },
};
</script>

<style lang="scss">
.slide-container {
  position: relative;
  height: 43.75rem;
  width: 100%;

  .slide-item {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;

    .inner-slide-container {
      display: flex;
      transition: transform 0.5s;
      width: 100%;
      height: 100%;

      li {
        flex: none;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        text-align: center;
        position: relative;
        cursor: pointer;

        figure {
          width: 100%;
          height: 100%;

          &:after {
            content: "";
            display: block;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.75);
            width: 100%;
            height: 100%;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            position: absolute;
          }
        }

        h2 {
          color: #ffffff;
          font-size: 1.375rem;
          text-align: right;
          position: absolute;
          top: 15.0625rem;
          left: 21.6%;
          border-bottom: 0.0625rem solid #ffffff;
          padding-bottom: 0.25rem;
          cursor: pointer;
        }

        h4 {
          color: #ffffff;
          font-size: 3.125rem;
          font-weight: normal;
          text-align: left;
          position: absolute;
          top: 18.125rem;
          left: 21.6%;
          line-height: 1.2;
          cursor: pointer;
        }

        @media screen and (max-width: 1280px) {
          h2,
          h4 {
            left: 15%;
          }
        }

        .slide-description {
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .move-slide {
    position: absolute;
    bottom: 1.875rem;
    left: 50%;
    transform: translateX(-50%);

    button {
      width: 0.85rem;
      height: 0.75rem;
      border-radius: 50%;
      border: 0;
      background-color: #ffffff;
      margin-right: 0.75rem;

      & .select {
        background-color: #ff8604;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
