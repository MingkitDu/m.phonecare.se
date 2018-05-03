<template>
  <div class="m-user">
    <m-header />
    <m-loginpage />
    <m-bottom />
  </div>
</template>

<script>
import header from '../component/Header'
import loginpage from './components/Loginpage'
import bottom from '../component/Bottom'
export default {
  name: 'm-user',
  components: {
    'm-header': header,
    'm-loginpage': loginpage,
    'm-bottom': bottom
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../static/hotcss/px2rem.scss';
  .m-user {
    padding: px2rem(164) 0 px2rem(100) 0;
  }
</style>
