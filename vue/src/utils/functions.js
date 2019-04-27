/**
 * Created by zom on 24.10.2016.
 */
import VueRoutes from '../components/routes'
import Vue from 'vue'
import VueRouter from 'vue-router'

export default {
  createRouter (urls) {
    let routes = this.addRoutes(VueRoutes, urls)
    Vue.use(VueRouter)
    return new VueRouter({
      routes,
      mode: 'history',
      base: __dirname,
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
    })
  },

  onload (cb) {
    if (document.readyState === 'complete') {
      this.$nextTick(() => cb())
    } else {
      document.addEventListener('DOMContentLoaded', () => cb())
    }
  },

  getCookie (name) {
    /* eslint no-useless-escape: "off" */
    let matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
}
