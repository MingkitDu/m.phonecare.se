<template>
  <div class="m-cart">
    <m-header />
    购物车
    <m-bottom />
  </div>
</template>

<script>
import header from '../component/Header'
import bottom from '../component/Bottom'
export default {
  name: 'm-cart',
  components: {
    'm-header': header,
    'm-bottom': bottom
  }
}
</script>

<style scoped>
@import '../../../static/hotcss/px2rem.scss';
.m-cart {
  padding: px2rem(164) 0 px2rem(100) 0;
}
</style>


