<template>
  <div class="slide-container">
    <div>
      <ul
        class="inner-slide-container"
        :style="{ transform: 'translateX(' + slideEl.move + '%)' }"
      >
        <li v-for="item in slideItem" :key="item.cultcode">
          <figure>
            <img :src="item.main_img" alt="" />
          </figure>
          <div class="slide-description">
            <p>{{ item.title }}</p>
            <p>{{ item.codename }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="move-slide">
      <button @click="moveSlide(1)">O</button>
      <button @click="moveSlide(2)">O</button>
      <button @click="moveSlide(3)">O</button>
      <button @click="moveSlide(4)">O</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/culture/slide").then(response => {
      this.slideItem = response.data;
    });
  },
  data() {
    return {
      slideItem: [],
      slideEl: {
        move: -100
      },
      slideTimeSet: 1
    };
  },
  mounted() {
    this.slideTime();
  },
  methods: {
    moveSlide(itemNumber) {
      this.slideEl.move = -100 * itemNumber;
      this.slideTimeSet = itemNumber;
    },
    slideTime() {
      setInterval(() => {
        if (this.slideTimeSet < 4) this.slideTimeSet++;
        else this.slideTimeSet = 1;
        this.slideEl.move = -100 * this.slideTimeSet;
      }, 5000);
    }
  }
};
</script>

<style lang="scss">
.slide-container {
  position: absolute;
  height: 17.5rem;
  width: 100%;

  > div {
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;

    .inner-slide-container {
      height: 17.5rem;
      display: flex;
      transition: transform 0.5s;

      li {
        flex: none;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        text-align: center;

        figure {
          height: calc(100% - 20px);

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
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
}
</style>
