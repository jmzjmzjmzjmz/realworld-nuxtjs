import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _112b9f5f = () => interopDefault(import('../pages/editor/index.vue' /* webpackChunkName: "pages/editor/index" */))
const _27db2566 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _5b3e64d5 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _07af1d68 = () => interopDefault(import('../pages/article/components/article-comments.vue' /* webpackChunkName: "pages/article/components/article-comments" */))
const _308298dd = () => interopDefault(import('../pages/article/components/article-meta.vue' /* webpackChunkName: "pages/article/components/article-meta" */))
const _4da901dc = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _690fd7b0 = () => interopDefault(import('../pages/profile/_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _d0c4b99a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0c3f869c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _359b7d44 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _112b9f5f,
    name: "editor"
  }, {
    path: "/login",
    component: _27db2566,
    name: "login"
  }, {
    path: "/settings",
    component: _5b3e64d5,
    name: "settings"
  }, {
    path: "/article/components/article-comments",
    component: _07af1d68,
    name: "article-components-article-comments"
  }, {
    path: "/article/components/article-meta",
    component: _308298dd,
    name: "article-components-article-meta"
  }, {
    path: "/article/:slug?",
    component: _4da901dc,
    name: "article-slug"
  }, {
    path: "/profile/:username?",
    component: _690fd7b0,
    name: "profile-username"
  }, {
    path: "/",
    component: _d0c4b99a,
    name: "index"
  }, {
    path: "/register",
    component: _0c3f869c,
    name: "register"
  }, {
    path: "/editor/:_slug",
    component: _359b7d44,
    name: "editor"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
