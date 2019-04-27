<template>
  <div class="header" :style="styleObject">
    <div class="wrap">
      <div class="logo">
        <img class="log" src="../assets/logo.png" alt="">
        <img class="ch" src="../assets/24ch.png" alt="">
      </div>
      <button class="hamb" @click="stopScroll()">
        <svg
          version="1.1" 
          viewBox="0 0 32 32" 
          xml:space="preserve" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="ham_svg">
            <path d="
            M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
            s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z 
            M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
            S29.104,22,28,22z"/>
        </svg>
      </button>
      <transition name="asside">
        <div class="asside" v-show="asside">
          <div class="dark_side" @click="asside = false"></div>
          <div class="links">
            <a @click.prevent="goHome()" href="#">
              Главная
              <span></span>
            </a>
            <a @click.prevent="goPosts()" href="#">Блог</a>
            <a @click.prevent="goContacts()" href="#">Контакты</a>
          </div>
        </div>
      </transition>
      <div class="menu">
        <div class="links">
          <router-link :to="{name: 'home'}" exact>Главная</router-link>
          <router-link :to="{name: 'posts'}" exact>Блог</router-link>
          <router-link :to="{name: 'contacts'}" exact>Контакты</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header
  height: 75px
  width: 100%
  background: #262626
  text-align: right
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)
  overflow: hidden
  .wrap
    width: calc(100% - 80px)
    padding: 0 40px
    margin: 0 auto
    .logo
      float: left
      margin: 0
      img
        vertical-align: top
      img.ch
        width: 60px
        margin-top: 24px
      img.log
        width: 50px
        margin: 13px 15px 0 0
    .hamb
      width: 48px
      background-color: transparent
      border: none
      fill: rgba(255,255,255,1)
      outline: none
      cursor: pointer
      display: inline-block
      vertical-align: top
      margin-top: 16px
      display: none
    .asside
      background-color: transparent
      position: absolute
      right: 0
      top: 75px
      width: 100%
      height: 100%
      z-index: 100
      .dark_side
        float: left
        width: calc(100% - 250px)
        height: 100%
        background-color: rgba(0,0,0,.5)
      .links
        width: 250px
        float: right
        height: 100%
        background-color: #fff
        padding-top: 15px
        box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3)
        text-align: left
        a
          display: block
          text-transform: uppercase
          text-decoration: none
          color: #212121
          font-weight: bold
          text-align: right
          padding: 5px 20px 5px 20px
          font-size: 20px
    .asside-enter-active, .asside-leave-active
      transition: opacity 0.3s cubic-bezier(.65, .06, .36, 1)
    .asside-enter
      opacity: 0
    .asside-enter-to
      opacity: 1
    .fade-leave
      opacity: 1
    .asside-leave-to
      opacity: 0
    .menu
      float: right
      .links
        margin-top: 12px
        a
          margin: 0
          padding: 15px 10px
          text-transform: uppercase
          text-decoration: none
          color: #fff
          display: inline-block
          vertical-align: top
          position: relative
          font: 16px "PNR"
          letter-spacing: 1.2px
          &:after
            content: ''
            width: calc(100% - 20px)
            height: 100%
            position: absolute
            left: 10px
            top: 0
            background: transparent -webkit-linear-gradient(#fff 50%, rgba(0,0,0,0) 50%) repeat-x 0 35px / 1em 2px
            background: transparent -o-linear-gradient(#fff 50%, rgba(0,0,0,0) 50%) repeat-x 0 35px / 1em 2px
            background: transparent linear-gradient(#fff 50%, rgba(0,0,0,0) 50%) repeat-x 0 35px / 1em 2px
            display: none
          &:hover:after
            display: block
        a.router-link-active
          &:after
            display: block
@media only screen and (max-width: 1200px)
  .header
    height: 75px
    .wrap
      width: calc(100% - 30px)
      padding: 0 15px
      .menu .links
        display: none
      .hamb
        display: block
        float: right
</style>

<script>
export default {
  name: 'header',

  data () {
    var defaultProps = {
      hex: '#262626',
      hsl: {
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 1
      },
      hsv: {
        h: 150,
        s: 0.66,
        v: 0.30,
        a: 1
      },
      rgba: {
        r: 25,
        g: 77,
        b: 51,
        a: 1
      },
      a: 1
    }

    return {
      asside: false,
      colors: defaultProps
    }
  },

  mounted () {
    this.$events.on('zhorben:header-colors', (data) => {
      this.colors = data
    })
  },

  computed: {
    styleObject () {
      return 'background: ' + this.colors.hex + '; color: #000' + '; opacity: ' + this.colors.a
    }
  },

  methods: {
    goHome () {
      this.$router.push({name: 'home'})
      this.stopScroll()
    },
    goPosts () {
      this.$router.push({name: 'posts'})
      this.stopScroll()
    },
    goContacts () {
      this.$router.push({name: 'contacts'})
      this.stopScroll()
    },
    stopScroll () {
      this.$events.fire('zhorben:stop-scroll', true)
      this.asside = !this.asside
    }
  }
}
</script>
