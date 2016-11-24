<template>
  <div :class="klass.container">
    <template v-for="(item, index) in normalizeTagItems">
      <typing
        :index="index"
        :typing="index === typingIndex"
        :handle-insert="insertTag"
        :handle-remove="removeTag"
        :active-other="activeOther"
        @click="focus(index)"
        @blur="blur(index)"
      >
        <span v-show="index === length && showPlaceholder" :class="klass.placeholder">{{placeholder}}</span>
      </typing>
      <tag v-if="index !== length"
      :text="item.text" :remove="getRemoveHandle(item, index)" :invalid="item.invalid">
      </tag>
    </template>
  </div>
</template>
<style scoped>
.tags-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.3);
  font-size: 0.75rem;
  padding: 0.1rem 0
}

.placeholder {
  display: inline-block;
  color: #A9A9A9;
  line-height: 2em;
  white-space: nowrap;
}
</style>
<script>
import {arr, obj} from 'vuept'
import { klass } from './lib'
export default {
  props: {
    /**
     * Array<{
     *   text: String,
     *   readOnly: Boolean,
     *   invalid: Boolean
     * }>
     */
    tags: arr.required,
    placeholder: String,
    klass: obj.default(() => klass),
  },
  data() {
    return {
      typingIndex: -1
    }
  },
  computed: {
    normalizeTagItems() {
      return this.tags.map(item => typeof item === 'string' ? {text: item} : item).concat(null)
    },
    showPlaceholder() {
      return this.placeholder && this.typingIndex < 0
    },
    length() {
      return this.tags.length
    }
  },
  methods: {
    focus(index) {
      if (this.typingIndex === -1) {
        this.$emit('focus', index)
      }
      this.typingIndex = index
    },
    blur(index) {
      // it will be false when caused by keyPress events
      if (index === this.typingIndex) {
        this.$emit('blur', index)
        this.typingIndex = -1
      }
    },
    removeTag(index) {
      if (index >= 0 && !this.tags[index].readOnly) {
        this.$emit('tags-change', index, undefined)
      }
    },
    insertTag(index, text) {
      this.$emit('tags-change', index, text)
    },
    activeOther(index) {
      if (index >= 0 && index <= this.length) {
        this.typingIndex = index
      }
    },
    getRemoveHandle(item, index) {
      return item.readOnly ? null : () => this.removeTag(index)
    }
  },
  components: {
    tag: require('./tag.vue'),
    typing: require('./typing.vue')
  }
}
</script>
