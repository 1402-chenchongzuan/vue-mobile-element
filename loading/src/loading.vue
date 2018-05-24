<template>
  <div :class="load" v-if="showFlag" @touchmove.prevent>
    <div class="loading-box">
      <img src="./loading.gif"/>
      <p class="text" v-text="title"></p>
    </div>
  </div>
</template>
<script>
  export default {
      name:'loading',
      data(){
        return {
          showFlag:true
        }
      },
    computed: {
      load(){
        return this.screen ? 'screen' : 'small';
      }
    },
    methods:{
      show(text){
          this.title=text||this.title;
          this.showFlag=true;
      },
      hide(){
          this.showFlag=false;
      }
    },
    props: {
      screen: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../public-css/mixin";
  @import "../../public-css/variable";


  .loading-img{
      @include px2rem(width, 36);
      @include px2rem(height,36);
  }
  .screen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:9999;
    .loading-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      @include px2rem(width, 240);
      @include px2rem(height, 240);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(86, 85, 87, .7);
      @include px2rem(border-radius, 9);
      img {
        @extend .loading-img;
        @include px2rem(margin-top, 60);
      }
      .text{
        color: #ffffff;
        @include font(2);
        @include px2rem(margin-top, 48);
      }
    }
  }

  .small {
    width: 10rem;
    text-align: center;
    .loading-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding:px2rem(45) 0;
      img {
        @extend .loading-img;
      }
      .text{
        @include px2rem(margin-top, 20);
        @include font(3);
        color: #000;
      }
    }
  }
</style>
