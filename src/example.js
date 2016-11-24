import Vue from 'vue'

new Vue({
  el: '#example',
  template: `
    <div>
      <tags-input
      :tags="tags"
      @tags-change="handleChange"
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
    handleFocus(...args) {
      console.log('active', args)
    },
    handleBlur(...args) {
      console.log(`inactive`, args)
    }
  },
  components: {
    'tags-input': require('./input.vue')
  }
})
