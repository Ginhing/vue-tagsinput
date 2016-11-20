<template>
  <div :class="klass.container" @mousedown.self.prevent>
    <template v-for="(index, item) in tags | normalizeTagItems" :track-by="trackBy">
      <typing :index="index"></typing>
      <tag :text="item.text" :remove="item | getRemoveHandle index" :invalid="item.invalid">
      </tag>
    </template>
    <typing :index="length">
      <span v-if="placeholder" :class="klass.placeholder">{{placeholder}}</span>
    </typing>
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
import {arr, str, obj} from 'vuept'
import { _E, klass } from './lib'
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
    placeholder: str,
    klass: obj.default(() => klass),
    trackBy: str.default('$index'),
  },
  computed: {
    length() {
      return this.tags.length
    }
  },
  events: {
    [_E `insert`](index, text) {
      this.insertTag(index, {text})
    },
    [_E `activeOther`](index) {
      index >= 0 &&
        index <= this.length &&
        this.$broadcast(_E `active`, index)
    },
    [_E `remove`](index) {
      index > -1 && this.removeTag(index, undefined)
    }
  },
  methods: {
    removeTag(index) {
      !this.tags[index].readOnly && this.$emit('change', index, undefined)
    },
    insertTag(index, tag) {
      this.$emit('change', index, tag)
    },
    // dedupe(tag) {
    //   if (this.trackBy === '$index') return this.tags.includes(tag)
    //   else {
    //     let field = tag[this.trackBy]
    //     return this.tags.some(item => item[this.trackBy] === field)
    //   }
    // }
  },
  filters: {
    normalizeTagItems(items) {
      return items.map(item => typeof item === 'string' ? {text: item} : item)
    },
    getRemoveHandle(item, index) {
      return item.readOnly ? null : () => this.removeTag(index)
    },
  },
  components: {
    tag: require('./tag.vue'),
    typing: require('./typing.vue')
  }
}
</script>
