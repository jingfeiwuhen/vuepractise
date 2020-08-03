<template>
  <div id="app">
    <h2>------------modules-------------</h2>
    <h2 @click="changeName">{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>{{$store.state.counter}}</h2>
    <button @click="btnAdd">add</button>
    <button @click="btnAddCount(5)">add5</button>
    <button @click="btnSub">sub</button>
    <button @click="btnAddStudent({id: 7, name: 'sunc9', age: 99})">添加学生</button>
    <button @click="btnUpdateInfo">添加学生</button>
    <h2>{{$store.state.info}}</h2>
    <h2>---------------getters-------------------</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreThanAge(30)}}</h2>
    <h-w></h-w>
  </div>
</template>

<script>
  import HW from '@/components/HelloWorld'
  import * as types from './store/mutations-types'

  export default {
    name: 'App',
    data() {
      return {
        msg: '11111',
        counter: 111
      }
    },
    methods: {
      btnAdd() {
        this.$store.commit(types.INCREMENT)
      },
      btnSub() {
        this.$store.commit(types.DECREMENT)
      },
      //普通风格
      // btnAddCount(count){
      //   this.$store.commit('incrementCount',count)
      // },
      //对象风格
      btnAddCount(count) {
        // this.$store.commit('incrementCount',count)
        this.$store.commit({
          type: 'incrementCount',
          count: count
        })
      },
      btnUpdateInfo() {
        //mutation
        // this.$store.commit('updateInfo')
        //action   dispatch -> commit ->updateInfo
        this.$store.dispatch('aUpdateInfo','infoData').then(res=> console.log(res))
      },
      btnAddStudent(student) {
        this.$store.commit('incrementStudent', student)
      },
      changeName(){
        this.$store.commit('updateName','richard')
      },
      asyncUpdateName(){
        this.$store.dispatch('aUpdateName')
      }
    },
    components: {
      HW
    }
  }
</script>

<style>
</style>
