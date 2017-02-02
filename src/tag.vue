<template>
  <span :class="klass.tag" :invalid="invalid">
    {{text}}
    <img
      v-if="remove"
      class="hl-click"
      @click="remove"
      :src="crossIcon" alt="close"
    />
  </span>
</template>
<style scoped>
.tag {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  color: #858585;
  font-weight: normal;
  font-size: 1.1em;
  padding: 0 0.5ch;
  vertical-align: middle
}

.tag[invalid] {
  border: 1px solid red;
}

.hl-click {
  width: 10px;
  cursor: pointer;
}

.hl-click:hover:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
</style>
<script>
import {str, bool} from 'vuept'

const CROSS_ICON = require('./assets/ic_close_black_16px.svg')

export default {
  props: {
    text: str.required,
    remove: [Function, null],
    invalid: bool.default(false),
  },
  data() {
    return {crossIcon: CROSS_ICON}
  },
  computed: {
    klass() {
      return this.$parent.klass
    }
  }
}
</script>
