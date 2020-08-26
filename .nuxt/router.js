import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2031d954 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _3c006b49 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _4445463f = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _213382ff = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _d30624e6 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _37d7a557 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _07fdc64c = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2031d954,
    children: [{
      path: "",
      component: _3c006b49,
      name: "home"
    }, {
      path: "/login",
      component: _4445463f,
      name: "login"
    }, {
      path: "/register",
      component: _4445463f,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _213382ff,
      name: "profile"
    }, {
      path: "/settings",
      component: _d30624e6,
      name: "settings"
    }, {
      path: "/editor",
      component: _37d7a557,
      name: "editor"
    }, {
      path: "/article",
      component: _07fdc64c,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
