<template>
  <div @click.stop @touchmove.prevent
       class="alert"
       v-if="showFlag">
    <div class="alert-container">
      <span class="content" v-text="content"></span>
      <div class="button-box">
        <span class="button" @click="confirm" v-text="confirmBtnText"></span>
        <span v-show="cancelBtnText!==''" class="button" @click="cancel" v-text="cancelBtnText"></span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        showFlag: false
      }
    },
    props: {
      content:{
        type: String,
        default: '内容'
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      cancelBtnText: {
        type: String,
        default: ''
      }
    },
    methods: {
      show(){
        this.showFlag = true;
      },
      hide(){
        this.showFlag = false;
      },
      confirm(){
        this.$emit('confirm');
        this.hide();
      },
      cancel(){
        this.$emit('cancel');
        this.hide();
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../public-css/mixin";
  @import "../../public-css/variable";

  $color-line: #EAEAEB;
  .alert {
    z-index: 9999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $color-background-cover;
    .alert-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) !important;
      @include px2rem(width, 563);
      @include px2rem(height, 254);
      background: #fff;
      border: px2rem(2) solid $color-line;
      @include px2rem(border-radius, 15);
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        @include px2rem(height, 171);
        @include font(2);
        box-sizing: border-box;
        border-bottom: px2rem(4) solid $color-line;
      }
      .button-box {
        display: flex;
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          @include px2rem(height, 83);
          @include font(3);
          &:nth-child(1) {
            color: $color-theme;
          }
          &:nth-child(2) {
            box-sizing: border-box;
            border-left: px2rem(4) solid $color-line;
          }
        }
      }
    }
  }
</style>
