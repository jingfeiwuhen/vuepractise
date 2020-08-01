<template>
  <div class="tab-bar-item" @click="btnClick">
<!--  <div class="tab-bar-item">-->
    <div v-if="!isActive">
      <slot name="bar-icon"></slot>
    </div>
    <div v-else >
      <slot name="bar-icon-active"></slot>
    </div>
    <div :style="itemTextColor">
      <slot name="bar-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BarItem",
    props: {
      link: String,
      textColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path == this.link;
      },
      itemTextColor(){
        return this.isActive?{color:this.textColor} :{}
      }
    },
    methods:{
      btnClick() {
        if(this.link!=this.$route.path){
          this.$router.replace(this.link)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }

  .tab-bar-item img {
    width: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
  }
</style>
