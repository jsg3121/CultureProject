import Vue from "vue";
import Router from "vue-router";
import DetailCulture from "@/view/DetailCulture";
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
      path: "/list/:searchText",
      name: "cultureList",
      component: CultureList
    },
    {
      path: "/category/:category",
      name: "categoryList",
      component: CultureList
    },
    {
      path: "/detail/:detailcode",
      name: "detailculture",
      component: DetailCulture
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
