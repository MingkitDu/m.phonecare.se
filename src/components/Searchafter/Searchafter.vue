<template>
  <div class="m-searchAfter">
    <div class="search-header">
      <div class="search-header-left" @click = "back()">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="search-header-mid">
        <input type="text" placeholder="Sök i hela butiken..." />
      </div>
      <div class="search-header-right">
        <button>SEARCH</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-searchAfter",
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
  .m-searchAfter {
    .search-header {
      display: flex;
      // padding: px2rem(20);
      justify-content: space-between;
      align-items: center;
      // margin-top:px2rem(96);
      background-color: #000000;
      .search-header-left{
        color: #fff;
        // padding: 0 px2rem(10) 0 0;
        height: px2rem(100);
        width: px2rem(100);
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          font-size: px2rem(40);
        }
      }
      .search-header-mid {
        width: 100%;
        height: px2rem(100);
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 100%;
          color: #8e8e93;
          height: px2rem(60);
          border: none;
          font-size: px2rem(28);
          padding-left:px2rem(10);
          outline: none;
          background-color: #ffffff;
        }
      }
      .search-header-right {
         height: px2rem(100);
         width: px2rem(200);
         margin: 0 px2rem(15);
         display: flex;
         justify-content: center;
         align-items: center;
        button {
          color: #fff;
          background-color: #fc6908;
          padding: 0 px2rem(20);
          height: px2rem(60);
          border: none;
          font-size: px2rem(32);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

</style>
