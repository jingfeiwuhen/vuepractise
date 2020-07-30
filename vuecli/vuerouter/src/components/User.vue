<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <p>{{getUserId}}</p>
    <p>{{$route.params.userId}}</p>
<!--    <p>{{$route.params.detail}}</p>-->
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      getUserId(){
        // route对象 获取当前活跃的对象
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
