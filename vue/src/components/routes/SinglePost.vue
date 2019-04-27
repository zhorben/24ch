<template>
	<div class="single_post_wrap">
    <div class="single_post">
      <loading v-if="!loaded"></loading>

      <div class="singlepost" v-if="loaded">
        <h1>{{singlepost.title.rendered}}</h1>
        <div class="info">
          <div>24CH</div>
          <div>{{singlepost.date | dateFormate}}</div>
        </div>
        <div class="content" v-html="singlepost.content.rendered"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.single_post_wrap
  padding: 0
  .single_post
    width: 100%
    max-width: 1170px
    padding: 20px 15px 0 15px
    margin: 0 auto
    text-align: left
    background-color: #fff
    .singlepost
      padding: 19px 56px 35px 40px
      h1
        font: 34px/42px "PTR", Helvetica, Arial, sans-serif
        font-weight: normal
        color: #000
        max-width: 780px
      img
        max-width: 100% !important
      .info
        margin-top: 15px
        div
          font-size: 15px
          color: #808080
          display: inline-block
          margin-right: 15px
          vertical-align: top
      .content
        max-width: 650px
        margin-top: 25px
@media only screen and (max-width: 1200px)
  .single_post_wrap .single_post
    width: calc(100% - 30px)
@media only screen and (max-width: 768px)
  .single_post_wrap .single_post .singlepost
    h1
      font-size: 24px
      line-height: 28px
@media only screen and (max-width: 480px)
  .single_post_wrap .single_post .singlepost
    padding: 19px 0 35px 0

</style>

<style lang="sass">
.single_post_wrap .single_post .singlepost .content
  img
    max-width: 100%
    width: auto
    height: auto
  p
    font: 16px/24px "PTR", Helvetica, Arial, sans-serif
    color: #000
    margin: 16px 0
    em
      font-family: "PTI", Helvetica, Arial, sans-serif
      font-style: normal
  hr
    margin: 20px 0
    border: none
    height: 1px
    padding: 20px 0
    position: relative
    background: transparent url(../../assets/paragraph.png) no-repeat top center
    background-size: 30px 36px
    &:after, &:before
      content: ''
      width: 30%
      position: absolute
      top: 15px
      border: 1px solid rgb(216, 216, 216)
    &:after
      left: 10%
    &:before
      right: 10%
  a
    text-decoration: none
    color: #000
    position: relative
    cursor: pointer
    transition: color 0.1s
    background: transparent -webkit-linear-gradient(#b88b58 50%, rgba(0,0,0,0) 50%) repeat-x 0 100% / 1em 2px
    background: transparent -o-linear-gradient(#b88b58 50%, rgba(0,0,0,0) 50%) repeat-x 0 100% / 1em 2px
    background: transparent linear-gradient(#b88b58 50%, rgba(0,0,0,0) 50%) repeat-x 0 100% / 1em 2px
    &:hover
      color: #b88b58
  ul
    margin: 16px 0
    padding: 0
    list-style-type: none
    li
      font: 16px/24px "PTR", Helvetica, Arial, sans-serif
      color: #000
      padding-left: 30px
      position: relative
      margin: 0 0 10px
      &:before
        content: '\2022'
        position: absolute
        left: 5px
        top: 0
        width: 8px
        text-align: center
        color: #b88b58
        font-size: 16px
        line-height: inherit
  div.wp-caption
    max-width: 100%
    p.wp-caption-text
      margin: 0
      color: #666
      font-size: 13px
      line-height: normal
      text-align: center

</style>

<script>
import moment from 'moment'
import loading from '../loading.vue'

export default {
  name: 'singlepost',

  data () {
    return {
      singlepost: [],
      loaded: false
    }
  },

  components: {
    'loading': loading
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      this.loading = true
      this.$http.get('blogs/' + this.$route.params.postID).then((response) => {
        this.singlepost = response.data
        this.loaded = true
      }, (response) => {
        console.log('error', response)
      })
    }
  },

  filters: {
    dateFormate (value) {
      if (value) {
        moment.locale('ru')
        return moment(String(value)).format('Do MMMM YYYY, LT')
      }
    }
  }
}
</script>