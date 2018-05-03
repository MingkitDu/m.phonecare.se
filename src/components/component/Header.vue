<template>
  <div>
    <div class="m-header">
      <div class="m-header-t">
        <div class="m-header-l">
          <img class="logo" :src="headerLogo" alt="">
        </div>
        <div class="m-header-r">
          <i class="fa fa-bars" aria-hidden="true" @click="silderbarTaggle()"></i>
        </div>
      </div>
      <m-search />
    </div>
  
    <m-sliderbar v-show="isShow" />
    <div class="background" v-show="isShow" @click="silderbarTaggle()"></div>
  </div>
</template>

<script>
  import search from '../Home/components/Search'
  import {
    mapState
  } from 'vuex'
  import sliderbar from './Sliderbar'
  export default {
    name: 'm-header',
    computed: {
      ...mapState(['headerLogo', 'drawerShow'])
    },
    methods: {
      silderbarTaggle() {
        this.isShow = !this.isShow
        // this.$children[0].isShow = !this.$children[0].isShow
        // console.log(this.$children[0].isShow)
        // this.$parent.$parent.toggle()
        // alert(this.$parent)
      },
      drawerToggle() {
        //  this.drawerShow=!this.drawerShow
        this.$store.dispatch('drawerToggle')
      },
    },
    components: {
      "m-sliderbar": sliderbar,
      "m-search": search
    },
    data() {
      return {
        isShow: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../static/hotcss/px2rem.scss';
  .m-header {
    position: fixed; // width: 100%;
    z-index: 1002;
    top: 0;
    left: 0;
    right: 0;
    padding: px2rem(20); // padding: 0 px2rem(30);
    background-color: #000000;
    color: #ffffff;
    .m-header-t {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: px2rem(10);
      .m-header-l {
        .logo {
          width: px2rem(240);
        }
      }
      .m-header-r {
        i {
          font-size: px2rem(48);
        }
      }
    }
  }
  
  .background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #282828;
    opacity: .6;
    z-index: 1000;
  }
</style>

