import Vue from 'vue'
import MinimalExample from './minimal.vue'
import FullExample from './full.vue'

new Vue({
  el: '#example',
  render(h) {
    return h('div', [
      MinimalExample,
      FullExample
    ].map(h))
  }
})
