<template>
  <div class="popular_container">
    <div class="program">
      <h3>[ PROGRAM ]</h3>
      <h6>이번달 인기있는 전시들을 한눈에 알아보세요</h6>
      <div class="program_container">
        <button class="btn_prev" @click="prev"></button>
        <div class="list_box">
          <ul
            class="program_list"
            :style="{transform: 'translateX(' + (56.9 * programMove) + 'rem)'}"
          >
            <li
              class="list_item"
              v-for="proList in programCulture"
              :key="proList.cultcode"
              @click="submit(proList.cultcode)"
            >
              <figure>
                <img :src="proList.org_img" alt />
              </figure>
              <h5 class="culture_title">{{proList.title}}</h5>
              <p>{{proList.place}}</p>
              <p>{{proList.start_date}} ~ {{proList.end_date}}</p>
            </li>
          </ul>
        </div>
        <button class="btn_next" @click="next"></button>
      </div>
    </div>
    <div class="whats_on">
      <h3>[ WHAT's ON ]</h3>
      <h6>운영자가 추천하는 오늘의 문화행사!</h6>
      <div class="whatsOn_container">
        <div class="inner_content" v-for="content in whatsOn" :key="content.cultcode">
          <figure>
            <img :src="content.org_img" alt />
          </figure>
          <div class="content_description">
            <h5>{{content.title}}</h5>
            <p>{{content.introduction}}</p>
            <router-link
              :to="{name:'detailculture', params: {detailcode:content.cultcode}}"
              class="detail_culture"
            >자세히 보기 &gt;</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/culture/program").then((response) => {
      this.programCulture = response.data;
    });
    this.$http.get("/culture/whatsOn").then((response) => {
      this.whatsOn = response.data;
    });
  },
  data() {
    return {
      programCulture: [],
      whatsOn: [],
      programMove: 0,
    };
  },
  methods: {
    submit: function (id) {
      this.$router.push({
        name: "detailculture",
        params: { detailcode: id },
      });
    },
    next: function () {
      if (this.programMove > -2) {
        this.programMove--;
      } else {
        this.programMove == -2;
      }
    },
    prev: function () {
      if (this.programMove < 0) {
        this.programMove++;
      } else {
        this.programMove == 0;
      }
    },
  },
};
</script>

<style lang="scss">
.popular_container {
  width: 100%;
  height: 118.0625rem;

  .program {
    h3 {
      font-family: "Cocogoose";
      font-size: 1.65625rem;
      font-weight: 900;
      color: #333333;
      margin-top: 7.125rem;
      margin-bottom: 0.875rem;
      text-align: center;
    }

    h6 {
      font-size: 1.15625rem;
      font-weight: 500;
      color: #adadad;
      text-align: center;
    }

    .program_container {
      display: flex;
      align-items: center;
      justify-content: center;

      .list_box {
        max-width: 58.4rem;
        overflow: hidden;
        padding: 3.9375rem 2.5rem 0;

        .program_list {
          display: flex;
          width: 100%;
          width: 167.025rem;
          justify-content: space-between;
          transition: transform 0.5s;

          .list_item {
            cursor: pointer;
            width: 15.4375rem;

            figure {
              width: 15.4375rem;
              height: 19.6875rem;
              box-shadow: 0.0625rem 0.3875rem 1.075rem 0.125rem
                rgba(0, 0, 0, 0.33);

              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }

            .culture_title {
              width: 11.5625rem;
              font-size: 1rem;
              font-weight: bold;
              text-align: center;
              color: #373232;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 2.625rem auto 0;

              &:after {
                content: "";
                width: 1.5rem;
                height: 0.1875rem;
                background-color: #333333;
                display: block;
                margin: 0.5625rem auto 1.5rem;
              }
            }

            p {
              width: 13.4375rem;
              font-size: 0.875rem;
              font-weight: normal;
              text-align: center;
              color: #373232;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 0 auto 0.5625rem;
            }
          }
        }
      }
      button {
        width: 2.25rem;
        height: 3.75rem;
        border: 0;
        margin-top: -3.25rem;

        &.btn_prev {
          margin-right: 2.625rem;
          background: url(../assets/image/h-con-icon-before-n.png)
            center/contain no-repeat;

          &:active {
            background: url(../assets/image/h-con-icon-before-s.png)
              center/contain no-repeat;
          }
        }

        &.btn_next {
          margin-left: 2.625rem;
          background: url(../assets/image/h-con-icon-next-n.png) center/contain
            no-repeat;

          &:active {
            background: url(../assets/image/h-con-icon-next-s.png)
              center/contain no-repeat;
          }
        }
      }
    }
  }

  .whats_on {
    h3 {
      font-family: "Cocogoose";
      font-size: 1.65625rem;
      font-weight: 900;
      color: #333333;
      margin-top: 10.125rem;
      margin-bottom: 0.875rem;
      text-align: center;
    }

    h6 {
      font-size: 1.15625rem;
      font-weight: 500;
      color: #adadad;
      text-align: center;
    }

    .whatsOn_container {
      width: 100%;
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 4rem;

      .inner_content {
        display: flex;
        height: 17.25rem;
        margin-bottom: 3.625rem;

        figure {
          height: 100%;
          width: 33.125rem;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
        }

        .content_description {
          width: calc(100% - 35rem);
          margin-left: 1.875rem;
          position: relative;

          h5 {
            font-size: 1.25rem;
            font-weight: 700;
            text-align: left;
            color: #333333;
            margin-bottom: 2.375rem;
          }

          p {
            font-size: 0.875rem;
            font-weight: normal;
            line-height: 1.71;
            letter-spacing: -0.28px;
            text-align: left;
            color: #333333;
          }

          .detail_culture {
            font-size: 1rem;
            font-weight: 700;
            text-align: left;
            color: #333333;
            position: absolute;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>