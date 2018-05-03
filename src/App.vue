<template>
  <div id="app">
    <!-- <drawer :show="drawerShow"
    :pos="pos"
    :tran="tran"
    @change-show="changeDrawerShow"
    >
    <router-view></router-view>
  </drawer> -->
  <router-view></router-view>
</div>
</template>

<script>
 import Drawer from './components/component/Drawer.vue'
 import { mapState } from 'vuex'
 export default {
   data(){
     return {
       pos: 'right',
       tran: 'push',
       navItems: [
       'decide the width u like',
       'Item2',
       'Item3',
       'Item4',
       'Item5'
       ]
     }
   },
   computed: {
    ...mapState(['drawerShow'])
  },
   methods: {
     drawerToggle() {
      //  this.drawerShow=!this.drawerShow
      // console.log(this.drawerShow)
      this.$store.dispatch('drawerToggle')
     },
     onHide() {
       console.log('hide');
     },
     changeDrawerShow(state) {
      // this.drawerShow=state;
      this.$store.dispatch('drawerToggle')
    },
    onShow() {
     console.log('show');
   }
 },
 components: { Drawer }
}
</script>

<style lang="scss">

  @import '../static/reset/reset.css';


  #app {
    height: 100%;
    width: 100%;
    // max-width: 600px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  button, input[type="button"], a.button {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    -webkit-transition: all;
    -moz-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    -moz-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    -moz-transition-duration: .2s;
    transition-duration: .2s;
  }
</style>
