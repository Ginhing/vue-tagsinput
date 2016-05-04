<template>
    <div class="tags-input">
        <tag v-for="item in tags"
            :item="item"
            :remove="remove">
        </tag>
    </div>
</template>
<style lang='scss' scoped>
.tags-input {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.19);
    padding: 2px;
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
        methods: {
            remove(item) {
                let index = this.tags.indexOf(item)
                index > -1 && this.tags.splice(index, 1)
            }
        },
        components:{
            tag: require('./tag.vue')
        }
    }
</script>