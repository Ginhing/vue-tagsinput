<template>
  <div>
    <div>full example</div>
    <tags-input
      :tags="renderTags(tags)"
      @tags-change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    ></tags-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incrementId: 4,
      tags: [
        {id: 0, name: 'Tom', age: 16},
        {id: 1, name: 'Lucy', age: 16},
        {id: 2, name: 'Jim', age: 22},
        {id: 3, name: 'May', age: 18},
      ],
    }
  },
  methods: {
    handleChange(index, text) {
      if (text) {
        let tag = this.formatNewTagInsert(text)
        tag && this.dedupe(tag) && this.tags.splice(index, 0, tag)
      } else {
        this.tags.splice(index, 1)
      }
    },
    handleFocus(index) {
      console.log(`input actived in the index ${index}`)
    },
    handleBlur(index) {
      console.log(`input deactived in the index ${index}`)
    },
    formatNewTagInsert(text) {
      let id = this.incrementId++
      let [name, age] = text.split(',')
      return (name && age) ? {id, name, age: parseInt(age)} : false
    },
    renderTags(tags) {
      return tags.map(({name, age}) => ({
        text: `${name}, ${age} years old`,
        invalid: Number.isNaN(age),
        readOnly: age < 18
      }))
    },
    dedupe(newTag) {
      return !this.tags.some(({name}) => name === newTag.name)
    }
  },
  components: {
    'tags-input': require('../src/input.vue')
  }
}
</script>
