<template>
  <div class="slide-container">
    <div class="slide-item">
      <ul class="inner-slide-container" :style="{ transform: 'translateX(' + slideEl.move + '%)' }">
        <li v-for="item in slideItem" :key="item.item_num">
          <figure>
            <img :src="item.src" alt="image" />
          </figure>
          <h2>{{item.title}}</h2>
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
        },
        {
          item_num: 2,
          src: require("../assets/image/main-slide-concert.png"),
          title: "콘서트",
        },
        {
          item_num: 3,
          src: require("../assets/image/main-slide-exhibition.png"),
          title: "전시회",
        },
        {
          item_num: 4,
          src: require("../assets/image/main-slide-musical.png"),
          title: "뮤지컬",
        },
        {
          item_num: 5,
          src: require("../assets/image/main-slide-traditional_music.png"),
          title: "국악",
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
    moveSlide(itemNumber) {
      this.slideEl.move = -100 * itemNumber;
      this.slideTimeSet = itemNumber;

      let noSelect = document.querySelectorAll(".move-slide button");

      for (let i = 0; i < noSelect.length; i++) {
        noSelect[i].style.backgroundColor = "#ffffff";
      }

      noSelect[itemNumber].style.backgroundColor = "#ff8604";
    },
    slideTime() {
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
          position: absolute;
          color: #ffffff;
          font-size: 20px;
          top: 0;
          width: 8rem;
        }

        .slide-description {
          margin-top: 4px;
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
      width: 12px;
      height: 12px;
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
