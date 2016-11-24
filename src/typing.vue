<template>
  <span :class="klass.gap" @click="$emit('click')">
    <input type="text"
        :class="klass.input"
        :style="{width: baseWidth + charLen(text) + 'ch'}"
        ref="input"
        v-model="text"
        @mousedown="preventNativeActive"
        @blur="finishEditing"
        @keydown="keyPress"
    />
    <slot v-if="!typing"></slot>
  </span>
</template>
<style scoped>
input.input {
  outline: none;
  box-shadow: none;
  border: none;
  background-color: transparent;
  font-family: monospace;
  padding: 0 0.5ch;
  line-height: 2em;
}
.gap:last-child {
  flex: 1;
}
</style>
<script>
import { num, bool, func } from 'vuept'
import { KEY_CODE } from './lib'
export default {
  props: {
    index: num.required,
    typing: bool.required,
    handleInsert: func.required,
    handleRemove: func.required,
    activeOther: func.required
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    baseWidth() {
      return this.typing ? 2 : 0
    },
    klass() {
      return this.$parent.klass
    },
    trimText() {
      return this.text.trim()
    }
  },
  watch: {
    typing(val) {
      val && this.$nextTick(() => {
        let $el = this.$refs.input
        $el.focus()
      })
    }
  },
  methods: {
    preventNativeActive(e) {
      if (!this.typing) e.preventDefault()
    },
    finishEditing() {
      this.addTag()
      this.$emit('blur', this.index)
    },
    addTag() {
      let {trimText} = this
      if (trimText) {
        this.handleInsert(this.index, trimText)
        this.text = ''
        return trimText
      }
    },
    charLen(str) {
      let charNum = 0
      for (let i = 0; i < str.length; ++i) {
        charNum += str.charCodeAt(i) > 127 ? 2 : 1
      }
      return charNum
    },
    keyPress(e) {
      let $input = this.$refs.input
      let cursor = $input.selectionStart
      let valLen = $input.value.length
      let key = e.keyCode
      let native = false

      if (key === KEY_CODE.RIGHT && valLen === 0) {
        this.activeOther(this.index + 1)
      } else if (key === KEY_CODE.LEFT && valLen === 0) {
        this.activeOther(this.index - 1)
      } else if (key === KEY_CODE.BACKSPACE && cursor === 0) {
        let index = this.index - 1
        this.handleRemove(index)
        this.activeOther(index)
      } else if (key === KEY_CODE.TAB) {
        let index = this.index + 1
        this.addTag() && this.$nextTick(() => this.activeOther(index))
      } else native = true

        !native && e.preventDefault()
    }
  }
}
</script>
