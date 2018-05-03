<template>
  <div class="m-search">
    <!-- <input type="text" placeholder="aa"> -->
    <router-link to='/Search' class='m-search-a'>
      <i class="fa fa-search" aria-hidden="true"></i>
      <span>Sök i hela butiken...</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'm-search'
}
</script>

<style lang="scss" scoped>
  @import '../../../../static/hotcss/px2rem.scss';
  .m-search {
    // padding: px2rem(20);
    // padding-top: 0;
    // // margin-top:px2rem(96);
    // background-color: #000000;
    .m-search-a {
      width: 100%;
      text-decoration: none;
      color: #8e8e93;
      height: px2rem(60);
      display: flex;
      align-items: center;
      border: none;
      font-size: px2rem(28);
      padding-left:px2rem(10);
      outline: none;
      background-color: #ffffff;
      i {
        margin-right: px2rem(10);
      }
    }
  }
</style>
