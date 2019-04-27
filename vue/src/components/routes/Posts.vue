<template>
	<div class="posts">

    <loading v-if="loaded"></loading>

    <div class="post-wrap" v-for="post in posts" v-if="!loaded">
      <div class="img_wrap">
        <img :src="post.thumbnail" alt="">
        <div class="icon_wrap">
          <i class="fa fa-book" aria-hidden="true"></i>
        </div>
        <div class="title">{{post.title.rendered}}</div>
      </div>
      <div class="date">{{post.date | dateFormate}}</div>
      <div class="descr">{{post.description}}</div>
      <div class="clear"></div>
      <div class="button_wrap">
        <router-link :to="{name: 'post', params:{ postSlug: post.slug, postID: post.id } }" tag="button">читать</router-link>
      </div>
      <div class="clear"></div>
    </div>

    <div class="clear"></div>

    <pagination v-if="!loaded"
      :current="currentPage" 
      :total="totalPosts" 
      :perPage="perPage" 
      @page-changed="fetchData"
    ></pagination>

	</div>
</template>



<style lang="sass">
.posts
  width: 100%
  max-width: 1170px
  padding: 0 15px
  margin: 0 auto
  padding-bottom: 100px // delete this
  padding-top: 60px
  .post-wrap
    display: block
    width: 550px
    margin-bottom: 50px
    &:nth-child(odd)
      float: left
    &:nth-child(even)
      float: right
    .img_wrap
      width: 100%
      height: 300px
      display: inline-block
      position: relative
      overflow: hidden
      vertical-align: top
      img
        position: absolute
        width: 100%
        height: auto
        transform: translateY(-50%)
        top: 50%
        left: 0
        min-height: 100%
      .icon_wrap
        width: 40px
        height: 40px
        background-color: #b88b58
        position: absolute
        right: 430px
        bottom: 0
        i
          color: #fff
          font-size: 23px
          margin-top: 8px
      .title
        padding: 0 15px
        height: 55px
        line-height: 55px
        font-weight: bold
        text-transform: uppercase
        text-align: right
        position: absolute
        bottom: 0
        right: 0
        width: 400px
        background-color: #fff
        color: #000
        font-size: 16px
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
    .date
      width: 120px
      float: left
      text-align: center
      padding: 20px 0
      color: rgb(127, 127, 127)
    .descr
      padding: 15px 15px 0 15px
      text-align: left
      height: 120px
      overflow: hidden
      max-width: 400px
      float: right
      font-size: 18px
      line-height: 28px
      color: rgb(127, 127, 127)
      img
        width: 100%
    .button_wrap
      float: right
      width: 430px
      text-align: left
      button
        width: 100px
        height: 35px
        border: 2px solid #b88b58
        font-size: 12px
        background-color: #fff
        text-transform: uppercase
        font-weight: bold
        margin: 10px 0 0 15px
        transition: all 0.17s
        cursor: pointer !important
        &:hover
          background-color: #b88b58
          color: #fff
        &:active, &:focus
          outline: none
  .load_more
    display: block
    height: 30px
    width: 140px
    margin: 0 auto
    margin-bottom: 130px
    cursor: pointer
  .clear
    clear: both

@media only screen and (max-width: 1200px)
  .posts
    width: calc(100% - 30px)
    padding: 40px 15px
    .post-wrap
      width: 100%
      max-width: 550px
      margin: 0 auto 50px auto
      &:nth-child(odd)
        float: none
      &:nth-child(even)
        float: none

@media only screen and (max-width: 768px)
  .posts
    .post-wrap
      .img_wrap
        width: 100%
        height: 300px
        display: inline-block
        position: relative
        overflow: hidden
        vertical-align: top
        .icon_wrap
          width: 30px
          height: 30px
          background-color: #b88b58
          right: calc(70% + 30px)
          i
            font-size: 15px
            margin-top: 7px
        .title
          height: 40px
          line-height: 40px
          width: 70%
          font-size: 14px
      .date
        width: calc(30% - 30px)
      .descr
        width: 70%
        font-size: 18px
        line-height: 28px
      .button_wrap
        float: none
        width: 100%
        position: relative
        button
          position: absolute
          top: -60px
          left: 0
          margin: 10px 0 0 0

@media only screen and (max-width: 480px)
  .posts .post-wrap
    display: block
    margin: 0 auto 20px auto
    .img_wrap
      height: 200px
    .descr
      font-size: 16px
      line-height: 24px
      height: 95px
    .button_wrap
      text-align: center
      button
        position: relative
        top: 0
        left: 0
        margin: 20px 0 0 0
</style>

<script>
import Pagination from '../pagination.vue'
import loading from '../loading.vue'
import moment from 'moment'

export default {
  name: 'posts',

  data () {
    return {
      posts: [],
      loaded: false,
      totalPosts: 0,
      perPage: 6,
      currentPage: 1
    }
  },

  components: {
    'pagination': Pagination,
    'loading': loading
  },

  created () {
    this.fetchData(this.currentPage)
  },

  methods: {
    fetchData (page) {
      this.loaded = true

      var options = {
        params: {
          page: page,
          per_page: this.perPage
        }
      }

      this.$http.get('blogs', options).then((response) => {
        this.posts = response.data
        this.totalPosts = parseInt(response.headers.get('x-wp-total'))
        this.currentPage = page
        this.loaded = false
      }, (response) => {
        console.log('error', response)
      })
    }
  },

  filters: {
    dateFormate (value) {
      if (value) {
        moment.locale('ru')
        return moment(String(value)).format('D MMM YYYY')
      }
    }
  }
}
</script>