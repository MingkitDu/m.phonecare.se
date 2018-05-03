<template>
  <mt-swipe class="banner" :auto="0">
    <mt-swipe-item class="banner-list">
      <router-link :to=item.link :key=index v-for="(item,index) in banner" class="toGo">
        <img :src=item.imgSrc alt="" :style="{background:item.color}">
        <span class="title">{{item.title}}</span>
      </router-link>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      banner: [{
        imgSrc: '../../../../static/image/apple-icon-2.png',
        title: 'Apple',
        link: '/',
        color: '#676868'
      },{
        imgSrc: '../../../../static/image/samsung-icon-2.png',
        title: 'Samsung',
        link: '/',
        color: '#1428a0'
      },{
        imgSrc: '../../../../static/image/huawei-icon-2.png',
        title: 'Huawei',
        link: '/',
        color: '#d3252e'
      },{
        imgSrc: '../../../../static/image/sony-icon-2.png',
        title: 'Sony',
        link: '/',
        color: '#000'
      },{
        imgSrc: '../../../../static/image/htc-icon-2.png',
        title: 'HTC',
        link: '/',
        color: '#a5cf4c'
      },{
        imgSrc: '../../../../static/image/onePlus-icon-2.png',
        title: 'OnePlus',
        link: '/',
        color: '#d3252e'
      },{
        imgSrc: '../../../../static/image/nokia-icon.png',
        title: 'Nokia',
        link: '/',
        color: '#134191'
      },{
        imgSrc: '../../../../static/image/lg-icon-2.png',
        title: 'LG',
        link: '/',
        color: '#c6004e'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../static/hotcss/px2rem.scss';
.banner {
  height: px2rem(354);
  width: 100%;
  .mint-swipe-indicator.is-active{
    background: #000;
    opacity: 1;
  }
  .banner-list{
    // display: flex;
    flex-flow: wrap;
    box-sizing: content-box;
    overflow: hidden;
    .toGo {
      display: block;
      float: left;
      margin-top: px2rem(22);
      box-sizing: border-box;
      height: 36%;
      text-align: center;
      text-decoration: none;
      width: 25%;
      img {
        display: inline-block;
        width: px2rem(90);
        height: px2rem(90);
        border-radius: px2rem(5);
      }
      .title{
        display: block;
        color: #333;
        font-size: px2rem(20);
        margin-top: px2rem(-10);
        margin-top: px2rem(0);
      }
    }
  }

}
</style>

