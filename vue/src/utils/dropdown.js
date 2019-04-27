var $ = window.jQuery
import Utils from './functions'

export default {
  bind (el, binding, vnode) {
    Utils.onload.call(vnode.context, () => {
      const params = binding.value || {}

      el.setAttribute('data-activates', binding.arg)
      $(el).dropdown(params)
    })
  }
}
