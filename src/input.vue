<template>
    <div class="tags-input" @click.self="inputNew">
        <template v-for="(index, item) in tags">
            <typing :index="index"></typing>
            <tag :item="item" :remove="removeTag"></tag>
        </template>
        <typing :index="tags.length" :typing.sync="lastInput"></typing>
    </div>
</template>
<style scoped>
.tags-input {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
}
</style>
<script>
    export default {
        props: {
            tags: {
                twoWay: true,
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                lastInput: false
            }
        },
        events: {
            typingFinish(text, index) {
                this.tags.splice(index, 0, {text})
            }
        },
        methods: {
            removeTag(item) {
                let index = this.tags.indexOf(item)
                index > -1 && this.tags.splice(index, 1)
            },
            inputNew() {
                this.lastInput = true
            }
        },
        components:{
            tag: require('./tag.vue'),
            typing: require('./typing.vue')
        }
    }
</script>