<template>
  <div id="app">
    <!-- 第一种跳转方式-->
    <!-- 默认a标签 tag可以改变标签 active-class设置活跃类名 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+ userId" tag="button">用户</router-link>
    <!-- query 就是?后面的东西 -->
    <router-link :to="{path:'/profile',query:{name:'sunc',age:18,height:1.88}}" tag="button">档案</router-link>
    <!-- 第二种跳转方式 -->
    <!--    <button @click="homeClick" >首页</button>-->
    <!--    <button @click="aboutClick" >关于</button>-->
    <!-- 渲染出来的标签的位置 -->
    <!-- exclude 里面用的是组件的name属性 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {userId: 'lisi'}
    },
    methods: {
      homeClick() {
        //通过代码跳转
        this.$router.replace('/home')
        console.log('homeClick');
      },
      aboutClick() {
        this.$router.replace('/about')
        console.log('aboutClick');
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .router-link-active {
    color: darkred;
    background-color: #42b983;
  }
</style>
