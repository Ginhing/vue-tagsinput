<template>
    <div class="tags-input" @click.self="inputNew">
        <template v-for="(index, item) in tags" :track-by="trackBy">
            <typing :index="index"></typing>
            <tag :text="item | getText" :remove="item | getRemoveHandle index"></tag>
        </template>
        <typing :index="tags.length" :typing.sync="lastInput"></typing>
    </div>
</template>
<style scoped>
.tags-input {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
<script>
    export default {
        props: {
            tags: {
                twoWay: true,
                type: Array,
                required: true
            },
            insert: {
                type: Function,
                default: text => text
            },
            render: {
                type: Function,
                default: item => item
            },
            readOnly: {
                type: Function,
                default: item => false
            },
            trackBy: {
                type: String,
                default: '$index'
            }
        },
        data() {
            return {
                lastInput: false
            }
        },
        events: {
            typingFinish(text, index) {
                let tag = this.insert(text)
                !this.dedupe(tag) && this.tags.splice(index, 0, tag)
            }
        },
        methods: {
            removeTag(index) {
                index > -1 && this.tags.splice(index, 1)
            },
            inputNew() {
                this.lastInput = true
            },
            dedupe(tag) {
                if (this.trackBy === '$index') return this.tags.includes(tag)
                else {
                    let field = tag[this.trackBy]
                    return this.tags.some(item => item[this.trackBy] === field)
                }
            }
        },
        filters: {
            getText(item) {
                return this.render(item)
            },
            getRemoveHandle(item, index) {
                return this.readOnly(item) ? null : this.removeTag.bind(this, index)
            }
        },
        components:{
            tag: require('./tag.vue'),
            typing: require('./typing.vue')
        }
    }
</script>