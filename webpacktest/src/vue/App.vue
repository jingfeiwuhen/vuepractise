<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
        <cpn></cpn>
        <cpn></cpn>
        <cpn></cpn>
        <cpn></cpn>
        <cpn></cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn';

    export default {
        /**
         * name属性 其实没有什么语意
         * 当配合keep-alive组件时有用 会出现include和exclude属性，包含或者排除指定name组件
         * 或者配合vue-tools 插件调试时起作用 如果没有name 那么组件将被命名为<AnonymousComponent>，这很没有语义。
         * 所以还是要加上name的值
         *
         */
        name: "App",
        components: {
            Cpn
        },
        data() {
            return {
                message: 'hello world11111',
                name: 'sunc'
            }
        },
        methods: {
            btnClick() {
                console.log('aaaa');
            }
        }
    }
</script>

<style scoped>
    .title {
        color: green;
    }
</style>