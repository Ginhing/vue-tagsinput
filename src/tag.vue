<template>
  <span :class="klass.tag" :invalid="!valid">
    {{text}}
    <span v-if="remove"
      class="remove hl-click"
      @click="remove"
    ></span>
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
}

.tag[invalid] {
  border: 1px solid red;
}

.remove {
  cursor: pointer;
}

.remove::after {
  color: rgba(0, 0, 0, 0.6);
  content: "\2a2f";
  padding-left: 1px;
}

.hl-click:hover:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
</style>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    remove: {
      type: Function
    },
    valid: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    klass() {
      return this.$parent.klass
    }
  }
}
</script>
