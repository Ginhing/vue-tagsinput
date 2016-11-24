<template>
  <div>
    <div>minimal example</div>
    <tags-input
      :tags="tags"
      @tags-change="handleChange"
    ></tags-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['hello', 'world'],
    }
  },
  methods: {
    handleChange(index, text) {
      if (text) {
        this.tags.splice(index, 0, text)
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
