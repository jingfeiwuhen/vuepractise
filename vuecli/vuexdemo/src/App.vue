<template>
  <div id="app">
    <h2 >{{$store.state.counter}}</h2>
    <button @click="btnAdd">add</button>
    <button @click="btnSub">sub</button>
    <h-w></h-w>
  </div>
</template>

<script>
  import HW from '@/components/HelloWorld'
  export default {
    name: 'App',
    data() {
      return {
        msg: '11111',
        counter: 111
      }
    },
    methods:{
      btnAdd(){
        this.$store.commit('increment')
      },
      btnSub(){
        this.$store.commit('decrement')
      }
    },
    components:{
      HW
    }
  }
</script>

<style>
</style>
