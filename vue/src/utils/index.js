import _ from 'lodash'
import Dropdown from './dropdown'
import Comment from '../components/woo-comment.vue'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  Object.defineProperty(Vue.prototype, '$config', {
    get: function get () {
      return this.$store.state.Config
    }
  })

  Object.defineProperty(Vue.prototype, '$user', {
    get: function get () {
      return this.$store.state.User.data
    }
  })

  Vue.directive('dropdown', Dropdown)
  Vue.component('woo-comment', Comment)

  /* React context-like solution */
  Vue.mixin({
    beforeCreate () {
      if (!this.$options.expose) return
      const computed = this.$options.computed || {}
      computed.$context = () => this.$options.expose.call(this, this)
      this.$options.computed = computed
    }
  })
  Vue.mixin({
    beforeCreate () {
      if (!this.$options.inject) return
      const computed = this.$options.computed || {}
      for (let key of Object.keys(this.$options.inject)) {
        const token = this.$options.inject[key]
        computed[key] = () => this.$inject({token})
      }
      this.$options.computed = computed
    },
    methods: {
      $inject ({token}) {
        let parent = this
        while (parent) {
          const $context = parent.$context
          if ($context && $context.hasOwnProperty(token)) {
            return $context[token]
          }
          parent = parent.$parent
        }
      }
    }
  })
  /* end context */
  Vue.mixin({

    created () {
      if (!this.$options.ready) {
        this.$options.ready = () => true
      }
    },

    mounted () {
      this.$options.ready.call(this)
    },

    methods: {
      t (text) {
        let lang = this.$store.state.Config.lang
        let translation = this.$store.state.Config.translations
        if (_.get(translation, text + '.' + lang)) {
          return translation[text][lang]
        } else {
          return text
        }
      },

      message (msgs, type, translate) {
        type = type || 'errors'

        let messages = {}
        messages[type] = []

        if (typeof msgs === 'string') {
          if (translate !== false) {
            messages[type].push(this.t(msgs))
          } else {
            messages[type].push(msgs)
          }
        } else {
          for (let msg of msgs) {
            if (translate !== false) {
              messages[type].push(this.t(msg))
            } else {
              messages[type].push(msg)
            }
          }
        }

        this.$events.fire('woo:message', messages)
      },

      responseError (response) {
        console.log('responseError: ', response)
      },

      getComponent (params) {
        return this.$children.find((instance) => {
          if (typeof params === 'string' && instance.$options.name === params) {
            return true
          } else {
            return params ? _.findKey(instance, params) : false
          }
        })
      }
    }
  })
}

export default plugin
