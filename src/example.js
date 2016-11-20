import Vue from 'vue'

new Vue({
  el: '#example',
  template: `
    <div>
      <tags-input
      :tags="tags"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      placeholder="input something"
      ></tags-input>
    </div>
  `,
  data() {
    return {
      tags: [{text: 'hello', invalid: true, readOnly: true}, {text: 'world'}],
    }
  },
  methods: {
    handleChange(index, tag) {
      if (tag) {
        this.tags.splice(index, 0, tag)
      } else {
        this.tags.splice(index, 1)
      }
    },
    handleFocus() {
      console.log('active')
    },
    handleBlur($el) {
      console.log(`inactive input with value: ${$el.value}`)
    }
  },
  components: {
    'tags-input': require('./input.vue')
  }
})
