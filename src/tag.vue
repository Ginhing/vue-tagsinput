<template>
    <span class="tag">
        {{item.text}}
        <span class="remove hl-click" @click.stop="remove(item)"></span>
    </span>
</template>
<style scoped>
.tag {
    border-radius: 5px;
    border: 1px solid red;
    background-color: rgb(250, 227, 92);
    font-size: 14px;
}
.remove::after{
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
    props: ['item', 'remove']
}
</script>