<template>
    <div :class="klass.container"
        @mousedown.self.prevent
        @click.self="inputLast"
        >
        <template v-for="(index, item) in tags" :track-by="trackBy">
            <typing :index="index"></typing>
            <tag
                :text="item | getText"
                :remove="item | getRemoveHandle index"
                :valid="item | validate">
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
import {_E, klass} from './lib'
export default {
    props: {
        tags: {
            twoWay: true,
            type: Array,
            required: true
        },
        placeholder: {type: String},
        klass: {type: Object, default: () => klass},
        insert: {type: Function, default: text => text},
        render: {type: Function, default: item => item},
        readOnly: {type: Function, default: item => false},
        trackBy: {type: String, default: '$index'},
        validator: [String, Function]
    },
    computed: {
        length() {
            return this.tags.length
        }
    },
    events: {
        [_E`insert`](index, text) {
            let tag = this.insert(text)
            tag && !this.dedupe(tag) && this.tags.splice(index, 0, tag)
        },
        [_E`activeOther`](index) {
            index >= 0
            && index <= this.length
            && this.$broadcast(_E`active`, index)
        },
        [_E`remove`]: 'removeTag'
    },
    methods: {
        removeTag(index) {
            if (index > -1) {
                let canRM = !this.readOnly(this.tags[index])
                canRM && this.tags.splice(index, 1)
            }
        },
        inputLast() {
            this.$broadcast(_E`active`, this.length)
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
        },
        validate(item) {
            let result = true
            this.validator && typeof(this.validator) === 'function' && (result = this.validator(this.render(item)))
            this.validator && typeof(this.validator) === 'string' && (result = new RegExp(this.validator, 'g').test(this.render(item)))
            return result
        }
    },
    components:{
        tag: require('./tag.vue'),
        typing: require('./typing.vue')
    }
}
</script>