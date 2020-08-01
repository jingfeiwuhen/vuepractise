<template>
  <div>
    <tab-bar>
      <bar-item link="/home">
        <img slot="bar-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="bar-icon-active" src="~assets/img/tabbar/home.active.svg" alt="">
        <div slot="bar-text">首页</div>
      </bar-item>
      <bar-item link="/category">
        <img slot="bar-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="bar-icon-active" src="~assets/img/tabbar/category.active.svg" alt="">
        <div slot="bar-text">分类</div>
      </bar-item>
      <bar-item link="/cart">
        <img slot="bar-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="bar-icon-active" src="~assets/img/tabbar/shopcart.active.svg" alt="">
        <div slot="bar-text">购物车</div>
      </bar-item>
      <bar-item link="/profile">
        <img slot="bar-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="bar-icon-active" src="~assets/img/tabbar/profile.active.svg" alt="">
        <div slot="bar-text">我的</div>
      </bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar'
  import BarItem from '@/components/tabbar/BarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,BarItem
    }
  }
</script>

<style scoped>

</style>
