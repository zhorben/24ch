<template>
  <div id="app" :class="{stopscroll : stopScroll}">
    <div class="for_footer">
      <zhorben-header></zhorben-header>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <zhorben-footer></zhorben-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',

  components: {
    'zhorben-header': Header,
    'zhorben-footer': Footer
  },

  mounted () {
    this.$events.on('zhorben:stop-scroll', (boolen) => {
      this.stopScroll = !this.stopScroll
    })
  },

  data () {
    return {
      stopScroll: false
    }
  }
}

</script>

<style lang="sass">
@import 'fonts/font.css' // delete this in build
@import 'fonts/font-awesome/css/font-awesome.min.css' // delete this in build

html, body
  padding: 0
  margin: 0
  height: 100%
h1, h2, h3, h4, h5
  padding: 0
  margin: 0
#app
  font-family: 'PNR', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #262626
  width: 100%
  height: 100%
  position: relative
  .for_footer
    min-height: calc(100% - 358px)
    margin-bottom: -358px
.stopscroll
  height: 100%
  overflow: hidden

.fade-enter-active, .fade-leave-active
  transition: opacity .2s linear
.fade-enter
  opacity: 0
.fade-enter-to
  opacity: 0
.fade-leave-to
  opacity: 0

@media only screen and (max-width: 768px)
  #app .for_footer
    min-height: 0
    margin-bottom: 0
</style>
