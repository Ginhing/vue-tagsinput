import Vue from 'vue'
import MinimalExample from './minimal.vue'

new Vue({
  el: '#example',
  render(h) {
    return h('div', [
      MinimalExample
    ].map(h))
  }
})
