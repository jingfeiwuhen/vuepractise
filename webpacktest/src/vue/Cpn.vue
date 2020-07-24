<template>
    <div>
        <h2>{{massage1}}</h2>
        <p>{{massage2}}</p>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data() {
            return {
                massage1: "我是cpn组件标题",
                massage2: "我是cpn组件内容"
            }
        }
    }
</script>

<style scoped>

</style>