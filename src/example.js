import Vue from 'vue'

new Vue({
    el: '#example',
    data() {
        return {tags: [{text: 'hello'}, {text: 'world'}]}
    },
    components: {
        'tags-input': require('./input.vue')
    }
})