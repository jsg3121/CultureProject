import Vue from 'vue'
import Router from 'vue-router'
import CultureList from '@/components/CultureListPage'
import DetailCulture from '@/components/DetailCulture'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'culturelist',
      component: CultureList
    },
    {
      path: '/:cultcode',
      name: 'detailculture',
      component: DetailCulture
    }
  ]
})
