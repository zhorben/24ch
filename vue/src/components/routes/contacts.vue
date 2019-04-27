<template>
	<div class="contacts">
    <div class="title">
      <div class="tit">Контакты</div>
      <div class="descr">24CH поддерживает связь 24 часа в сутки с постоянными клиентами и руководителем субъектов хозяйствования.</div>
    </div>

    <h2>Оставьте своё сообщение:</h2>
    <div class="form_wrap">
      <form name="loginform" id="loginform" :action="form.action" method="post" ref="form" novalidate @submit.stop.prevent="submit">

        <input class="small" placeholder="Ваше имя:" name="name" @keyup.enter="submitForm"></input>
        <input class="small" placeholder="Ваш телефон:" name="phone" value="" type="tel" @keyup.enter="submitForm"></input>
        <input class="small" placeholder="Ваш e-mail:" name="email" value="" type="email" @keyup.enter="submitForm"></input>

        <textarea placeholder="Оставьте ваше сообщение здесь..." name="text" id="" cols="30" rows="10"></textarea>

        <input id="user_sub" name="sub" value="Контактная форма с сайта 24CH" type="hidden"/>
        <input type="hidden" name="redirect_to" :value="form.redirect" />

      </form>

      <button type="submit" @click="submitForm()">Отправить сообщение</button>
    </div>

    <h2>Контактная информация:</h2>
    <div class="location">
      <div class="item">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>г. Минск, пер. Домашевский 11А, к.811</p>
      </div>
      <div class="item">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <a class="email" href="mailto:24businesshelp@gmail.com">24businesshelp@gmail.com</a>
      </div>
      <div class="item">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <div class="tel">
          <a href="tel:+375293890634">+375 (29) 389-06-34</a>
          <a href="tel:+375293890623">+375 (29) 389-06-23</a>
          <a href="tel:+375172136758">+375 (17) 213-67-58</a>
        </div>
      </div>
    </div>
	</div>

</template>

<style lang="sass" scoped>
.contacts
  width: 100%
  max-width: 1170px
  padding: 0 15px
  margin: 0 auto
  text-align: left
  .title
    padding: 50px 15px
    text-align: left
    .tit
      font: 30px 'PNB'
      text-transform: uppercase
      display: inline-block
      vertical-align: middle
      border-right: 4px solid #b88b58
      padding-right: 20px
      width: 170px
      text-align: right
    .descr
      display: inline-block
      vertical-align: middle
      max-width: 700px
      text-align: left
      padding-left: 15px
      text-transform: uppercase
      font-size: 18px
  h2
    font-family: "PNR"
    font-size: 24px
    font-weight: normal
    margin: 0 0 30px 0
  .form_wrap
    display: block
    form
      text-align: left
      input
        display: inline-block
        vertical-align: top
        margin: 0 25px 20px 0
        width: 100%
        max-width: 230px
        height: 30px
        padding: 10px 20px
        border: 1px solid #262626
        font-size: 14px
        &:focus
          outline: none
      textarea
        width: 100%
        max-width: 830px
        padding: 20px
        border: 1px solid #262626
        font-size: 14px
        &:focus
          outline: none
    button
      display: inline-block
      vertival-align: top
      height: 50px
      border: 4px solid #fff
      outline: 1px solid #262626
      background-color: #b88b58
      cursor: pointer
      margin: 20px 1px 70px 1px
      color: #fff
      font-family: "PNB"
      text-transform: uppercase
      letter-spacing: 1.5px
      padding: 0 15px
      transition: all .17s
      &:hover
        background-color: #262626
        color: #fff
  .location
    padding-bottom: 70px
    .item
      display: inline-block
      vertical-align: middle
      padding: 0 15px 0 0
      width: calc(33.333333% - 19px)
      i
        display: inline-block
        vertical-align: middle
        font-size: 40px
        margin: 0 15px 0 0
        color: #262626
      p
        display: inline-block
        width: calc(100% - 42px)
        vertical-align: middle
        margin: 0
        padding: 0
      a
        text-decoration: none
      a.email
        display: inline-block
        vertical-align: middle
        color: #262626
      .tel
        display: inline-block
        vertical-align: middle
        a 
          color: #262626
          display: block
          margin: 0 0 5px 0
          &:last-child
            margin: 0
            

@media only screen and (max-width: 1200px)
  .contacts
    width: calc(100% - 30px)
    padding: 30px 15px 0 15px
    .title
      padding: 25px 0 50px 25px
      .tit
        border-right: none
        border-bottom: 4px solid #b88b58
        display: inline-block
        width: auto
        padding: 0
        text-align: left
      .descr
        display: block
        padding: 0
        margin-top: 15px
    .form_wrap form
      width: 100%
      input, textarea
        width: calc(100% - 20px)
        display: block
      input
        padding: 10px
      textarea
        padding: 10px
    .location
      padding-bottom: 30px
      .item
        display: block
        width: 100%
        margin: 0 0 30px 0
        padding: 0
</style>

<script>
import Api from '../../api'

export default {
  name: 'contacts',

  data () {
    return {
      form: {
        action: Api.getRootUrl() + '/wp-content/themes/olympos/wp-login.php',
        redirect: Api.getRootUrl() + '/'
      }
    }
  },

  mounted () {},

  methods: {
    submitForm () {
      this.$refs.form.submit()
    }
  }
}
</script>