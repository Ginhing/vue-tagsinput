import Vue from 'vue'

new Vue({
    el: '#example',
    data() {
        return {
            id: 1,
            tags: [{text: 'hello', id:0}, {text: 'world', id:1}],
        }
    },
    methods: {
        insertTag(text) {
            this.id += 1
            return {id: this.id, text}
        },
        renderTag(item) {
            return `**${item.text}**`
        },
        setRO(item) {
            return item.id === 0
        }
    },
    components: {
        'tags-input': require('./input.vue')
    }
})