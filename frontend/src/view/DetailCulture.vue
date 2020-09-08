<template>
  <div class="culture_container">
    <vueHeader></vueHeader>
    <div class="culture_content">
      <h1>{{culture.codename}}</h1>
      <figure>
        <img :src="culture.org_img" alt />
      </figure>
      <h3 class="content_title">{{culture.title}}</h3>
    </div>
    <div class="culture_description">
      <ul class="description_list">
        <li>
          <h5>기간</h5>
          <p>{{culture.start_date}} - {{culture.end_date}}</p>
        </li>
        <li>
          <h5>이용시간</h5>
          <p>{{culture.dateTime}}</p>
        </li>
        <li>
          <h5>장소</h5>
          <p>{{culture.place}}</p>
        </li>
        <li v-if="culture.performer != ''">
          <h5>작가</h5>
          <p>{{culture.performer}}</p>
        </li>
        <li>
          <h5>이용대상</h5>
          <p>{{culture.target}}</p>
        </li>
        <li v-if="culture.org_name != ''">
          <h5>기관명</h5>
          <p>{{culture.org_name}}</p>
        </li>
        <li>
          <h5>요금</h5>
          <p>{{culture.use_fee}}</p>
        </li>
        <li>
          <h5>문의</h5>
          <p>{{culture.tel}}</p>
        </li>
      </ul>
      <div class="description_introduce">
        <p v-if="culture.introduction != ''">{{culture.introduction}}</p>
      </div>
      <a :href="culture.homepageLink" class="hompage_link">사이트로 이동</a>
    </div>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
/* eslint-disable */
import vueHeader from "../components/Header";
import vueFooter from "../components/Footer";

export default {
  created() {
    let detailcode = this.$route.params.detailcode;

    this.$http.get(`/culture/${detailcode}`).then((response) => {
      this.culture = response.data[0];
      this.$store.commit("history", response.data[0]);
    });
  },
  data() {
    return {
      culture: {},
    };
  },
  methods: {},
  components: {
    vueHeader,
    vueFooter,
  },
};
</script>

<style lang="scss">
.culture_container {
  width: 100%;
  margin-top: 6.375rem;

  .culture_content {
    height: 59.625rem;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0px -0.475rem 1.91875rem 0.08125rem rgba(0, 0, 0, 0.66);
    background-color: #f2f3f6;
    padding-top: 5.5rem;

    h1 {
      font-size: 2.59375rem;
      font-weight: bold;
      text-align: center;
      color: #333333;
      margin-bottom: 5rem;
    }

    figure {
      width: auto;
      height: 33.1875rem;
      margin-bottom: 4.5625rem;

      img {
        width: auto;
        height: 100%;
        box-shadow: 0px 0.4375rem 1.8rem 0.2rem rgba(0, 0, 0, 0.33);
      }
    }

    h3 {
      display: inline-block;
      height: 3.5625rem;
      background-color: #000000;
      font-size: 1.65625rem;
      line-height: 2.15;
      text-align: center;
      color: #ffffff;
      padding: 0 1.875rem;
      margin: 0 auto;
    }
  }

  .culture_description {
    .description_list {
      padding-bottom: 3.5625rem;
      width: 100%;
      border-bottom: 1px solid #ebebeb;
      margin-top: 2.75rem;
      margin-bottom: 3.5rem;

      li {
        min-height: 3.4375rem;
        width: 100%;
        max-width: 58.5rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #000000;
        padding: 0.75rem 0;

        h5 {
          width: 9.375rem;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: left;
          color: #373232;
        }

        p {
          width: calc(100% - 9.375rem);
          font-size: 1.25rem;
          font-weight: normal;
          text-align: left;
          line-height: 1.5;
          color: #373232;
        }
      }
    }
    .description_introduce {
      width: 100%;
      max-width: 68rem;
      margin: 0 auto 4.75rem;

      p {
        font-size: 1.25rem;
        line-height: 1.78;
        text-align: left;
        color: #373232;
      }
    }

    .hompage_link {
      margin: 0 auto;
      width: 19.5625rem;
      height: 3.0625rem;
      border: solid 2px #282728;
      background-color: #ffffff;
      font-size: 1.25rem;
      font-weight: bold;
      text-align: center;
      line-height: 2.45;
      color: #373232;
      display: block;

      &:hover {
        background-color: #b6b6b6;
        border: solid 2px #b6b6b6;
        color: #ffffff;
      }
    }
  }
}
</style>
