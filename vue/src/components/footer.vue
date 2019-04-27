<template>
  <div class="footer">
    <div class="wrap">
      <div class="item">
        <h2 class="firm_name">24CH</h2>
        <div class="line"></div>
        <div class="links">
          <router-link :to="{name: 'home'}" exact>Главная</router-link>
          <router-link :to="{name: 'posts'}" exact>Блог</router-link>
          <router-link :to="{name: 'contacts'}" exact>Контакты</router-link>
        </div>
      </div>
      <div class="item">
        <h2>Связь</h2>
        <div class="line"></div>
        <div class="contacts">
          <div class="tel">
            <a href="tel:+375293890634">+375 (29) 389-06-34</a>
            <a href="tel:+375293890623">+375 (29) 389-06-23</a>
            <a href="tel:+375172136758">+375 (17) 213-67-58</a>
          </div>
          <div class="email">
            <a href="mail:24businesshelp@gmail.com">24businesshelp@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="content">
          Сайт создан компанией <a href="//zhorben.by">zhoRBen</a><br>
          эксклюзивно для 24CH
        </div>
      </div>
      <div class="item">
        <div class="logo_wrap">
          <img class="logo" src="../assets/logo.png" alt="">
          <img class="law" src="../assets/law.png" alt="">
        </div>
      </div>
      <div class="clear"></div>
      <div class="info">
        Лицензия на право осуществления деятельности по оказанию юридических услуг № 02240/1789, выданная Министерством Юстиции Республики Беларусь, действительна  до 12.01.2021г.<br>
        Copyright © 2017 24CH All rights reserved.
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.footer
  height: 358px
  width: 100%
  background: #262626
  text-align: left
  overflow: hidden
  margin-top: 358px
  .wrap
    width: calc(100% - 30px)
    max-width: 1170px
    margin: 0 auto
    overflow: auto
    .info
      width: calc(100% - 30px)
      color: #979797
      font-size: 12px
      font-family: "PNB"
    .clear
      clear: both
    .item
      padding: 30px 0% 0 0
      width: 25%
      float: left
      margin: 10px 0 20px 0
      h2
        font-size: 16px
        color: #fff
        font-family: "PNB"
        font-weight: normal
        margin-bottom: 10px
      h2.firm_name
        letter-spacing: 2px
      .line
        border-bottom: 1px solid #fff
        max-width: 180px
        margin-bottom: 20px
      .links a
        display: block
        text-decoration: none
        color: #eee
        font-family: "PNR"
        text-align: left
        padding: 0
        margin: 0 0 3px 0
        font-size: 14px
        &:hover
          text-decoration: underline
      .contacts
        .tel a
          display: block
          text-decoration: none
          color: #eee
          font-family: "PNR"
          text-align: left
          padding: 0
          margin: 0 0 3px 0
          font-size: 16px
        .email a
          display: block
          text-decoration: none
          color: #eee
          font-family: "PNR"
          text-align: left
          padding: 0
          margin: 15px 0 3px 0
          font-size: 14px
          &:hover
            text-decoration: underline
      .logo_wrap
        img.logo
          width: 100%
          max-width: 160px
          display: block
          margin: 0 auto 30px auto
        img.law
          width: 80%
          max-width: 130px
          display: block
          margin: 0 auto 30px auto
      .content
        color: #eee
        font-size: 14px
        border-left: 1px solid #fff
        padding: 0 15px
        a
          color: #fff

@media only screen and (max-width: 1200px)
  .footer
    height: auto
    padding: 0 0 15px 0
    .wrap 
      .item
        width: 50%
      .info
        text-align: center
        width: 100%

@media only screen and (max-width: 768px)
  .footer
    margin-top: 0

@media only screen and (max-width: 480px)
  .footer
    height: auto
    padding: 0 0 30px 0
    .wrap .item
      width: 100%
      float: none
      text-align: center
      .line
        margin: 0 auto 20px auto
      .links a
        text-align: center
      .contacts
        .tel a, .email a
          text-align: center
      .content
        border-left: none

</style>

<script>
export default {
  name: 'footer',

  data () {
    return {}
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
