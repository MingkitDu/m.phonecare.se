<template>
  <div class="tabber">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <span>Popular</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span>Nytt</span>
      </mt-tab-item>
      <mt-tab-item id="3">
        <span>Rea</span>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item class="" id="1">
        <m-tabbarleft v-for="n in 8"/>
        <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" /> -->
        <m-tabbarmid v-for="n in 8" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n" /> -->
        <m-tabbarright v-for="n in 8" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import tabbarleft from './Tabbarleft'
  import tabbarmid from './Tabbermid'
  import tabbarright from './Tabbarright.vue'
  export default {
    name: 'tabbar',
    data() {
      return {
        selected: '1'
      }
    },
    components: {
      'm-tabbarleft': tabbarleft,
      'm-tabbarmid': tabbarmid,
      'm-tabbarright': tabbarright
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../static/hotcss/px2rem.scss";
  .tabber {
    padding: 0 px2rem(15);
    .mint-navbar {
      height: px2rem(80);
      .mint-tab-item {
        display: block;
        font-size: px2rem(28);
        .mint-tab-item-label {
          height: px2rem(90);
          font-size: px2rem(28);
          line-height: px2rem(90);
          span {
            font-size: px2rem(24);
            line-height: px2rem(40);
          }
        }
      }
      .mint-tab-item.is-selected {
        border-bottom: px2rem(6) solid #fc6908;
        color: #fc6908;
        margin-bottom: px2rem(-3);
      }
    }
    .mint-tab-container-item {
      &:last-child {
        margin-bottom: px2rem(100);
      }
    }
  }
</style>
