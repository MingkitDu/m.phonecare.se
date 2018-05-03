<template>
  <div class="home">
    <m-header />
    <!-- <m-search /> -->
    <m-banner />
    <p class="product">
      Rekommendera Produkter
    </p>
    <m-tagbar />
    <m-bottom />
  </div>
</template>

<script>
// import search from './components/Search'
import header from '../component/Header'
import banner from './components/Banner'
import tagbar from './components/Tabbar'
import bottom from '../component/Bottom'

export default {

  name: '',
  data () {
    return {

    }
  },
  components: {
    'm-header': header,
    // 'm-search': search,
    'm-bottom': bottom,
    'm-banner': banner,
    'm-tagbar': tagbar
  }

}
</script>

<style lang="scss" scoped>
@import "../../../static/hotcss/px2rem.scss";
  .product {
    padding: px2rem(10) 0 px2rem(50) 0;
    text-align: center;
    font-size: px2rem(30);
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      display: block;
      background-color: #000;
      height: px2rem(3);
      width: px2rem(10);
    }
  }
  .product::after {
    display: block;
    background-color: #000;
    height: px2rem(2);
    width: px2rem(40);
    margin-left:px2rem(30);
    content:'';
  }
  .product::before {
    display: block;
    background-color: #000;
    height: px2rem(2);
    width: px2rem(40);
    margin-right:px2rem(30);
    content:'';
  }
  .home {
    padding: px2rem(164) 0 px2rem(100) 0;
  }
</style>
