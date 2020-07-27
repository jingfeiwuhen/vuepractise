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
        name: "App",
        components:{
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
    .title{
        color: green;
    }
</style>