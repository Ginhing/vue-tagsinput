<template>
    <input v-if="typing"
        v-el:input
        type="text"
        v-model="text"
        @blur="finish"
        :style="{width: 1 + charLen(text) + 'ch'}" />
    <span v-else
        class="gap" @click.self="begin">&nbsp;</span>
</template>
<style scoped>
input {
    outline: none;
    box-shadow: none;
    border: none;
    background-color: transparent;
    font-family: monospace;
    padding: 0.5ch;
}
.gap {
    flex-basis: 7px;
}
</style>
<script>
import Vue from 'vue'
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        typing: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            text: ''
        }
    },
    watch: {
        typing(val) {
            val && Vue.nextTick(_ => this.$els.input.focus())
        }
    },
    methods: {
        begin() {
            this.typing = true
        },
        finish() {
            this.text && this.$dispatch('typingFinish', this.text, this.index)
            this.typing = false
            this.text = ''
        },
        charLen(str) {
            let charNum = 0
            for (let i = 0; i < str.length; ++i) {
                charNum += str.charCodeAt(i) > 127 ? 2 : 1
            }
            return charNum
        }
    }
}
</script>