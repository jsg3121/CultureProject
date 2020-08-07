import Vue from 'vue'
import Router from 'vue-router'
import CultureList from '@/components/CultureListPage'
import DetailCulture from '@/components/DetailCulture'
import Header from '@/components/Header'
import Main from '@/view/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/:cultcode',
      name: 'detailculture',
      component: DetailCulture
    }
  ]
})
