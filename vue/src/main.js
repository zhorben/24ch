import Vue from 'vue'
import VueResource from 'revue-resource'
Vue.use(VueResource)

var API_ROOT = 'http://' + window.location.hostname
Vue.http.options.root = API_ROOT + '/wp-json/wp/v2'
Vue.http.headers.common['Authorization'] = 'Basic ahskdjshjdkhsakjhd'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueEvents from 'vue-events'
Vue.use(VueEvents)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./components/routes/Home.vue'), name: 'home' },
    { path: '/posts', component: require('./components/routes/Posts.vue'), name: 'posts' },
    { path: '/post/:postID/:postSlug', component: require('./components/routes/SinglePost.vue'), name: 'post' },
    { path: '/contacts', component: require('./components/routes/contacts.vue'), name: 'contacts' }
    // { path: '*', redirect: '/' }
  ]
})

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>'
})
