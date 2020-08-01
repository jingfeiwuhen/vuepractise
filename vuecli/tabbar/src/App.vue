<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <!--    <router-link to="/home" replace>首页</router-link>-->
    <!--    <router-link to="/category" replace>分类</router-link>-->
    <!--    <router-link to="/cart" replace>购物车</router-link>-->
    <!--    <router-link to="/profile" replace>我的</router-link>-->
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
  import MainTabBar from '@/components/tabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
