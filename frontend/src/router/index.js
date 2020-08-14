import Vue from "vue";
import Router from "vue-router";
import DetailCulture from "@/components/DetailCulture";
import Main from "@/view/Main";
import CultureList from "@/view/CultureList";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/:searchText",
      name: "cultureList",
      component: CultureList
    },
    {
      path: "/:cultcode",
      name: "detailculture",
      component: DetailCulture
    }
  ]
});
