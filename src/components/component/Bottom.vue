<template>
  <div class="m-bottom">
    <div :class="item.active == true?'m-bottom-btn-active':'m-bottom-btn'" v-for="(item,index) in bottomTag" :key=index @click="addClass(item,index)">
      <router-link class="m-bottom-btn-router" :to="item.route" >
        <i :class="item.class " aria-hidden="true"></i>
        <span>{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'm-bottom',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['bottomTag'])
  },
  methods: {
    addClass (item,$index) {
      // console.log(this.bottomTag.active)
      this.$nextTick(function (item) {
        this.bottomTag.forEach(function (item) {

          item.active = false;

         })
         this.bottomTag[$index].active = true;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
  .m-bottom {
    // height: px2rem(100);
    // height: calc(500px + constant(safe-area-inset-bottom));
    z-index: 999;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    padding: px2rem(20) 0 px2rem(30) 0;
    .m-bottom-btn {
      width: 25%;
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      .m-bottom-btn-router {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #8e8e93;
        i {
          font-size: px2rem(45)
        }
        span {
          font-size: px2rem(20)
        }
      }
    }
    .m-bottom-btn-active {
      width: 25%;
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      .m-bottom-btn-router {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fc6908;
        i {
          font-size: px2rem(45)
        }
        span {
          font-size: px2rem(20)
        }
      }
    }
  }
</style>

