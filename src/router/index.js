import Vue from 'vue'
import Router from 'vue-router'

import Web from './Web'
import User from './User'
import Dashboard from './Dashboard'
import Error from './Error'

Vue.use(Router)

const routes = [
  ...Web,
  ...User,
  ...Dashboard,
  ...Error
]

const router = new Router({routes})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
