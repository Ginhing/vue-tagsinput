<template>
  <tags-input
    :tags="tags"
    @tags-change="handleChange"
  ></tags-input>
</template>

<script>
export default {
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
    }
  },
  components: {
    'tags-input': require('../src/input.vue')
  }
}
</script>
